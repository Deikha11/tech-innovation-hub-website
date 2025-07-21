
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    // Optionally remove 'show' if you want it to hide again when scrolled out of view
                    // entry.target.classList.remove('show');
                }
            });
        }, {
            threshold: 0.2, // Trigger when 20% of the element is visible
            rootMargin: '0px 0px -50px 0px' // Start animation a bit earlier (50px from bottom of viewport)
        });

        const sectionsToAnimate = document.querySelectorAll(
            '.hero-section, .about-us-section, .services-section, .projects-section, .blog-section, .contact-section, .careers-section, .faq-section'
        );

        sectionsToAnimate.forEach((section) => {
            section.classList.add('hidden'); // Add 'hidden' class initially
            observer.observe(section);
        });

        // Existing FAQ JavaScript (ensure it's still here)
        document.addEventListener('DOMContentLoaded', function() {
            const faqQuestions = document.querySelectorAll('.faq-question');

            faqQuestions.forEach(question => {
                question.addEventListener('click', function() {
                    const faqItem = this.closest('.faq-item');
                    const faqAnswer = faqItem.querySelector('.faq-answer');
                    const icon = this.querySelector('i');

                    faqQuestions.forEach(otherQuestion => {
                        if (otherQuestion !== this) {
                            const otherFaqItem = otherQuestion.closest('.faq-item');
                            const otherFaqAnswer = otherFaqItem.querySelector('.faq-answer');
                            const otherIcon = otherQuestion.querySelector('i');

                            otherFaqAnswer.style.maxHeight = null;
                            otherFaqAnswer.style.padding = '0 30px';
                            otherQuestion.classList.remove('active');
                            otherIcon.classList.remove('active');
                        }
                    });

                    if (faqAnswer.style.maxHeight) {
                        faqAnswer.style.maxHeight = null;
                        faqAnswer.style.padding = '0 30px';
                        this.classList.remove('active');
                        icon.classList.remove('active');
                    } else {
                        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                        faqAnswer.style.padding = '20px 30px';
                        this.classList.add('active');
                        icon.classList.add('active');
                    }
                });
            });
        });
    

       
        // ... (Your existing Intersection Observer and FAQ JavaScript go here) ...

        // Hamburger Menu JavaScript
        document.addEventListener('DOMContentLoaded', function() {
            const hamburgerMenu = document.getElementById('hamburger-menu');
            const navLinks = document.getElementById('nav-links');

            if (hamburgerMenu && navLinks) {
                hamburgerMenu.addEventListener('click', function() {
                    navLinks.classList.toggle('active'); // Toggle 'active' class on click
                });

                // Close menu when a link is clicked (for single-page navigation)
                navLinks.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', function() {
                        if (navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                        }
                    });
                });
            }

            // JavaScript for current year in footer (should be here too)
            const currentYearSpan = document.getElementById('current-year');
            if (currentYearSpan) {
                currentYearSpan.textContent = new Date().getFullYear();
            }
        });
  