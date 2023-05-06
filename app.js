const mail = document.querySelector('#mail');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const pw = document.querySelector('#pw');
const cpw = document.querySelector('#cpw');
const submit = document.querySelector('#submit');

function checkMail() {
  console.log('bro');
  mail.addEventListener('keyup', () => {
    for (let i = 0; i < mail.value.length; i++) {
      if (mail.value[i] == '@') {
        mail.style.borderColor = 'green';
        mail.setCustomValidity('');
        break;
      } else {
        mail.style.borderColor = 'red';
        mail.setCustomValidity('Invalid Email');
      }
    }
  });
  mail.required = true;
}

function checkCountry() {
  country.addEventListener('keyup', (e) => {
    if (/^[a-zA-Z]+$/.test(country.value)) {
      console.log('lesgo');
      country.setCustomValidity('');
    } else {
      country.style.borderColor = 'red';
      country.setCustomValidity('Ayoo thats not a country!');
      country.reportValidity();
    }
  });
  country.required = true;
}

function checkZip() {
  zip.setAttribute('min', 1000);
  zip.setAttribute('max', 999999);
  zip.required = true;
  zip.addEventListener('keyup', () => {
    if (zip.value < 1000 || zip.value > 999999) {
      zip.style.borderColor = 'red';
    } else {
      zip.style.borderColor = 'green';
    }
  });
}

function checkPw() {
  pw.setAttribute('minlength', 8);
  pw.setAttribute('maxlength', 32);
  pw.required = true;
  strongRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  );
  submit.addEventListener('click', (e) => {
    if (strongRegex.test(pw.value)) {
      console.log('safe');
      pw.setCustomValidity('');
    } else {
      console.log('not safe');
      pw.style.borderColor = 'red';
      pw.setCustomValidity(
        'Need big and small letters, atleast one number and special symbol'
      );
      pw.reportValidity();
    }
  });
}

function checkCpw() {
  cpw.required = true;
  submit.addEventListener('click', () => {
    if (cpw.value == pw.value) {
      cpw.setCustomValidity('');
    } else {
      cpw.style.borderColor = 'red';
      cpw.setCustomValidity('Nicht identisch??');
      cpw.reportValidity();
    }
  });
}

checkMail();
checkCountry();
checkZip();
checkPw();
checkCpw();
