const userMail = document.querySelector('.user-mail');
const text = document.querySelector('.text');
const btnLog = document.getElementById('btn-submit');



// qundo viene cliccato il pulsante, fa il controllo
btnLog.addEventListener('click', function(){

    // creo una lista di mail
    const mail = ['email1@gmail.com', 'email2@gmail.com', 'email3@gmail.com',' email4@gmail.com']; 

    const mailvalue = userMail.value;
    const accepted = `Accesso approvato`;
    const denied = 'Accesso negato';

    // creo una variabile per controllare se la mail viene trovata 
    let found = false;
    /*
    loop per controllare se la mail inserita dall'utente corrisponde
    ad una mail presente nell'arrey
    */
    for(let i = 0; i < mail.length; i++){
        const singleMail = mail[i];

        if(mailvalue == singleMail){
            found = true;
        }
    }

    // pulisco il messaggio per evitare che venga stampato più volte
    text.innerHTML = ''

    if(found){
        text.innerHTML += accepted;
    }else{
        text.innerHTML += denied;
    }
})



