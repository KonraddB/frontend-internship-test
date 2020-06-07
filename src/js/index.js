/* Here goes your JS code */

const modal = document.querySelector(".popup");
const openModal = document.getElementById("show-popup-form");
const closeModal = document.querySelector(".close-popup");
const btnForm = document.querySelector(".btn-form");
const successMess = document.getElementById("show-success-mess");

openModal.onclick = () => {
  modalBox();
};

closeModal.onclick = () => {
  modalBox();
};

modal.onclick = (event) => {
  if (event.target == modal) {
    modalBox();
  }
};

const modalBox = () => {
  modal.classList.toggle("open");
};

btnForm.onclick = () => {
   if(validate() === false ){
    validate();
   } else {
    setInterval(function sumbitForm() {
        modal.classList.remove("open");
      }, 3000);
    
      openModal.classList.add("hide");
      successMess.classList.remove("hide");
   }

};

const validate = () => {
    const passInput = document.querySelector('.password').value,
        mailInput = document.querySelector('.email').value,
        errorInput = document.querySelector('.error-message');

    let text;

    if(mailInput.length < 8 || mailInput.indexOf('@') == -1) {
        text= "Please enter valid e-mail";
        errorInput.innerHTML = text;
        return false;
    }

    if(passInput.length < 8) {
        text= "Please enter valid password";
        errorInput.innerHTML = text;
        return false;
    }
    return true;
}