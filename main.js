const button = document.getElementById('myButton');
const img = document.getElementById('image');
const yes_button = document.getElementById('yes');
const txt = document.getElementById('txt');


button.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
});

yes_button.addEventListener('click', () => {
    img.src = 'final.png';
    txt.textContent = 'I knew you\'d say yes hehe'
    button.parentNode.removeChild(button);
    yes_button.parentNode.removeChild(yes_button);
    document.removeEventListener('mousemove', handleMouseMove);
});

function handleMouseMove(event) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    if (mouseX < screenWidth / 2 && mouseY > screenHeight / 5) {
        img.src = 'shock.png';
        txt.textContent = 'pleaseeeeeeee say yes.......'
    }
    else if (mouseX > screenWidth / 2 && mouseY > screenHeight / 5) {
        img.src = 'sad.png';
        txt.textContent = 'NOOOO DONT DO THAT!!!!!'
    }
    else 
    {
        txt.textContent = 'Do you love me ^-^*?';
        img.src = 'Initial.png';
    }
}

document.addEventListener('mousemove', handleMouseMove);
