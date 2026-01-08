console.log("Script loaded successfully.");

const button = document.getElementById('actionBtn');
const body = document.body;

const colors = ['#f4f4f9', '#ffeaa7', '#81ecec', '#fab1a0'];
let colorIndex = 0;

button.addEventListener('click', () => {
    // Cycle through colors
    colorIndex = (colorIndex + 1) % colors.length;
    body.style.backgroundColor = colors[colorIndex];
    console.log(`Background changed to ${colors[colorIndex]}`);
});
