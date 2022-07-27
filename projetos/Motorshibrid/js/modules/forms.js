export default function forms() {

}

const elementDiv = document.querySelectorAll('.form-input')

function setClass(event) {
  if (event.target) {
    console.log(event)
    ativar()

  } else {
    console.log('NADA')
  }


}



elementDiv.forEach(item => {
  item.addEventListener('click', setClass)

})