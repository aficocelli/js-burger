// variabili definite
var burgerName = document.getElementById('name-burger');

var tastoCalcolo = document.getElementById('calculate');

var choice = document.getElementsByClassName('ingredients');

var coupon = document.getElementById('coupon');

var total = document.getElementById('total');

var somma = 50;

// array definiti
var codeCoupon = ["burger20", "123", "sconto21"];

// Evento al click del pulsante calculate
tastoCalcolo.addEventListener ( "click",

  function() {

    // 1 verificare che sia stato inserito il nome burger
    if (burgerName.value != "") {

      // 2 verificare quali input radio sono fleggati
      for (var i = 0; i < choice.length; i++) {

        if (choice[i].checked) {

          // 3 sommare il valore degli input scelti
          somma = somma + parseInt(choice[i].value);

        }

      }

      // 4 verificare eventuale coupon
      if(codeCoupon.includes(coupon.value)) {

        somma -= somma * 0.20;

        console.log(somma);
      }

      // 5 esitare il totolae
      total.innerHTML = "$" + somma;

    } else {

      alert("Inserisci il nome del tuo burger");

    }

  }

);

var customChecked = document.getElementsByClassName('custom-check');
console.log(customChecked);

choice.addEventListener("click",
  function(){
    alert(ciao);
  }
);
