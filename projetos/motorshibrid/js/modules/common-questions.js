export default function commonQuestions() {
  const btnQuestions = document.querySelectorAll('.perguntas dt');
  function setClass(event) {
    const item = event.target.parentNode.lastElementChild;
    item.classList.toggle('ativa')
    if (item.classList.contains('ativa')) {
      event.target.setAttribute("aria-expanded", "true")

    } else {
      event.target.setAttribute("aria-expanded", "false")

    }

  };

  btnQuestions.forEach(item => {
    item.addEventListener('click', setClass);
    // console.log(item.firstChild)
  });
}
