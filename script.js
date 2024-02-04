function saveSliderPosition() {
    const slider = document.querySelector('.slider');
    const isChecked = document.getElementById('modeSwitch').checked;
    
    if (isChecked) {
        slider.classList.add('saved');
        localStorage.setItem('sliderPosition', 'right'); 
    } else {
        slider.classList.remove('saved');
        localStorage.setItem('sliderPosition', 'left'); 
    }
}

function retrieveSliderPosition() {
    const savedPosition = localStorage.getItem('sliderPosition');

    if (savedPosition === 'right') {
        document.getElementById('modeSwitch').checked = true;
        document.querySelector('.slider').classList.add('saved');
    } else {
        document.getElementById('modeSwitch').checked = false;
        document.querySelector('.slider').classList.remove('saved');
    }
}

window.onload = retrieveSliderPosition;
