/* Here goes your JS code */

let modal = document.querySelector('.popup');
let openModal = document.getElementById('show-popup-form');
let closeModal = document.querySelector('.close-popup');
let btnForm = document.querySelector('.btn-form');

// openModal.onclick = () => {
//     modalBox();
// }

// closeModal.onclick = () => {
//     modalBox();
// }

// modal.onclick = (event) => {
//     if(event.target == modal) {
//         modalBox()
//     }
// }

// const modalBox = () => {
//     modal.classList.toggle('open');

openModal.onclick=function(){
    modalBox();
}
closeModal.onclick=function(){
    modalBox();
}
// when user clicks anywhere outside of the modal , close it
modal.onclick=function(event){
   if(event.target==modal){
     modalBox();        
   }
}

function modalBox(){
    modal.classList.toggle("open");
}
 