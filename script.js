function changeMode() {
    var element = document.body;
    var image = document.getElementById("about_me_main_photo")
    
    if (localStorage.getItem('sliderPosition') === 'right') {
        element.classList.add("dark-mode");
        image.src = "images/sujay2.jpg";
    } else {
        element.classList.remove("dark-mode");
        image.src = "images/sujay1.jpg";
    }
}

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

    changeMode(); // Call the changeMode function to apply the mode immediately
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

    changeMode(); // Call the changeMode function to apply the mode immediately
}

window.onload = function () {
    retrieveSliderPosition();
};

// Adding event listener for mode switch
document.getElementById('modeSwitch').addEventListener('change', saveSliderPosition);
