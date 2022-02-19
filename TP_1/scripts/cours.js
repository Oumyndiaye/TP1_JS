var btn = document.getElementById('btn');
var grand = document.getElementById('grd');
btn.addEventListener('click',function(){
    var divConteneur = document.createElement('div');
    var divIcone = document.createElement('div');
    var divTextarea = document.createElement('div');
    var iBtnDelete = document.createElement('i');
    var iBtnEdit = document.createElement('i');
    var textArea = document.createElement('TEXTAREA'); 
    
    iBtnDelete.setAttribute('class','fa-solid fa-trash-can')
    iBtnEdit.setAttribute('class','fa-solid fa-pen-to-square')
    grand.appendChild(divConteneur);
    divConteneur.appendChild(divIcone);
    
    divIcone.appendChild(iBtnDelete);
    divIcone.appendChild(iBtnEdit);
    divConteneur.appendChild(divTextarea);
    divTextarea.appendChild(textArea);

    divConteneur.setAttribute('class','conteneur')
    divIcone.setAttribute('class','icone')
    divTextarea.setAttribute('class','area')

    iBtnDelete.addEventListener('click',function(){
        grand.removeChild(divConteneur)
    
    });
    iBtnEdit.addEventListener('click',function(){
        textArea.toggleAttribute('disabled'); 
       
    });
});


    
      
