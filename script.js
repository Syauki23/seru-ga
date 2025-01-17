document.getElementById('iya').addEventListener('click', function() {
    document.getElementById('message').classList.remove('hidden');
});

const nggaButton = document.getElementById('ngga');

nggaButton.addEventListener('mouseover', function() {
    moveButton(nggaButton);
});

function moveButton(button) {
    const container = document.querySelector('.container');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}