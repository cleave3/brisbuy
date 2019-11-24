const submit = document.querySelector('.order-button');
const modal = document.querySelector('.modal-body');
const errors = document.querySelector('.alert');
const fname = document.querySelector('#fname');
const phone1 = document.querySelector('#phone');
const phone2 = document.querySelector('#phone2');
const qty = document.querySelector('#quantity');
const address = document.querySelector('#address');
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
    state: state.value,
    amount: quantity.selectedOptions[0].innerHTML
  };
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
        toastr.error(err);
      })
    : null;
}

function makeOrder(data) {
  if (checkFields(data)) {
    return false;
  } else {
    fetch('https://brisbuy.herokuapp.com/order', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        fullName: fname.value,
        address: address.value,
        phone: phone1.value,
        phone2: phone2.value,
        quantity: qty.value,
        address: address.value,
        state: state.value,
        amount: quantity.selectedOptions[0].innerHTML
      })
    })
      .then((res) => {
        console.log(res);
        toastr.success(res.message);
      })
      .catch((err) => toastr.error(err.message));
  }
}

submit.addEventListener('click', (e) => {
  e.preventDefault();
  makeOrder(getData());
});
