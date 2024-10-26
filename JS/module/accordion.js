export default function Accordion() {
  const accordionList = document.querySelectorAll(
    "[data-anime='acorddion'] dt"
  );
  const ativoClass = "ativo";
  // if (accordionList.lenght) {
  accordionList[0].classList.add(ativoClass);
  accordionList[0].nextElementSibling.classList.add(ativoClass);

  function activeAccordion(event) {
    this.classList.toggle(ativoClass);
    this.nextElementSibling.classList.toggle(ativoClass);
  }

  accordionList.forEach((item) => {
    item.addEventListener("click", activeAccordion);
  });
}
