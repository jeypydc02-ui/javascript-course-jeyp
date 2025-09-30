'use strict';

// modeal elements
const modalE1 = document.querySelector('.modal');

// overlay modal
const overlayE1 = document.querySelector('.overlay');

// close modal button
const btnCloseModalE1 = document.querySelector('.close-modal');

// open modal button
const btnsOpenModalE1 = document.querySelectorAll('.show-modal');

console.log('Open buttons:', btnsOpenModalE1.length);


let lastFocusedButton = null;

const openModal = function() {
    // remove hidden class from modal and overlay
    modalE1.classList.remove('hidden');
    // remove hidden class from overlay
    overlayE1.classList.remove('hidden');
    
    modalE1.focus();
    lastFocusedButton = document.activeElement;
};


btnsOpenModalE1.forEach(btn => btn.addEventListener('click', openModal)); 

const closeModal = function() {
    // add hidden class to modal and overlay
    modalE1.classList.add('hidden');
    // add hidden class to overlay
    overlayE1.classList.add('hidden');
    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
};

btnsOpenModalE1.forEach(btn => btn.addEventListener('click', openModal));
// close modal event listener
btnCloseModalE1.addEventListener('click', closeModal);

// overlay click event listener
overlayE1.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {   
    if(e.key === 'Escape' && !modalE1.classList.contains('hidden')) {
        closeModal();
    }
});

modalE1.setAttribute('role', 'dialog');
modalE1.setAttribute('aria-modal', 'true');

btnCloseModalE1.setAttribute('aria-label', 'Close modal');
