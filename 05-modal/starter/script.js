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

const openModal = function() {
    // remove hidden class from modal and overlay
    modalE1.classList.remove('hidden');
    // remove hidden class from overlay
    overlayE1.classList.remove('hidden');
    
};

btnsOpenModalE1.forEach(btn => btn.addEventListener('click', openModal)); 

const closeModal = function() {
    // add hidden class to modal and overlay
    modalE1.classList.add('hidden');
    // add hidden class to overlay
    overlayE1.classList.add('hidden');
};

btnsOpenModalE1.forEach(btn => btn.addEventListener('click', openModal));
// close modal event listener
btnCloseModalE1.addEventListener('click', closeModal);

// overlay click event listener
overlayE1.addEventListener('click', closeModal);