export default function forms() {

}

const paramentro = new URLSearchParams(location.search)

function ativarProduto(paramentro) {
  const elemento = document.querySelector('#' + paramentro);

  if (elemento.checked = true) {
    console.log(elemento)
  }

}

paramentro.forEach(ativarProduto)

