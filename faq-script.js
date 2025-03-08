    document.addEventListener("DOMContentLoaded", function () {
        const questions = document.querySelectorAll(".faq-question");
    
        questions.forEach((question) => {
            question.addEventListener("click", function () {
                const parent = this.parentElement;
                parent.classList.toggle("active");
                
                // Toggle icon
                const icon = this.querySelector(".icon");
                icon.textContent = parent.classList.contains("active") ? "-" : "+";
            });
        });
    });
    