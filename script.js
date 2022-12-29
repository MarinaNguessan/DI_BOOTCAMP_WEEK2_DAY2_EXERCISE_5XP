
//Exercice1

/* declaration de variable */

let x= 7;
let y = 5;

if(y > x){
    alert(`${y} est le plus grand nombre`)
}
else{
    alert(`${x} est le plus grand nombre`)
}


//Exercice2


/* creation de variable */

let newDog = "Chihuahua"
 
/* affichage du nombre de newDog */

console.log(newDog.length);

/* affichage newDog en majuscule et en miniscule */

console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

/* Comparaison */
 
if( newDog == "Chihuahua"){
    alert("J'adore les Chihuahuas, c'est ma race de chien préféré")
}
else{
    console.log("je m'en fous, je préfère les chats")
}

// EXERCICE 3

/* declaration de variable */

nbre = prompt("Entrez un nombre svp!")

if(nbre%2 == 0){
    alert(`${nbre} est un nombre paire`)
}
else{
    alert(`${nbre} est un nombre impaire`)

}


//EXERCICE4

const users = ["Lea123", "Princess45, at&doglovers", "helooo@000"];

/* tableau vide */


if( users.length == 0){
 console.log("personne n'est en ligne")
};

/* un utilisateur connecté */

if( users.length == 1){
    console.log(`${users[0]} est en ligne`)
}

/* deux utilisateurs connectés */

if( users.length == 2){
    console.log(`${users[0]} et ${users[1]} sont en ligne`)
}

/* plus de deux utilisateurs connectés */

if( users.length >2){
    console.log(`${users[0]}, ${users[1]} et ${users[2]}  sont en ligne`)
}



