function faq() {
  const allFaqs = document.querySelectorAll("[data-faq]");
  console.log(allFaqs);

  for (let i = 0; i < allFaqs.length; i++) {
    const fq = allFaqs[i];
    const p = fq.querySelector("p");
    p.style.display = "none";
    const fqIMG = fq.querySelector(".faq-section img");

    fq.querySelector(".faq-section").onclick = function () {
      const displayStyle = p.style.display;
      const isNone = displayStyle === "none";

      fqIMG.style.transform = isNone ? "rotate(90deg)" : "rotate(0deg)";
      fqIMG.style.transition = "all .3s ease-in-out";
      p.style.display = isNone ? "block" : "none";
    };
  }
}

window.addEventListener("DOMContentLoaded", faq);
