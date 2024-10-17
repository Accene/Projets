function test_age() {
    let age = prompt("Quel est votre âge ?");
    if (age < 18) {
        document.write("Vousêtes mineur");
        document.body.style.backgroundColor="red";
    }
    else {
        document.write("Vous êtes majeur");
        document.body.style.backgroundColor="green";
    }
}

function calcul_moyenne(){
    var n1 = prompt("Donner la première note :");
    var n2 = prompt("Donner la deuxième note :");
    var n3 = prompt("Donner la troisème note :");

    var somme = Number(n1) + Number(n2) + Number(n3);

    document.write("Voici la somme : " + somme + "<br>");
    var moyenne = somme/3;

    document.write("Voici la moyenne : " + moyenne + "<br>");

    
    if(moyenne<0 || moyenne>20){
        document.write("Moyenne invalide");
    }

    else if(moyenne<10){
        document.write("Redoublant");
    }

    else if(moyenne<14){
        document.write("Passable");
    }

    else if(moyenne>14){
        document.write("Mention bien");
    }

}

function test_couleur(){
    let couleur = prompt("Donner une couleur en anglais");
    document.body.style.backgroundColor = couleur;
}