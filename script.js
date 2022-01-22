const words = ["Developer.", "Mithran."];
let i = 0;
let timer;


// var count = 0
// window.addEventListener('scroll', () => {
//     count+=0.02
//     var root = document.querySelector(':root');
//     var rootStyles = getComputedStyle(root);
//     var deg= rootStyles.getPropertyValue('--deg');
//     root.style.setProperty('--deg', count);
//     console.log(deg); 
// })


var lastScrollTop = 0;

// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   if (st > lastScrollTop){
    lastScrollTop-=0.1
   } else {
    lastScrollTop+=0.1
   
    
   } 
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
   var root = document.querySelector(':root');
    var rootStyles = getComputedStyle(root);
    var deg= rootStyles.getPropertyValue('--deg');
    root.style.setProperty('--deg', lastScrollTop/1000);
    //console.log(lastScrollTop/1000 , lastScrollTop );
}, false);



function typingEffect() {

    let word = words[i].split("");
    var loopTyping = function () {
        if (word.length > 0) {

            document.getElementById('word').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 1500);

            return false;
        };
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
};

function deletingEffect() {


    let word = words[i].split("");
    var loopDeleting = function () {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };

            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 80);
    };
    loopDeleting();
};

typingEffect();



// pick projects code

  function myFunctionpy() {
    var x = document.querySelectorAll("#py").forEach(function(element){
        if (element.style.display === "none") {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
    });
    console.log(x)
    
    
  }
  function myFunctionds() {
    var x = document.querySelectorAll("#ds").forEach(function(element){
        if (element.style.display === "none") {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
    });
    console.log(x) 
  }
  function myFunctionjs() {
    var x = document.querySelectorAll("#js").forEach(function(element){
        if (element.style.display === "none") {
            element.style.display = "block";
          } else {
            element.style.display = "none";
          }
    });
    console.log(x)
  }

  function actualds(){
    myFunctionjs()
    myFunctionpy()
  }
  function actualpy(){
    actualds()
    myFunctionjs()
    myFunctionds()
  }





// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");


// function btnclick(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   }

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
function btnclick(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  }

