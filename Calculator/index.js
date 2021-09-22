const buttons = document.querySelectorAll('button');
const screen = document.getElementById('inp');



for (let btn of buttons) {
    btn.addEventListener('click', (e) => {
        const buttonText = e.target.innerText;
    //    console.log('Clicked');
        if (buttonText === 'X') {
            screen.value += '*';
        }
        else if (buttonText === 'AC') {
            screen.value = "";
        }
        else if (buttonText === '<') {
            screen.value = screen.value.substring(0,screen.value.length-1);
        }
        else if (buttonText === '=') {
            try {
                screen.value=eval(screen.value);
                screen.style.transform="scale(1.5)"
            } catch (e) {
                console.log(e.message);
                screen.value="Invalid Operation"   
            }
        }
        else {
            screen.value += buttonText;
        }
    })
}