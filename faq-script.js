document.addEventListener("DOMContentLoaded", function () {
    const faqs = [
        {
            question: "What is Thingsception?",
            answer: "Thingsception is a design business that reimagines everyday products with nature-inspired aesthetics, advocating for sustainability."
        },
        {
            question: "How are your products eco-friendly?",
            answer: "We use sustainable materials and donate a portion of our profits to environmental charities."
        },
        {
            question: "How can I support your mission?",
            answer: "By purchasing our products and spreading awareness about sustainable design!"
        },
        {
            question: "I am an NGO, how can we partner up?",
            answer: "Go to our Contact Us page to get in touch with us!"
        }
    ];

    // Find the FAQ container
    const faqContainer = document.querySelector(".faq-container");

    let faqHTML = "";

    faqs.forEach(faq => {
        faqHTML += `
        <div class="faq-item">
            <button class="faq-question">${faq.question} <span class="icon">+</span></button>
            <div class="faq-answer" style="display: none;">${faq.answer}</div>
        </div>`;
    });

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
            if (answer.style.display === "none") {
                answer.style.display = "block";
            } else {
                answer.style.display = "none";
            }

            // Toggle icon
            const icon = this.querySelector(".icon");
            icon.textContent = parent.classList.contains("active") ? "-" : "+";
        });
    });
});
