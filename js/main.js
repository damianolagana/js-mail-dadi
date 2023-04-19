let mail = prompt("Inserisci la tua email");
console.log("La tua email è: ",mail);

const listaMail = ["giusppe.rossi@gmail.com", "fabrizio.biscotti@gmail.com", "alfonso.signorini@gmail.com", "damianolagana@gmail.com"];

let mailAutorizzata = false;

for (let c = 0; c < listaMail.length; c++){
    // console.log(listaMail[c]);

    const mailIdonea = listaMail[c];
   
    if(mail == mailIdonea){
        mailAutorizzata = true;
        // console.log("Trovata corrispondenza");
        
    }

}

if(mailAutorizzata==true){
    alert("La tua email : " + mail + " è autorizzata")
} else {
    alert("La tua email : " + mail + " non è autorizzata")
}

