// Function to open a specific tab
function openTab(tabName) {
    // Hide all tab content elements
    const tabContents = document.getElementsByClassName('tabContent');
    for (let content of tabContents) {
        content.style.display = 'none';
    }

    // Deactivate all tab buttons
    const tabs = document.getElementsByClassName('tab');
    for (let tab of tabs) {
        tab.classList.remove('active');
    }

    // Show the selected tab content and activate the corresponding tab button
    document.getElementById(tabName).style.display = 'block';
    document.querySelector(`button.tab[data-tab="${tabName}"]`).classList.add('active');
}

// Set the first tab as active by default when the page loads
document.getElementById('tab1').style.display = 'block';
document.querySelector('button.tab[data-tab="tab1"]').classList.add('active');


// *************

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');

function showSlide(index) {
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }

    slider.style.transform = `translateX(${-slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

// Show initial slide
showSlide(slideIndex);

