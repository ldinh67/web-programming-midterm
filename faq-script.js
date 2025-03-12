document.addEventListener("DOMContentLoaded", function () {
    fetch("faqs.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load FAQ data");
            }
            return response.json();
        })
        .then(faqs => {
            const faqContainer = document.querySelector(".faq-container");

            let faqHTML = "";

            faqs.forEach(faq => {
                faqHTML += `
                <div class="faq-item">
                    <button class="faq-question">${faq.question} <span class="icon">+</span></button>
                    <div class="faq-answer" style="display: none;">${faq.answer}</div>
                </div>`;
            });

            faqContainer.innerHTML += faqHTML;

            const questions = document.querySelectorAll(".faq-question");
            questions.forEach((question) => {
                question.addEventListener("click", function () {
                    const parent = this.parentElement;
                    const answer = parent.querySelector(".faq-answer");

                    parent.classList.toggle("active");

                    answer.style.display = answer.style.display === "none" ? "block" : "none";

                    const icon = this.querySelector(".icon");
                    icon.textContent = parent.classList.contains("active") ? "-" : "+";
                });
            });
        })
        .catch(error => console.error("Error loading FAQ data:", error));
});
