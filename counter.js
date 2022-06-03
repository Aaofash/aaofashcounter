const counter = document.getElementById('counter');
const buttons = document.querySelectorAll('.btn');
let i = '0';
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const a = e.currentTarget.classList;
        
        if (a.contains('increase')){
            i++;
        }
        else if (a.contains('decrease')){
            i--;
        }
        else {
            i = 0;
        }
        counter.textContent = i;
    })
})