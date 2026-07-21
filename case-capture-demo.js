const feedback = document.getElementById("caseFeedback");
const answers = document.querySelectorAll(".answer");

answers.forEach((answer) => {
  answer.addEventListener("click", () => {
    const isCorrect = answer.dataset.correct === "true";

    answers.forEach((item) => {
      item.classList.remove("selected", "incorrect");
    });

    answer.classList.add(isCorrect ? "selected" : "incorrect");
    feedback.className = `feedback ${isCorrect ? "good" : "warn"}`;
    feedback.textContent = isCorrect
      ? "Correcto: primero se compara Pves con Pabd antes de inferir actividad detrusoriana."
      : "Lectura insegura: esa respuesta salta desde una señal medida hacia una conclusión que el segmento no sostiene.";
  });
});
