const input = document.getElementById('qr-input');
const btn = document.getElementById('gen-btn');
const result = document.getElementById('qr-result');

function generateQR() {
    const val = input.value.trim();

    if (!val) {
        alert('Please type something into the box first!');
        return;
    }

    result.innerHTML = '';

    const img = document.createElement('img');
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=' + encodeURIComponent(val);

    img.onload = function() {
        result.style.display = 'flex';
    };

    result.appendChild(img);
}
 
btn.addEventListener('click', generateQR);

input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            generateQR();
        }
    });
