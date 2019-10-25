// Init on DOM Load 
document.addEventListener('DOMContentLoaded', init); 

// Init app 
function init() {
    const textElement = document.querySelector('.text-type'); 
    const words = JSON.parse(textElement.getAttribute('data-words')); 
    const wait = textElement.getAttribute('data-wait'); 

    // Init TypeWriter 
    new TypeWriter(textElement, words, wait); 
}

class TypeWriter {
    constructor(textElement, words, wait=2000) {
        this.textElement = textElement;
        this.words = words; 
        this.text = ""; 
        this.wordIndex = 0; 
        this.wait = parseInt(wait, 10); 
        this.type(); 
        this.isDeleting = false;
    }

    type() {
        // Current index of the words 
        const currentIndex = this.wordIndex % this.words.length; 

        // Get full text of the current word 
        const fullText = this.words[currentIndex]; 

        if (this.isDeleting) {
            // Remove characters 
            this.text = fullText.substring(0, this.text.length - 1);
        } else {
            // Add characters 
            this.text = fullText.substring(0, this.text.length + 1);
        }

        this.textElement.innerHTML = `<span class="text">${this.text}</span>`; 

        let typeSpeed = 150; 

        if (this.isDeleting) {
            typeSpeed /= 2; 
        }

        // If word is complete 
        if (!this.isDeleting && this.text === fullText) {
            // Pause at the end 
            typeSpeed = this.wait; 
            this.isDeleting = true;
        } else if (this.isDeleting && this.text === "") {
            this.isDeleting = false; 
            this.wordIndex++; 
            
            // Pause before start typing again 
            typeSpeed = 500; 
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

window.sr = ScrollReveal(); 

sr.reveal('.navbar', {
    duration: 2000, 
    origin: 'bottom'
});
sr.reveal('.header', {
    duration: 2000, 
    delay: 250
});

sr.reveal('.home-intro', {
    duration: 3000, 
    origin: 'left',
    distance: '150px'
});
sr.reveal('.home-picture', {
    duration: 3000, 
    origin: 'top',
    distance: '250px'
});

sr.reveal('.about-picture', {
    duration: 2000, 
    origin: 'left', 
    distance: '300px', 
    viewFactor: 0.3
});
sr.reveal('.about-description', {
    duration: 2000, 
    origin: 'bottom', 
    distance: '150px', 
    viewFactor: 0.4
});

sr.reveal('.row .col-1', {
    duration: 2000, 
    delay: 500, 
    viewFactor: 0.1
});
sr.reveal('.location', {
    duration: 3000, 
    viewFactor: 0.1
});
sr.reveal('.content', {
    duration: 3000, 
    delay: 1000, 
    viewFactor: 0.1
});
sr.reveal('.dates', {
    duration: 3000, 
    delay: 500, 
    origin: 'right',
    viewFactor: 0.1
});
sr.reveal('.language', {
    duration: 3000, 
    origin: 'left', 
    viewFactor: 0.1
});
sr.reveal('.web', {
    duration: 3000,
    delay: 500, 
    origin: 'bottom',
    viewFactor: 0.1
});
sr.reveal('.technology', {
    duration: 3000, 
    delay: 1000, 
    origin: 'right', 
    viewFactor: 0.1
});

sr.reveal('.card', {
    duration: 3000, 
    origin: 'right',
    viewFactor: 0.1
});