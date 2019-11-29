const submit = document.querySelector('.order-button');
const modal = document.querySelector('.modal-body');
const spinner = document.querySelector('.loader');
const fname = document.querySelector('#fname');
const phone1 = document.querySelector('#phone');
const phone2 = document.querySelector('#phone2');
const qty = document.querySelector('#quantity');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const state = document.querySelector('#state');

let errMsg = [];

function getData() {
  return {
    fullName: fname.value,
    address: address.value,
    phone: phone1.value,
    phone2: phone2.value,
    quantity: qty.value,
    address: address.value,
    city: city.value,
    state: state.value,
    amount: quantity.selectedOptions[0].innerHTML
  };
}

function handleSuccess() {
  spinner.style.display = 'none';
  setTimeout(() => {
    location.reload();
  }, 3000);
}

function clearFields() {
  fname.value = '';
  phone1.value = '';
  phone2.value = '';
  address.value = '';
  city.value = '';
  state.value = '';
}

function checkFields(data) {
  errMsg = [];
  for (field in data) {
    if (data[field] == '' && field != 'phone2') {
      errMsg.push(`${field}, cannot be empty`);
    }
  }

  if (data.phone.length != '' && data.phone.length !== 11) {
    errMsg.push(`Phone no. must be 11 dis
    gits`);
  }
  errMsg && errMsg.length > 0
    ? errMsg.forEach((err) => {
        return toastr.error(err);
      })
    : makeOrder();
}

function makeOrder() {
  spinner.style.display = 'block';
  fetch('https://brisbuy.herokuapp.com/order', {
    method: 'POST',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      fullName: fname.value,
      phone: phone1.value,
      phone2: phone2.value,
      address: address.value,
      city: city.value,
      state: state.value,
      amount: quantity.selectedOptions[0].innerHTML
    })
  })
    .then((res) => {
      handleSuccess();
      toastr.success('Order successfull. We will contact you shortly to confirm your order');
      clearFields();
  })
    .catch((err) => {
      handleSuccess();
      toastr.error('Order was not successfull');
    });
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  checkFields(getData());
});
