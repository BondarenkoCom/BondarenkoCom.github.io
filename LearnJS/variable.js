 function varFunc() {
     var a
     a = "HELLO WOLRD!!!";
     document.innerHTML = alert(a);
 };

 function funcCont() {
     var a, b;
     a = "мой возраст ";
     b = 25;

     document.innerHTML = alert(a + b);

 };


 function funcEval() {

     var x = "3+(5*2+6)/4";

     document.innerHTML = alert(eval(x));

 };

 //таблица операторов

 function plusFunc() {

     var a = 20;
     var b = 32;
     var c = "20 + 32 = "
     alert(c + (a + b));
 };


 function minusFunc() {

     var a = 120;
     var b = 32;
     var c = "120 - 32 = "
     alert(c + (a - b));
 };

 function multFunc() {

     var a = 20;
     var b = 32;
     var c = "20 * 32 = "
     alert(c + (a * b));
 };


 function divFunc() {

     var a = 120;
     var b = 20;
     var c = "120 / 20 = "
     alert(c + (a / b));
 };


 function divOFunc() {

     var a = 17;
     var b = 3;
     var c = "17 % 3 = "
     alert(c + (a % b));
 };

 function incFunc() {

     var a = 5;
     var b = "++5 = "
     alert(b + (++a));

 };

 function decFunc() {

     var a = 5;
     var b = "--5 = "
     alert(b + (--a));

 };


 function comFunc() {

     var a = 45;
     var b = 45;

     if (a == b) {
         alert("45 == 45 ,значит булевое значение TRUE");
     };
 };


 function notEqualFunc() {
     var a = 45;
     var b = 3;

     if (a != b) {
         alert("45 != 3 ,значит булевое значение TRUE");
     };
 };


 function strictlyFunc() {
     var a = 45;
     var b = "45";

     if (a === b) {
         alert("TRUE");
     } else {
         alert(" при 45 === '45' будет значение FALSE ");
     };
 };



 function NostrictlyFunc() {
     var a = 45;
     var b = "45";

     if (a !== b) {
         alert(" при 45 !== '45' будет значение TRUE ");
     }; 
 };

  function mostFunc() {
      var a,b;
      a = 45;
      b = 40;
      
      if (a > b) {
          alert("45 > 40 = TRUE");
      };
  };


function mostAreEqualFunc() {
    
     var a,b;
      a = 45;
      b = 45;
      
      if (a >= b) {
          alert("45 >= 45 = TRUE");
      };
  };
    



function lessFunc() {
      var a,b;
      a = 35;
      b = 45;
      
      if (a < b) {
          alert("35 < 45 = TRUE");
      };
  } ;


function lessAreEqualFunc() {
      var a,b;
      a = 45;
      b = 45;
      
      if (a <= b) {
          alert("45 <= 45 = TRUE");
      };
  } ;

//Logic operators

function logicOpAnd() {
    var a,b,c;
    a = 4;
    b = 4;
    c = 4;
    //ЕСЛИ a И b  Равны c тогда выйдет сообщение
    if (a && b == c) {
        alert("a && b == c ");
    };    
};
 
function logicOpAndFal() {
  var a,b;
    a = 4;
    b = 5;
    if (a && b) {
        alert("4 && 5 = false: " + a + " различаются с " + b);
    };  
};


function logicOpVS() {
    var a,b;
    a = true;
    b = false;
    
    if (a || b) {
        alert("ЕСЛИ A = true , B = false  ТОГДА выйдет это сообщение") ;
    } else {
        alert("you lose");
    };
};




