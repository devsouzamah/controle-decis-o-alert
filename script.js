function checkAge(){
    let age = parseInt(document.getElementById('age'));

    if (age < 18){
        alert ('Você é menor de idade.');

    }else {
        alert('Você é maior de idade.');
    }

}