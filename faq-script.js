document.addEventListener("DOMContentLoaded", function () {
    const faqs = {
        "What is Thingsception?": "Thingsception is a design business that reimagines everyday products with nature-inspired aesthetics, advocating for sustainability.",
        "How are your products eco-friendly?": "We use sustainable materials and donate a portion of our profits to environmental charities.",
        "How can I support your mission?": "By purchasing our products and spreading awareness about sustainable design!",
        "I am an NGO, how can we partner up?": "Go to our Contact Us page to get in touch with us!"
    };

    // Find the FAQ container
    const faqContainer = document.querySelector(".faq-container");

    let faqHTML = "";

    for (const question in faqs) {
        if (faqs.hasOwnProperty(question)) {
            faqHTML += `
            <div class="faq-item">
                <button class="faq-question">${question} <span class="icon">+</span></button>
                <div class="faq-answer" style="display: none;">${faqs[question]}</div>
            </div>`;
        }
    }

    // Insert the FAQ items into the container
    faqContainer.innerHTML += faqHTML;

    // Add event listeners to newly added elements
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach((question) => {
        question.addEventListener("click", function () {
            const parent = this.parentElement;
            const answer = parent.querySelector(".faq-answer");

            parent.classList.toggle("active");
            
            // Toggle visibility of the answer
            answer.style.display = (answer.style.display === "none") ? "block" : "none";

            // Toggle icon
            const icon = this.querySelector(".icon");
            icon.textContent = parent.classList.contains("active") ? "-" : "+";
        });
    });
});
