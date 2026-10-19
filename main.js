  
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
      });

      
      function showPage(pageName) {
        
        const pages = document.querySelectorAll(".page-content");
        pages.forEach((page) => page.classList.remove("active"));

        
        const pageMap = {
          home: "homePage",
          renewable: "renewablePage",
          contact: "contactPage",
        };

        const pageId = pageMap[pageName];
        if (pageId) {
          document.getElementById(pageId).classList.add("active");
        }

        
        const navLinks = document.querySelectorAll(".nav-link");
        navLinks.forEach((link) => link.classList.remove("active"));
        event.target.classList.add("active");

        document.getElementById("navLinks").classList.remove("active");

        window.scrollTo({ top: 0, behavior: "smooth" });

        AOS.refresh();
      }

      function toggleMenu() {
        document.getElementById("navLinks").classList.toggle("active");
      }

      function handleSubmit(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        alert(
          `شكراً لك ${name}!\n\nتم إرسال رسالتك بنجاح. سنتواصل معك قريباً على البريد الإلكتروني:\n${email}`
        );

        document.getElementById("contactForm").reset();
      }

      document.addEventListener("DOMContentLoaded", function () {
        window.addEventListener("scroll", function () {
          const scrolled = window.pageYOffset;
          const hero = document.querySelector(".hero");
          if (hero) {
            hero.style.backgroundPositionY = scrolled * 0.5 + "px";
          }
        });
      });