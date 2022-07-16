export default function activeMenu() {
  const btnMobile = document.querySelector('#btn-mobile');

  function btnToggle() {
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');

  }

  btnMobile.addEventListener('click', btnToggle)
}