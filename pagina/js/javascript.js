const cart_profile = document.getElementById('profile__cart-icon').addEventListener('click', ()=>{
    
    
    document.querySelector('.cart__content').classList.toggle('cart__content-active');

    
})


const imageness = document.querySelectorAll('.miniaturas img');
const imageness2 = document.querySelectorAll('.miniaturas__activa img');

const imagennActiva = document.querySelectorAll('.imagen__activa');

const imagen = document.querySelector('.modal__imagen-activa');


const btnRetroceder = document.getElementById('btn__anterior')
const btnAdelantar = document.getElementById('btn_adelantar');
const imagenesModal = document.querySelectorAll('.miniaturas__activa img');
let posicionActual = 0;
// let posicionActual2 = 0;

const activa = document.querySelector('.imagen__activa2');

let indice = 0;
let indice2 = 0;

//muestro la imagen a la que le doy click activa en los dos imagen__activa
const mostrarImagen = (e)=>{
    imagennActiva.forEach((activa) => {
       activa.src = e.target.src;
        indice = Array.from(imageness2).indexOf(e.target);
        indice2 = Array.from(imageness).indexOf(e.target);
        // e.target.classList.add('miniaturas__activo')
        activa.style.opacity = "1"; 
        imagen.style.backgroundImage = `url("")`;
        posicionActual = indice2;
        console.log(indice);
        activas1();
        activas2();
    });
}




//por cada miniatura
imageness.forEach((imagen) => {
    imagen.addEventListener('click', mostrarImagen)
    
});

//abro el modal
const showModal = document.getElementById('abre__modal').addEventListener('click', ()=>{
    document.getElementById('modal').classList.add('modal__activo')

    
    
})

//cierro modal
const closemodalClick = document.querySelector('.background__modal').addEventListener('click', ()=>{
    document.getElementById('modal').classList.remove('modal__activo')
})

const closeModal = document.getElementById('btn__cerrar').addEventListener('click',()=>{
    document.getElementById('modal').classList.remove('modal__activo')
  
})



    //variables
    const imagenes = [
        'images/image-product-1.jpg',
        'images/image-product-2.jpg',
        'images/image-product-3.jpg',
        'images/image-product-4.jpg',
        'images/image-product-1.jpg',
        'images/image-product-2.jpg',
        'images/image-product-3.jpg',
        'images/image-product-4.jpg'
    ];
 

    
 
 
 function pasarFoto(){
     if(posicionActual >= imagenes.length - 1){
         posicionActual = 0;
     }else {
         posicionActual++;
         
     }
     renderizarImagen();
     activa.style.opacity = "0";
     activas3();
 }
 
 function retrocederFoto() {
     if(posicionActual <= 0) {
         posicionActual = imagenes.length - 1;
     } else {
         posicionActual--;
     }
     renderizarImagen();
     activa.style.opacity = "0"; 
     activas3();
 }
 
 
 
 function renderizarImagen () {
     
     imagen.style.backgroundImage = `url(${imagenes[posicionActual]})`;
     
     
 }
 
 
 btnAdelantar.addEventListener('click', pasarFoto);
 btnRetroceder.addEventListener('click', retrocederFoto);
 
 renderizarImagen();
 

 const imagen1 = document.querySelector('.img1');
 const imagen2 = document.querySelector('.img2');
 const imagen3 = document.querySelector('.img3');
 const imagen4 = document.querySelector('.img4');
 const imagen5 = document.querySelector('.img5');
 const imagen6 = document.querySelector('.img6');
 const imagen7 = document.querySelector('.img7');
 const imagen8 = document.querySelector('.img8');

 //activas galeria 1
 function activas1 (){
            
            switch(indice2) {
                case 0:
                     imagen1.classList.add('miniaturas__activo');
                     imagen2.classList.remove('miniaturas__activo');
                     imagen3.classList.remove('miniaturas__activo');
                     imagen4.classList.remove('miniaturas__activo');
                     
                break;
                case 1:
                    imagen2.classList.add('miniaturas__activo');
                    imagen1.classList.remove('miniaturas__activo');
                    imagen3.classList.remove('miniaturas__activo');
                    imagen4.classList.remove('miniaturas__activo');
                   
                break;
                case 2:
                     imagen3.classList.add('miniaturas__activo');
                     imagen1.classList.remove('miniaturas__activo');
                     imagen2.classList.remove('miniaturas__activo');
                     imagen4.classList.remove('miniaturas__activo');
                     
                break;
                case 3:
                    imagen4.classList.add('miniaturas__activo');
                     imagen2.classList.remove('miniaturas__activo');
                     imagen3.classList.remove('miniaturas__activo');
                     imagen1.classList.remove('miniaturas__activo');
                    
                break;
                
                
            }

            
 }
//activas galeria 2
 function activas2(){

    switch(indice) {
        case 0:
             imagen1.classList.add('miniaturas__activo');
             imagen2.classList.remove('miniaturas__activo');
             imagen3.classList.remove('miniaturas__activo');
             imagen4.classList.remove('miniaturas__activo');
             imagen5.classList.add('miniaturas__activo');
             imagen6.classList.remove('miniaturas__activo');
             imagen7.classList.remove('miniaturas__activo');
             imagen8.classList.remove('miniaturas__activo');
        break;
        case 1:
            imagen2.classList.add('miniaturas__activo');
            imagen1.classList.remove('miniaturas__activo');
            imagen3.classList.remove('miniaturas__activo');
            imagen4.classList.remove('miniaturas__activo');
            imagen5.classList.remove('miniaturas__activo');
             imagen6.classList.add('miniaturas__activo');
             imagen7.classList.remove('miniaturas__activo');
             imagen8.classList.remove('miniaturas__activo');
        break;
        case 2:
             imagen3.classList.add('miniaturas__activo');
             imagen1.classList.remove('miniaturas__activo');
             imagen2.classList.remove('miniaturas__activo');
             imagen4.classList.remove('miniaturas__activo');
             imagen5.classList.remove('miniaturas__activo');
             imagen6.classList.remove('miniaturas__activo');
             imagen7.classList.add('miniaturas__activo');
             imagen8.classList.remove('miniaturas__activo');
        break;
        case 3:
            imagen4.classList.add('miniaturas__activo');
             imagen2.classList.remove('miniaturas__activo');
             imagen3.classList.remove('miniaturas__activo');
             imagen1.classList.remove('miniaturas__activo');
             imagen5.classList.remove('miniaturas__activo');
             imagen6.classList.remove('miniaturas__activo');
             imagen7.classList.remove('miniaturas__activo');
             imagen8.classList.add('miniaturas__activo');
        break;
    }
 }

 //activas flechas
 function activas3(){
    switch(posicionActual) {
        case 0:
             imagen5.classList.add('miniaturas__activo');
             imagen6.classList.remove('miniaturas__activo');
             imagen7.classList.remove('miniaturas__activo');
             imagen8.classList.remove('miniaturas__activo');
             
            
        break;
        case 1:
            imagen6.classList.add('miniaturas__activo');
            imagen5.classList.remove('miniaturas__activo');
            imagen7.classList.remove('miniaturas__activo');
            imagen8.classList.remove('miniaturas__activo');
            
        break;
        case 2:
             imagen7.classList.add('miniaturas__activo');
             imagen6.classList.remove('miniaturas__activo');
             imagen5.classList.remove('miniaturas__activo');
             imagen8.classList.remove('miniaturas__activo');
            
        break;
        case 3:
            imagen8.classList.add('miniaturas__activo');
             imagen5.classList.remove('miniaturas__activo');
             imagen6.classList.remove('miniaturas__activo');
             imagen7.classList.remove('miniaturas__activo');
            
        break;
        case 4:
             imagen5.classList.add('miniaturas__activo');
             imagen6.classList.remove('miniaturas__activo');
             imagen7.classList.remove('miniaturas__activo');
             imagen8.classList.remove('miniaturas__activo');
             
            
        break;
        case 5:
            imagen6.classList.add('miniaturas__activo');
            imagen5.classList.remove('miniaturas__activo');
            imagen7.classList.remove('miniaturas__activo');
            imagen8.classList.remove('miniaturas__activo');
            
        break;
        case 6:
             imagen7.classList.add('miniaturas__activo');
             imagen6.classList.remove('miniaturas__activo');
             imagen5.classList.remove('miniaturas__activo');
             imagen8.classList.remove('miniaturas__activo');
            
        break;
        case 7:
            imagen8.classList.add('miniaturas__activo');
             imagen5.classList.remove('miniaturas__activo');
             imagen6.classList.remove('miniaturas__activo');
             imagen7.classList.remove('miniaturas__activo');
            
        break;
    }
 }

 // aumento en los botones mas + y menos -
 const botonMas = document.querySelector('.btn__mas');
 const botonMenos = document.querySelector('.btn__menos');
 const numero2 = document.getElementById('numero2');

 let contador = 0;
 let cuenta = 0;

 
 function sumar (){
     if(contador == 0){
         numero2.innerHTML = parseInt(contador + 1);
         
         contador++;
     }else{
         contador++;
         numero2.innerHTML = parseInt(contador);
     }
     
 }
 botonMas.addEventListener('click', sumar);

 function restar (){
   if(contador <= 0){
     numero2.innerHTML = contador;
   }else{
    contador--;
    numero2.innerHTML = parseInt(contador);
    
   }
    
 }
 botonMenos.addEventListener('click', restar);

 //funcion añadir al carro
 const anadir = document.querySelector('.btn__añadir');
 const numero1 = document.getElementById('numero1');
 const total = document.querySelector('.total');
 const carroLleno =  document.querySelector('.card__content-full');
 const carroVacio = document.querySelector('.empty');
 const totalCarro = document.getElementById('total_carro');
 function addtoCart(){

    if(contador > 0){
       carroLleno.style.display = 'flex';
        carroVacio.style.display = 'none';
        cuenta += contador
        numero1.innerHTML = parseInt(cuenta);
        numero2.innerHTML = 0;
        total.innerHTML = `$${cuenta*125}.00`;
        totalCarro.style.display= 'block';
        totalCarro.innerHTML = cuenta;
        contador = 0;
    }else{
        swal.fire({
            icon: "error",
            text: "You can't Buy 0 Products",
            width: '50%',
            timer: '5000',
            timerProgressBar: 'true',
            position: 'center',
            confirmButtonColor: "#FF7C19",
            
        })
    }
   
 }
 anadir.addEventListener('click',addtoCart);

 //funcion eliminar del carro
const borrarCarro = document.querySelector('.delete__cart');

 function eliminarCarro(){
    carroLleno.style.display = 'none';
    carroVacio.style.display = 'block';
    totalCarro.style.display= 'none';
    cuenta = 0;
 }

borrarCarro.addEventListener('click', eliminarCarro);


//abrir sub menu
const icono_menu = document.querySelector('.icon__menu');
const aside__menu = document.querySelector('.aside');
const background__show = document.querySelector('.background');

icono_menu.addEventListener('click',()=>{
    aside__menu.classList.add('aside__show');
    background__show.classList.add('background__show');
})

//cerrar menu 

background__show.addEventListener('click',()=>{
    aside__menu.classList.remove('aside__show');
    background__show.classList.remove('background__show');
})

const icono__cerrar = document.querySelector('.icon__close').addEventListener('click', ()=>{
    aside__menu.classList.remove('aside__show');
    background__show.classList.remove('background__show');
})