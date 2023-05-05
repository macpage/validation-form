const mail = document.querySelector('#mail');
const country = document.querySelector('#country');
const zip = document.querySelector('#zip');

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
  zip.setAttribute('min', 4);
  zip.setAttribute('max', 6);
  zip.required = true;
}

checkMail();
checkCountry();
checkZip();
