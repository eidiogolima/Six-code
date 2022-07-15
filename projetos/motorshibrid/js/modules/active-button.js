export default function activeButton() {
  const button = document.querySelector('.barra-veiculo');

  {
    function activeBtn() {
      const fichaTecnica = document.querySelector('.ficha-veiculo-bg');
      fichaTecnica.classList.toggle('ativo')
    }
    button.addEventListener('click', activeBtn)


    function activeBtn2() {
      button.classList.toggle('ativa')
    }
    button.addEventListener('click', activeBtn2)

  }
}