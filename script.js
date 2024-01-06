const faq = document.getElementsByClassName("faq");
const accordion = document.getElementsByClassName("accordion");
for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function() {
    this.classList.toggle("active");

    //var accordion = this.nextElementSibling;
    
    if (accordion[i].style.display === "block") {
        accordion[i].style.display = "none";
    } else {
        accordion[i].style.display = "block";
    }
  });
}