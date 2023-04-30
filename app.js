const mail = document.querySelector('#mail');

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
}

checkMail();
