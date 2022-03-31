

var myButtonModal = document.getElementById('myButtonModal')
var myTextModal = document.getElementById('myTextModal')

var inputNome = document.getElementById('inputNome')
var inputEmail = document.getElementById('inputEmail')
var inputQtd = document.getElementById('inputQtd')

function autenticar(event){

  event.preventDefault()

  if(inputUsuario.value == 'root' && inputSenha.value == '1234'){
    myTextModal.className = 'text-success'
    myTextModal.innerText = 'Reserva enviada!!!'
  }

  myButtonModal.click()
  
}

