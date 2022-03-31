

var myButtonModal = document.getElementById('myButtonModal')
var myTextModal = document.getElementById('myTextModal')

var inputNome = document.getElementById('inputNome')
var inputEmail = document.getElementById('inputEmail')
var inputQtd = document.getElementById('inputQtd')

function autenticar(event){
  
  event.preventDefault()

  
  if(inputNome.value != null && inputEmail.value !=null && inputQtd.value !=null){
    myTextModal.className = 'text-success'
    myTextModal.innerText = 'Reserva enviada!!!'
  } 
  myButtonModal.click()
}

