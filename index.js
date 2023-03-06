const hamburger = document.querySelector('.burger');
const modal = document.querySelector('.modal');
const wrapper = document.querySelector('.wrapper1');
const modalX = document.querySelector('.close');
const links = document.querySelectorAll('.modal-link');

function modalHide() {
  modal.style.display = 'none';
  wrapper.style.filter = 'none';
}

function windowClickHandler(event) {
  if ((event.target === modal) || (event.target === links)) {
    modalHide();
  }
}

function modalShow() {
  modal.style.display = 'flex';
  wrapper.style.filter = 'blur(0.4rem)';
  modal.scrollIntoView({ behavior: 'smooth' });
}

hamburger.addEventListener('click', () => {
  modalShow();
  window.addEventListener('click', windowClickHandler);
});

modalX.addEventListener('click', () => {
  modalHide();
  window.removeEventListener('click', windowClickHandler);
});

// script to handle each of the links on the modal
links.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    modalHide();
    const target = event.target.getAttribute('href');
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
