export default function theme() {

  const check = document.querySelector('.liga-desliga_checkbox');

  const themes = {
    't-dark': 't-light',
    't-light': 't-dark'
  }


  if (check) {
    check.addEventListener('click', none)

    function none() {
      const currentTheme = document.body.dataset.theme;
      document.body.setAttribute('data-theme', themes[currentTheme] || 't-light')
    }
  }


}