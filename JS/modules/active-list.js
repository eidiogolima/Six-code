

export default function initActiveList() {


  const itemSLista = document.querySelectorAll('.lista-tecnologias .item-1');

  const itemAtivo = document.querySelectorAll('.lista-tecnologias ul li.item');

  const itens = document.querySelectorAll('.tecnologias-exemplos > div');

  const introducao = document.querySelectorAll('#introducao-tecnologias');


  


  function setClassItem(event){


    itens.forEach(item=> {
      if(item.id == event.target.innerHTML){
        introducao.forEach(item => {
          item.classList.remove('visible')
          item.classList.add('hidden')
        })
        item.classList.add('visible')
      }

      else if (item.classList.contains('visible')){
        item.classList.remove('visible')
      }

    })

  }


  itemAtivo.forEach(item => {
    item.addEventListener('click', setClassItem)
  })


  function setClassAtivo(event) {


    /* Pega o proximo elemento ul e aticiona a classe ativo somente no proximo do clicado pois a função antes pega o evento e não o elemento direto */
    
    event.target.nextElementSibling.classList.toggle('ativo');
  }


  itemSLista.forEach(item =>{
    item.addEventListener('click', setClassAtivo)
  })


}