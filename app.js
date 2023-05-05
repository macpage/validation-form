const mail = document.querySelector('#mail');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');
const pw = document.querySelector('#pw');
const cpw = document.querySelector('#pw');

function checkMail() {
  console.log('bro');
  const validText = document.createElement('p');
  validText.style.margin = '0';
  mail.addEventListener('keyup', () => {
    for (let i = 0; i < mail.value.length; i++) {
      if (mail.value[i] == '@') {
        validText.style.color = 'green';
        validText.innerHTML = 'valid email';
        break;
      } else {
        validText.style.color = 'red';
        validText.innerHTML = 'invalid email';
      }
    }
    mail.parentNode.insertBefore(validText, mail.nextElementSibling);
  });
  mail.required = true;
}

function checkCountry() {
  country.addEventListener('keyup', (e) => {
    if (/^[a-zA-Z]+$/.test(country.value)) {
      console.log('lesgo');
      country.setCustomValidity('');
    } else {
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
}

function checkPw() {
  pw.setAttribute('minlength', 8);
  pw.setAttribute('maxlength', 32);
  pw.required = true;
  strongRegex = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})'
  );
  pw.addEventListener('keyup', () => {
    if (strongRegex.test(pw.value)) {
      console.log('safe');
      pw.setCustomValidity('');
    } else {
      console.log('not safe');
      pw.setCustomValidity('Bro willst du gehackt werden?');
      pw.reportValidity();
    }
  });
}

checkMail();
checkCountry();
checkZip();
checkPw();
