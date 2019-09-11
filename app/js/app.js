var d=document, c=console.log, main, aBtnVer, aBtnVol, aFiltro, aProd, aMonos, aPant, aReme, aAgregar, ac, cerrar, btnCarrito, menu, ulgral, li, figure, img, ul, liNom, p, span, pBor, liTalle, liColor, carrito, yo, body, aCarrito=[], pos=[], btnFinal, aInput, btnSig, pMsj, btnFinCom, aInputE, cMenu, volver;


main=d.querySelector('main');
aBtnVer=d.querySelectorAll('main ul li>a, #botones> :last-child a');
aBtnVol=d.querySelectorAll('body> div> div> :last-child a');
aFiltro=d.querySelectorAll('#botones ul li a');
aProd=d.querySelectorAll('.todo');
aMonos=d.querySelectorAll('.mono');
aPant=d.querySelectorAll('.pant');
aReme=d.querySelectorAll('.reme');
aAgregar=d.querySelectorAll('body>div>div form+button');
ac=d.querySelector('nav>p');
menu=d.querySelector('#botones');
btnCarrito=d.querySelector('header> :last-child');
carrito=d.querySelector('#carrito');
yo=d.querySelector('#yo');
cerrar=d.querySelector('#yo> :last-child');
body=d.querySelector('body> :nth-child(3)')
total=d.querySelector('#carrito> div> :first-child span');
items=d.querySelector('#carrito h2 span')
btnFinal=d.querySelector('#carrito> div> :last-child a');
btnSig=d.querySelector('#pago> :nth-child(4)');
aInput=d.querySelectorAll('#pago input');
pMsj=d.querySelectorAll('#pago h2+span, #envio h2+span');
btnFinCom=d.querySelector('#envio> button');
aInputE=d.querySelectorAll('#envio input');
cMenu=d.querySelectorAll('#fondo, #botones> :first-child');
volver=d.querySelector('#carrito> :last-child')

Mostrar=function(){
    menu.style.width='0';
    fondo.style.display='none'
    
    yo.style.display='none';
    
    if(this.attributes.href.value == '#monos'){
        
        for(var j=0; j<aReme.length;j++){

            aReme[j].style.display='none';
        }

        for(var j=0; j<aMonos.length;j++){

            aMonos[j].style.display='grid';
            main.style.display='block';
        }

        for(var j=0; j<aPant.length;j++){

            aPant[j].style.display='none';
        }
    }else if(this.attributes.href.value == '#pant'){
        
        for(var j=0; j<aReme.length;j++){

            aReme[j].style.display='none';
        }

        for(var j=0; j<aMonos.length;j++){

            aMonos[j].style.display='none';
        }

        for(var j=0; j<aPant.length;j++){

            aPant[j].style.display='grid';
            main.style.display='block';
        }
    }else if(this.attributes.href.value == '#reme'){
        
        for(var j=0; j<aReme.length;j++){

            aReme[j].style.display='grid';
            main.style.display='block';
        }

        for(var j=0; j<aMonos.length;j++){

            aMonos[j].style.display='none';
        }

        for(var j=0; j<aPant.length;j++){

            aPant[j].style.display='none';
        }
    }else{
        
        for(var i=0; i<aProd.length;i++){
            
            aProd[i].style.display='grid'
            main.style.display='block';
        }
    }
} 

Agregar=function(){
    
    var aSelec=this.previousElementSibling.firstElementChild.children;
    
    for(var i=0; i<aSelec.length;i++){
        
        if(aSelec[i].value==''){
            
            aSelec[i].style.border='1px solid red';
            
        }else{
            
            aSelec[i].style.border='1px solid #A9A9A9';
        }
    }
    
    if(aSelec[0].value!='' && aSelec[1].value!=''){ 
        cont++;
        items.innerHTML=' ('+cont+')';
        suma+=parseInt(this.parentNode.previousElementSibling.lastElementChild.innerHTML.split('$')[1]);
        total.innerHTML='$'+suma;

        if(aCarrito.length==0 || pos.indexOf(this.parentNode.previousElementSibling.previousElementSibling.innerHTML) === -1){

            aProducto={
                Nombre:this.parentNode.previousElementSibling.previousElementSibling.innerHTML,
                Precio:parseInt(this.parentNode.previousElementSibling.lastElementChild.innerHTML.split('$')[1]),
                Cant: 1
            } 

            aCarrito.push(aProducto);
            pos.push(aProducto.Nombre)
        }else{
            aCarrito[pos.indexOf(this.parentNode.previousElementSibling.previousElementSibling.innerHTML)].Cant++;
        }
    }
}

Desab=function(){
    if(aCarrito.length==0){

        btnFinal.style.backgroundColor='#8ac43f9c' 
     }else{
       
        btnFinal.style.backgroundColor='#8ac43f' 
     }
}

for(var i=0; i<aBtnVer.length;i++){
    
    aBtnVer[i].onclick=function(){
        
        main.style.display='none';
        
        menu.style.width='0';
        fondo.style.display='none'
        
        if(this.attributes.href.value=='#yo'){
            
            yo.style.display='block';
        }
    }
}

cerrar.onclick=function(){
    yo.style.display='none';
    main.style.display='block';
}

for(var i=0; i<aBtnVol.length;i++){
    
    aBtnVol[i].onclick=function(){
        
        main.style.display='block';
    }
}

for(var i=0; i<aFiltro.length; i++){
    
    aFiltro[i].onclick=Mostrar;
}

ac.onclick=function(){
        menu.style.width='70vw';
        fondo.style.display='block'
}

for(var i=0; i<cMenu.length; i++){
    
    cMenu[i].onclick=function(){
        menu.style.width='0';
        fondo.style.display='none'
    }
}

btnCarrito.onclick=function (){
    
    Desab();
    
    carrito.style.width='100vw';
    carrito.style.padding='20px 20px 120px 20px';

    carrito.addEventListener("transitionend", function(){
        body.style.display='none';
    });

    ulgral=d.createElement('ul');
    carrito.insertBefore(ulgral, d.querySelector('#carrito> :nth-child(2)'))

    for(var i=0; i<aCarrito.length; i++){

        li=d.createElement('li');
        li.style.cssText='position: relative; display: grid; grid-template-columns: 100px 1fr; grid-column-gap: 10px; grid-template-rows: 100px; padding-bottom:10px; border-bottom: 1px solid #b1b1b1; margin-bottom:10px;'
        ulgral.appendChild(li);

        figure=d.createElement('figure');
        li.appendChild(figure);

        img=d.createElement('img');
        img.src='img/mini/'+aCarrito[i].Nombre+'.jpg';
        img.alt='Modelo usando '+aCarrito[i].Nombre;
        figure.appendChild(img)

        ul=d.createElement('ul');
        ul.style.cssText='text-align: left;'
        li.appendChild(ul);

        liNom=d.createElement('li');
        liNom.style.cssText='display: flex; justify-content: space-between;'
        ul.appendChild(liNom);

        p=d.createElement('p');
        p.innerHTML=aCarrito[i].Nombre +' (';
        liNom.appendChild(p);

        span=d.createElement('span');
        span.style.cssText='font-family: "m"; font-size: 1em;'
        span.innerHTML=aCarrito[i].Cant+')';
        p.appendChild(span);

        liNom.innerHTML+='$'+aCarrito[i].Precio * aCarrito[i].Cant;

        pBor=d.createElement('p');
        pBor.innerHTML='Borrar';
        pBor.style.cssText='position: absolute; bottom: 10px; right: 0; width: 25px; height: 25px; font-size:0; background: url(img/tacho.svg) no-repeat;'
        pBor.onclick=function(){
            var index;

            cont-=parseInt(this.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.innerHTML.split(')')[0]);
            items.innerHTML=' ('+cont+')';

            suma-=parseInt(this.previousElementSibling.firstChild.innerHTML.split('$')[1])
            total.innerHTML='$'+suma;

            index=pos.indexOf(this.previousElementSibling.firstElementChild.firstElementChild.innerHTML.split('(')[0]);
            pos.splice(index, 1);
            aCarrito.splice(index, 1);

            ulgral.removeChild(this.parentNode)

            Desab();
        }
        li.appendChild(pBor);
    }
}

volver.onclick=function(){
    
    body.style.display='block';
    carrito.addEventListener("transitionend", function(){
        body.style.display='block';
    });
    carrito.removeChild(ulgral)
    carrito.style.width='0';
    carrito.style.cssText='padding:0; padding-top: 20px;';
}

for(var i=0; i<aAgregar.length; i++){
    
    var cont=0, suma=0;
    aAgregar[i].onclick=Agregar;
}

btnFinal.onclick=function(){
    
    body.style.display='block';
    carrito.addEventListener("transitionend", function(){
        body.style.display='block';
    });
    carrito.removeChild(ulgral)
    carrito.style.width='0';
    carrito.style.cssText='padding:0; padding-top: 20px;';
    btnCarrito.style.backgroundPosition='0 0'
    selecC=null;
 
    if(aCarrito.length==0){
        
        return false;
    }else{
        
        return true;
        main.style.display='none';
    }
}

btnSig.onclick=function(){
     
    if(aInput[2].value=='' || aInput[3].value==''){

        aInput[2].style.border='solid 1px red';
        aInput[3].style.border='solid 1px red';
        pMsj[0].innerHTML='Completá los campos requeridos';
        return false;
    }else if(aInput[0].value.length !=16){

        pMsj[0].innerHTML='Nro. de tarjeta incorrecto';
        aInput[0].style.border='solid 1px red';
        return false;
    }else if(aInput[1].value.length !=3){

        pMsj[0].innerHTML='Nro. de CVV incorrecto';
         aInput[1].style.border='solid 1px red';
        return false;
    }else{

        return true;
    }
}

btnFinCom.onclick=function(){
    
    for(var i=0; i<aInputE.length;i++){
        
        if(aInputE[i].value==''){
            
            aInputE[i].style.border='solid 1px red';
            pMsj[1].innerHTML='Completá los campos requeridos';
            return false
        }else{
            
            aCarrito=[];
            pos=[];
            cont=0;
            suma=0;
            items.innerHTML=0;
            total.innerHTML='$'+0;
            return true
        }
    }
}