let suivant = document.getElementById('suivant');
let container = document.getElementById('container');
let btn1Div = document.getElementById('btn1'); 
let bt1Div = document.getElementById('bt1');
let bt2Div = document.getElementById('bt2');
let bt3Div = document.getElementById('bt3');
let bt4Div = document.getElementById('bt4');
let hh = document.getElementById('hh');
let btn =document.querySelectorAll('.btn') ;
let answers = document.querySelectorAll('.btn');
let question = document.getElementById('question');      
let myArray = [
    {   question:"Quelle est le pays organisateur de la CAN en 1986",
        a: "Afrique du Sud",
        b: "Kenya",
        c: "Gabon",
        d: "Egypte",
        correct:'d'
    },
    
    {   question:"Quelle est le pays organisateur de la CAN en 1990",
    
        a :"Egypte",
        b: "Nigeria",
        c: "Senegal",
        d: "Algerie",
        correct: 'd'
    },
    {   question:"Quelle est le pays organisateur de la CAN en 1992",   
        a :"Tunisie",
        b: "Maroc",
        c: "Senegal",
        d: "Cameroun",
        correct: 'c'
    },
    {   question:"Quelle est le pays organisateur de la CAN en 1994",   
        a :"Gambie",
        b: "Tunisie",
        c: "Cameroun",
        d: "Liberia",
        correct: 'b'
    },
];
let i=0;
let compteur =0;
bt1Div.innerText = myArray[i].a
bt2Div.innerText = myArray[i].b
bt3Div.innerText = myArray[i].c
bt4Div.innerText = myArray[i].d
question.innerText=myArray[i].question; 
suivant.addEventListener('click',function(){
    let reponse;
    answers.forEach (answer =>{
        if(answer.checked){
            reponse = answer.value;  
            if(reponse == myArray[i].correct){
                compteur++;
            }
            i++
            if (i<myArray.length) {
                bt1Div.innerText = myArray[i].a
            bt2Div.innerText = myArray[i].b
            bt3Div.innerText = myArray[i].c
            bt4Div.innerText = myArray[i].d 
            question.innerText=myArray[i].question; 
            } 
            else{
                hh.innerHTML=`<h2>Vous avez trouver ${compteur}/${myArray.length} questions </h2> 
                <button onclick = "location.reload()">Rejouer</button>`;  
            }   
        }
    })
    
});


    

   
   

   