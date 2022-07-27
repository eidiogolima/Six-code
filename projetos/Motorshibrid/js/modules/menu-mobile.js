export default function menuMobile() {
  const btnMobile = document.querySelector('#btn-mobile');



  function toogleMenu(event) {
    if (event.type === 'touchstart') {
      event.preventDefault()
    }
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu')

    }
  }


  btnMobile.addEventListener('touchstart', toogleMenu);
  btnMobile.addEventListener('click', toogleMenu);
}