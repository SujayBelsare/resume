function changeMode() {
    var element = document.body;
    var image = document.getElementById("about_me_main_photo")
    var logo1 = document.getElementById("github_logo")
    var logo2 = document.getElementById("insta_logo")
    var logo3 = document.getElementById("linkedin_logo")
    var logo4 = document.getElementById("mail_logo")

    
    if (localStorage.getItem('sliderPosition') === 'right') {
        element.classList.add("dark-mode");
        image.src = "images/sujay2.jpg";
        logo1.src = "images/github2.png"
        logo2.src = "images/instagram2.png"
        logo3.src = "images/linkedin2.png"
        logo4.src = "images/mail2.png"
    }
    else
    {
        element.classList.remove("dark-mode");
        image.src = "images/sujay1.jpg";
        logo1.src = "images/github1.png"
        logo2.src = "images/instagram1.png"
        logo3.src = "images/linkedin1.png"
        logo4.src = "images/mail1.png"
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
