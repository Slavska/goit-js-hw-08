import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');

feedbackForm.addEventListener('input', throttle(formInput, 500));
feedbackForm.addEventListener('submit', formSubmit);

function formInput() {
  const inputToSave = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputToSave));
}

function formSubmit(e) {
  e.preventDefault();
  if (email.value === '' || message.value === '') {
    return alert('Поля не заповнені!');
  }
  console.log({ email: email.value, message: message.value });
  feedbackForm.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

const update = el => {
  try {
    const updateInfo = localStorage.getItem(el);
    return updateInfo === null ? undefined : JSON.parse(updateInfo);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const replaceData = update(LOCALSTORAGE_KEY);
if (replaceData) {
  email.value = replaceData.email;
  message.value = replaceData.message;
}
