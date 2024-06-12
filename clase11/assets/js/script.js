
// para alerta
const alerta = document.getElementById('alertaLive')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert" data-contenido="Modificando datos">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')
  alerta.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {

    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;

    if(input1 === '' && input2 === ''){
      appendAlert('¡Muy bien! Descubriste la alerta', 'success')
    
    } else {
      appendAlert(input2)
    }
  })
}
//funcion para manipular los eventos 
//se obtiene elemento por id y se le agrega un event listener q indica q al hacer click, el mensaje dentro del botón cambie

document.getElementById('liveAlertBtn').addEventListener('click', function() {

  let input1 = document.getElementById('input1').value;
  let mensaje = this.getAttribute('data-button');

  if(input1 == ''){
    this.innerText = mensaje;

  } else {
    this.innerText = input1; 
  }
});


//popover variables

const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


document.getElementById('popoverLis').addEventListener('click', function() {

  let mensaje = this.getAttribute('data-boton');

  let nuevoContenido = this.getAttribute('data-boton');

  let input1 = document.getElementById('input1').value;
  let input2 = document.getElementById('input2').value;
  

  if(input1 === '' && input2 === ''){
    this.setAttribute('data-bs-content', nuevoContenido);
    document.querySelector('.popover-body').innerHTML = nuevoContenido;
  
  } else {
    this.setAttribute('data-bs-content', nuevoContenido); 
    document.querySelector('.popover-body').innerHTML = input2
  }

  if(input1 == ''){
    this.innerText = mensaje;
    
  } else {
    this.innerText = input1; 
  }
  

});


//toast variables

//boton
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {

    let nuevoTitulo = toastLiveExample.getAttribute('data-titulo');
    let nuevoBody = toastLiveExample.getAttribute('data-dentro');
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;


    if(input1 === '' && input2 === ''){
      document.getElementById('toastTitulo').innerHTML = nuevoTitulo
      document.querySelector('.toast-body').innerHTML = nuevoBody
    
    } else {
      document.getElementById('toastTitulo').innerHTML = input1
      document.querySelector('.toast-body').innerHTML = input2
    }
    toastBootstrap.show()

  })
}

toastTrigger.addEventListener('click', function() {
  let mensaje = this.getAttribute('data-toast');
  let input1 = document.getElementById('input1').value;

  if(input1 == ''){

    this.innerText = mensaje;

  } else {
   this.innerText = input1; 
  }
});



//variables para offcanvas  

offcanvasExample.addEventListener('show.bs.offcanvas', function(event){

  let boton = event.relatedTarget

  let mensaje = boton.getAttribute('data-titulo')

  let contenido = boton.getAttribute('data-contenido')

  let input1 = document.getElementById('input1').value;
  let input2 = document.getElementById('input2').value;


  if(input1 === '' && input2 === ''){
    document.getElementById('offcanvasExampleLabel').innerText = mensaje 
    document.querySelector('.offcanvas-body').innerHTML = contenido

  } else {
    document.getElementById('offcanvasExampleLabel').innerHTML = input1
    document.querySelector('.offcanvas-body').innerHTML = input2
  }

})

document.getElementById('offcanvasBoton').addEventListener('click', function() {
  let mensaje = this.getAttribute('data-titulo');
  let input1 = document.getElementById('input1').value;

  if(input1 == ''){
    this.innerText = mensaje;

  } else {
   this.innerText = input1; 
  }
});


