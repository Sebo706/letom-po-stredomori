(() => {
  "use strict";

  const shareButtons = document.querySelectorAll("[data-quiz-share]");
  const feedback = document.getElementById("quiz-directory-share-feedback");
  const fallback = document.getElementById("quiz-directory-share-fallback");
  const fallbackInput = document.getElementById("quiz-directory-share-url");

  function showFeedback(message) {
    feedback.textContent = message;
    feedback.hidden = false;
  }

  function showFallback(url) {
    fallbackInput.value = url;
    fallback.hidden = false;
    fallbackInput.focus();
    fallbackInput.select();
  }

  async function shareQuiz(button) {
    const title = button.dataset.quizTitle;
    const url = new URL(button.dataset.quizUrl, window.location.href).href;
    const shareText = `Skúste kvíz „${title}“ od Letom po Stredomorí.`;

    fallback.hidden = true;
    feedback.hidden = true;

    if (navigator.share) {
      try {
        await navigator.share({ title, text: shareText, url });
        showFeedback("Odkaz na kvíz je pripravený na zdieľanie.");
        return;
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }
      }
    }

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(`${shareText} ${url}`);
        showFeedback("Odkaz na kvíz bol skopírovaný do schránky.");
        return;
      } catch (error) {
        // Continue with the manual fallback when the clipboard is unavailable.
      }
    }

    showFeedback("Zdieľanie nie je v tomto prehliadači dostupné. Odkaz môžete skopírovať ručne.");
    showFallback(url);
  }

  shareButtons.forEach((button) => {
    button.addEventListener("click", () => {
      shareQuiz(button);
    });
  });
})();
