var myTableau = ['Mon premier','Mon Deuxieme','Mon Troisieme','Mon Quatrieme']; 
    const divMilieu = document.getElementById("milieu");
    const divGauche = document.getElementById('gauche');
    const divDroite = document.getElementById('droite');
    const btnLeft = document.getElementById('btnLeft');
    const btnRight = document.getElementById('btnRight');
    
 for(let i = 0;i<myTableau.length;i++){
    const para = document.createElement("p"); 
    para.innerText = myTableau[i];
    divGauche.appendChild(para);
    para.addEventListener ('mouseover',
    function(){
    this.style.backgroundColor = 'blue'});
      para.addEventListener ('click',
    function(){
    this.style.backgroundColor = 'transparent'});
    btnRight.addEventListener('click', function(){
        if(para.style.backgroundColor==='blue'){
            divDroite.appendChild(para);
            para.style.backgroundColor='transparent';
        }
            move(divDroite,btnLeft);
            move(divGauche,btnRight);
    });
    btnLeft.addEventListener('click', function(){
        if(para.style.backgroundColor==='blue'){
            divGauche.appendChild(para);
            para.style.backgroundColor='transparent';
        }
            move(divDroite,btnLeft);
            move(divGauche,btnRight);
    });
} 
    function move(conteneur,buton){
        if(conteneur.childNodes.length===0){
            buton.disabled = true;
        }else{
            buton.disabled =false;
        }
    }
    move(divDroite,btnLeft);