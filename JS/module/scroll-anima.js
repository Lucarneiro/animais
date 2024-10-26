export default function ScrollAnima() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.lenght) {
    const windowMetade = innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        } else section.classList.remove("ativo");
      });
    }
    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
