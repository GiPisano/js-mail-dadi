const textComputerChoice = document.getElementById("computer-choice");
const textUserChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const btnGo = document.getElementById("btn-submit")





btnGo.addEventListener('click', function(){
    let computerChoice = Math.floor((Math.random() * 6) + 1);
    let userChoice = Math.floor((Math.random() * 6) + 1);
    textComputerChoice.innerText = '';
    textUserChoice.innerText = ''

    textComputerChoice.innerText += `al computer è uscito il numero ${computerChoice}`;
    textUserChoice.innerText += `il tuo numero è ${userChoice}`;
   
   


    if(computerChoice > userChoice){
        result.innerHTML = `${computerChoice} è più grande di ${userChoice} , hai perso`
    } else if(computerChoice < userChoice){
        result.innerHTML = `${computerChoice} è più piccolo di ${userChoice} , hai vinto`
    } else{
        result.innerHTML = `${computerChoice} è uguale a ${userChoice} , la partita è pari`
    }
})