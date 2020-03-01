import runSlider from 'modules/slider.js'
import {tns} from '../../node_modules/tiny-slider/src/tiny-slider';


/* SLIDER CONFIG
================================ */

  var slider = tns({
 
  "container": "#autoplay",
  "axis": "horizontal",
  "items": 1,
  "speed": 800,
  "autoplay": true,
  "autoplayButtonOutput": false,
  "autoplayTimeout": 4500,
  "swipeAngle": false,
  "controls": false,
  "navPosition": 'bottom center',
  "center": true,
  "arrowKeys": true

})

/* FLOATING HEADER 
================================ */
	

window.onscroll = function() {myFunction()};

var nav = document.getElementById("myNav");

var sticky = nav.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}


/* FORM VALIDATION
====================================== */	


var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;




const newsletter  =  document.getElementById('newsletter')
const email  =  document.getElementById('email')
const name  =  document.getElementById('name')
const message  =  document.getElementById('message')
const submit = document.getElementById('submit')

function checkInput(input) {

	if (input.id === 'email' || input.id === 'newsletter') {


		if (emailRegExp.test(input.value)) {
		    input.setCustomValidity("");
		    return true
		} 
		else {
		    input.setCustomValidity("Invalid property");
		    return false;
	  	}

		}

		if (input.value.length > 0) {
		    input.setCustomValidity("");
		    return true
		} 
		else {
		    input.setCustomValidity("Invalid property");
		    return false;
	  	}	
	}

function validate(id) {

const input = document.getElementById(id)
checkInput(input)
input.addEventListener("change", function(event) {checkInput(input)});
}



validate('email');
validate('newsletter');
validate('name')
validate('message')

















