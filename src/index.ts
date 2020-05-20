
import './styles.css';

const amountEl = document.getElementById('amount') as HTMLInputElement;
const btnCalculatEl = document.getElementById('calculate') as HTMLButtonElement;

btnCalculatEl.addEventListener('click', handleClick);


function handleClick() {
    const billAmount = amountEl.valueAsNumber;
    console.log(`The Bill is for ${billAmount}`);
}

