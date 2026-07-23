(function registerUrodynamicAssessmentEngine() {
  const chapterDomainMap = {
    thinking: "representativeness",
    physiology: "storage",
    tracing: "technicalQuality",
    pressurePhysics: "technicalQuality",
    instrument: "technicalQuality",
    artifacts: "technicalQuality",
    storageDisorders: "storage",
    voidingDisorders: "voiding",
    coordinationDisorders: "coordination",
    neuroUrology: "limits"
  };

  function emptyExamState() {
    return {
      answers: {},
      submitted: false,
      completedAt: null
    };
  }

  function createDefaultAssessmentState(model) {
    return {
      section: "overview",
      pretest: emptyExamState(),
      posttest: emptyExamState(),
      capstone: {
        answers: {},
        eventPosition: null,
        submitted: false,
        reviewed: false,
        completedAt: null
      },
      report: {
        fields: Object.fromEntries(model.reportFields.map((field) => [field.id, ""])),
        compared: false,
        updatedAt: null
      }
    };
  }

  function normalizeExamState(saved) {
    const source = saved && typeof saved === "object" ? saved : {};
    return {
      answers: source.answers && typeof source.answers === "object" && !Array.isArray(source.answers)
        ? { ...source.answers }
        : {},
      submitted: Boolean(source.submitted),
      completedAt: typeof source.completedAt === "string" ? source.completedAt : null
    };
  }

  function normalizeAssessmentState(saved, model) {
    const defaults = createDefaultAssessmentState(model);
    const source = saved && typeof saved === "object" ? saved : {};
    const capstone = source.capstone && typeof source.capstone === "object" ? source.capstone : {};
    const report = source.report && typeof source.report === "object" ? source.report : {};

    return {
      section: ["overview", "pretest", "posttest", "capstone", "report", "governance", "instructor"].includes(source.section)
        ? source.section
        : defaults.section,
      pretest: normalizeExamState(source.pretest),
      posttest: normalizeExamState(source.posttest),
      capstone: {
        answers: capstone.answers && typeof capstone.answers === "object" && !Array.isArray(capstone.answers)
          ? { ...capstone.answers }
          : {},
        eventPosition: Number.isFinite(capstone.eventPosition) ? capstone.eventPosition : null,
        submitted: Boolean(capstone.submitted),
        reviewed: Boolean(capstone.reviewed),
        completedAt: typeof capstone.completedAt === "string" ? capstone.completedAt : null
      },
      report: {
        fields: Object.fromEntries(
          model.reportFields.map((field) => [
            field.id,
            typeof report.fields?.[field.id] === "string" ? report.fields[field.id] : ""
          ])
        ),
        compared: Boolean(report.compared),
        updatedAt: typeof report.updatedAt === "string" ? report.updatedAt : null
      }
    };
  }

  function scoreExam(items, examState) {
    const results = items.map((item) => {
      const selectedIndex = Number(examState.answers[item.id]);
      const answered = Number.isInteger(selectedIndex) && Boolean(item.options[selectedIndex]);
      return {
        id: item.id,
        domain: item.domain,
        competency: item.competency,
        answered,
        selectedIndex: answered ? selectedIndex : null,
        correct: answered && selectedIndex === item.correctIndex,
        errorType: answered && selectedIndex !== item.correctIndex ? item.errorType : null
      };
    });

    const answered = results.filter((result) => result.answered);
    const correct = answered.filter((result) => result.correct);
    const domainBreakdown = {};
    const errorCounts = {};

    results.forEach((result) => {
      domainBreakdown[result.domain] ||= { attempted: 0, correct: 0 };
      if (result.answered) {
        domainBreakdown[result.domain].attempted += 1;
        if (result.correct) domainBreakdown[result.domain].correct += 1;
      }
      if (result.errorType) errorCounts[result.errorType] = (errorCounts[result.errorType] || 0) + 1;
    });

    return {
      total: items.length,
      answered: answered.length,
      correct: correct.length,
      percent: answered.length ? Math.round((correct.length / answered.length) * 100) : 0,
      complete: answered.length === items.length,
      domainBreakdown,
      errorCounts,
      results
    };
  }

  function scoreCapstone(model, capstoneState) {
    const structured = model.capstoneCase.structuredQuestions.map((question) => {
      const selectedIndex = Number(capstoneState.answers[question.id]);
      const answered = Number.isInteger(selectedIndex) && Boolean(question.options[selectedIndex]);
      return {
        competency: question.competency,
        answered,
        correct: answered && selectedIndex === question.correctIndex
      };
    });
    const { start, end } = model.capstoneCase.eventWindow;
    const eventAnswered = Number.isFinite(capstoneState.eventPosition);
    const eventCorrect = eventAnswered && capstoneState.eventPosition >= start && capstoneState.eventPosition <= end;
    const reportCompetencies = ["inference", "limit", "response"];
    const textCompleted = reportCompetencies.filter(
      (competency) => String(capstoneState.answers[competency] || "").trim().length >= 20
    );
    const autoEvidence = [
      ...structured,
      { competency: "event", answered: eventAnswered, correct: eventCorrect }
    ];
    const attempted = autoEvidence.filter((item) => item.answered).length;
    const correct = autoEvidence.filter((item) => item.correct).length;

    return {
      attempted,
      correct,
      total: autoEvidence.length,
      percent: attempted ? Math.round((correct / attempted) * 100) : 0,
      complete: attempted === autoEvidence.length && textCompleted.length === reportCompetencies.length,
      eventCorrect,
      textCompleted,
      requiresHumanReview: textCompleted.length > 0,
      evidence: autoEvidence
    };
  }

  function masteryLevel(percent, attempted) {
    if (!attempted) return { id: "none", label: "Sin evidencia" };
    if (percent < 60) return { id: "initial", label: "Inicial" };
    if (percent < 80 || attempted < 2) return { id: "developing", label: "En desarrollo" };
    return { id: "mastery", label: "Dominio" };
  }

  function calculateMastery(model, assessmentState, courseContext) {
    const evidence = Object.fromEntries(
      model.competencies.map((competency) => [competency.id, { attempted: 0, correct: 0 }])
    );

    function addEvidence(competencyId, correct) {
      if (!evidence[competencyId]) return;
      evidence[competencyId].attempted += 1;
      if (correct) evidence[competencyId].correct += 1;
    }

    for (const [chapterId, savedAnswers] of Object.entries(courseContext.challengeAnswers || {})) {
      const challenges = courseContext.chapterChallenges[chapterId] || [];
      const competencyMap = model.challengeCompetencyMap[chapterId] || [];
      for (const [indexText, answerValue] of Object.entries(savedAnswers || {})) {
        const index = Number(indexText);
        const answerIndex = Number(answerValue);
        const challenge = challenges[index];
        const answer = challenge?.answers?.[answerIndex];
        const competency = competencyMap[index] || courseContext.chapterFocus[chapterId] || "inference";
        if (answer) addEvidence(competency, Boolean(answer[1]));
      }
    }

    for (const [caseId, answerValue] of Object.entries(courseContext.practiceAnswers || {})) {
      const practiceCase = courseContext.practiceCaseMap?.[caseId];
      const answer = practiceCase?.answers?.[Number(answerValue)];
      if (answer) addEvidence(practiceCase.focus || "inference", Boolean(answer[1]));
    }

    for (const result of Object.values(courseContext.traceChallengeResults || {})) {
      if (result && typeof result.correct === "boolean") addEvidence("event", result.correct);
    }

    for (const [items, examState] of [
      [model.pretest, assessmentState.pretest],
      [model.posttest, assessmentState.posttest]
    ]) {
      scoreExam(items, examState).results.forEach((result) => {
        if (result.answered) addEvidence(result.competency, result.correct);
      });
    }

    if (assessmentState.capstone.submitted) {
      scoreCapstone(model, assessmentState.capstone).evidence.forEach((item) => {
        if (item.answered) addEvidence(item.competency, item.correct);
      });
    }

    const competencies = model.competencies.map((competency) => {
      const record = evidence[competency.id];
      const percent = record.attempted ? Math.round((record.correct / record.attempted) * 100) : 0;
      return {
        ...competency,
        ...record,
        percent,
        level: masteryLevel(percent, record.attempted)
      };
    });
    const totalAttempted = competencies.reduce((sum, competency) => sum + competency.attempted, 0);
    const totalCorrect = competencies.reduce((sum, competency) => sum + competency.correct, 0);
    const percent = totalAttempted ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

    return {
      competencies,
      attempted: totalAttempted,
      correct: totalCorrect,
      percent,
      level: masteryLevel(percent, totalAttempted)
    };
  }

  function domainCoverage(items) {
    return items.reduce((coverage, item) => {
      coverage[item.domain] = (coverage[item.domain] || 0) + 1;
      return coverage;
    }, {});
  }

  function validateBlueprint(model) {
    const requiredDomains = model.domains.map((domain) => domain.id);
    const exams = { pretest: model.pretest, posttest: model.posttest };
    const issues = [];

    for (const [examName, items] of Object.entries(exams)) {
      const coverage = domainCoverage(items);
      requiredDomains.forEach((domainId) => {
        if ((coverage[domainId] || 0) < 2) issues.push(`${examName}: cobertura insuficiente de ${domainId}`);
      });
      if (items.some((item) => item.correctIndex < 0 || item.correctIndex >= item.options.length)) {
        issues.push(`${examName}: existe un índice de respuesta inválido`);
      }
      if (new Set(items.map((item) => item.correctIndex)).size < 3) {
        issues.push(`${examName}: las respuestas correctas no están suficientemente distribuidas`);
      }
    }

    return {
      valid: issues.length === 0,
      issues,
      coverage: {
        pretest: domainCoverage(model.pretest),
        posttest: domainCoverage(model.posttest)
      }
    };
  }

  function buildAnonymousExport(model, assessmentState, courseContext, revision) {
    return {
      schema: "urodynamic-tutor-anonymous-results-v1",
      exportedAt: new Date().toISOString(),
      revision,
      contentVersion: model.scientificGovernance.productVersion,
      anonymous: true,
      pretest: scoreExam(model.pretest, assessmentState.pretest),
      posttest: scoreExam(model.posttest, assessmentState.posttest),
      capstone: scoreCapstone(model, assessmentState.capstone),
      mastery: calculateMastery(model, assessmentState, courseContext),
      reportCompleteness: Object.fromEntries(
        Object.entries(assessmentState.report.fields).map(([key, value]) => [key, String(value).trim().length >= 20])
      )
    };
  }

  window.UroDynamicAssessmentEngine = Object.freeze({
    createDefaultAssessmentState,
    normalizeAssessmentState,
    scoreExam,
    scoreCapstone,
    calculateMastery,
    validateBlueprint,
    buildAnonymousExport,
    chapterDomainMap
  });
})();
