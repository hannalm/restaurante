

var myButtonModal = document.getElementById('myButtonModal')
var myTextModal = document.getElementById('myTextModal')

var inputNome = document.getElementById('inputNome')
var inputEmail = document.getElementById('inputEmail')
var inputQtd = document.getElementById('inputQtd')

function autenticar(event){

  event.preventDefault()

  if(inputUsuario.value !=null && inputSenha.value != null){
    myTextModal.className = 'text-success'
    myTextModal.innerText = 'Reserva enviada!!!'
  }
  else{ myTextModal.className = 'text-danger'
  myTextModal.innerText = 'Reserva não efetuada'}

  myButtonModal.click()

}

