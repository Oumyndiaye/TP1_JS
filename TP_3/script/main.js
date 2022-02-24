var validation = document.getElementById("buton_envoi");
var maj = document.getElementById("maj");
var min = document.getElementById("min");
var nbre = document.getElementById("nbre");
var symbol = document.getElementById("symbol");
var nombre_i = document.getElementById("nombre_insuf");
var result = document.getElementById("result");
const longeurEl = document.getElementById('long_pw');

//-----------------Function-------------------------//
validation.addEventListener("click",() =>{
    const longeur = longeurEl.value;
    const majuscule = maj.checked?"ABCDEFGHIJKLMNOPQRSTUVWXYZ":'';
    const minuscule = min.checked?"abcdefghijklmnopqrstuvwxyz":"";
    const nombre = nbre.checked?"0123456789":"";
    const symbole = symbol.checked?"!@#$%^&*()":"";
    const btn = document.querySelectorAll('.btn');
    if(longeur < 5 || longeur>20){
        nombre_i.innerText = 'veuillez saisir un nombre entre 5 et 20';
       /*  return alert('veuillez saisir un nombre entre 5 et 20'); */
    }
     let chars=''; 
     chars += majuscule+minuscule+nombre+symbole;
   /*  result.innerText = generer_password(minuscule,majuscule,nombre,symbole,longeur); */ 
// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 var result = "";
 for (var i = 0; i < longeur; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    result += chars.substring(randomNumber, randomNumber +1);
   }
   document.getElementById("result").value = result;
});

