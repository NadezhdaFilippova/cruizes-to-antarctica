const tel = document.querySelector('[data-tel-input]');
const regex = /[A-Za-zА-Яа-яЁе]/g;

const onTelInput = ()=> {
  if (tel.value.match(regex)) {
    tel.value = tel.value.replace(regex, '');
  }
};

tel.addEventListener('input', onTelInput);
export {onTelInput};
