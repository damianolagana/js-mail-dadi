let mail = prompt("Inserisci la tua email");

console.log("La tua email è: ",mail);

const listaMail = ["giusppe.rossi@gmail.com", "fabrizio.biscotti@gmail.com", "alfonso.signorini@gmail.com", "damianolagana@gmail.com"];

for (let c = 0; c < listaMail.length; c++){
    // console.log(listaMail[c]);

    const mailIdonea = listaMail[c];
    if(mail = mailIdonea){
        alert("La tua mail : " + mail + "è idonea")
    } else{
        alert("La tua email: "+ mail + "non è idonea")
    }

}
