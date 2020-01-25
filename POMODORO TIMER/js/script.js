var burger = document.getElementById("burger");
var menu = document.getElementById('menu');
var sessionTime = document.getElementById('input1');
var breakTime = document.getElementById('input2');
var conter = document.getElementById('counting');
var play = document.getElementById('play');

/*These are the plus and minus icons in SESSION TIME INPUT*/
var moreTime = document.getElementById('moreTime');
var lessTime = document.getElementById('lessTime');

/*These are the plus and minus icons in BREAK TIME INPUT*/
var moreBreak = document.getElementById('moreBreak');
var lessBreak = document.getElementById('lessBreak');

//Function to show menu after clicking burger icon

burger.onclick = function(){
   
       if ( menu.getAttribute('class') != 'clicked' ) {
        document.getElementById('menu').style.display = 'flex';
        setTimeout(function() { menu.classList.add("clicked"); }, 500);
        document.getElementById(menu.classList.remove("noclicked"));
        burger.src="icons/x.png";
       }

        if ( menu.getAttribute('class') === 'clicked' ) {
            setTimeout(function() { document.getElementById('menu').style.display = 'none'; }, 500);
            setTimeout(function() { menu.classList.add("noclicked"); }, 500);
            document.getElementById(menu.classList.remove("clicked"));
            burger.src="icons/burger.png";
        }
    }

//This toggles between play and pause icons
play.onclick = function(){
    play.classList.toggle('pause');
}   


//SESSION TIME - ADD AND SUSTRACT TIME IN THE INPUT
//This adds 1 minute each time you click the plus icon
moreTime.onclick = function(){
   var  valor = parseInt(sessionTime.value);
    var  valor = valor + 1;
    sessionTime.value = valor;
    counting.innerHTML = valor;
}

//This substracts 1 minute each time you click the minus icon
lessTime.onclick = function(){
    var  valor = parseInt(sessionTime.value);
    var  valor = valor - 1;
    sessionTime.value = valor;
    counting.innerHTML = valor;
 
}


//BREAK TIME - ADD AND SUSTRACT TIME IN THE INPUT
//This adds 1 minute each time you click the plus icon
moreBreak.onclick = function(){
     var  valor2 = parseInt(breakTime.value);
     var  valor2 = valor2 + 1;
     breakTime.value = valor2;
     counting.innerHTML = valor2;
 }

 //This substracts 1 minute each time you click the minus icon
 lessBreak.onclick = function(){
     var  valor2 = parseInt(breakTime.value);
     var  valor2 = valor2 - 1;
     breakTime.value = valor2;
     counting.innerHTML = valor2;
 }


