let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { showSlides(slideIndex += n);}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	// let slides = document.querySelector(".fade");

	// let slides = document.getElementsByClassName("fade");

	console.log(slides.length);
	console.log(slides);


	if (n > slides.length) {slideIndex = 1}

	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		console.log(slides[i]);
	}
	// console.log((slides[1]));
	slides[slideIndex-1].style.display = "block";
}

// slideshow end ....................

// input range

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");


// output.innerHTML = slider.value; 

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
//   console.log(this.value);
// }

// range end.......................

// start buttons styles ..........

// let index = 'button1';
// let car = {button1:"text1", button2:"text2", button3:"text3",button4:"text4"};


// function navbar1(ind){    
//     let block = document.getElementById(index);//get old button
//     let block1 = document.getElementById(car[index]);
//     // old
//     let styles1 = `
//     color:whtie;
//     border-bottom: none;
//     background-color: #333366;`;
//     block1.style.display = "none";

//     block.style = styles1;//set old style
//     index = ind;//set
// }


// function navbar(n){
//     navbar1(n);
    
//     let index1 = document.getElementById(n);
//     let block1 = document.getElementById(car[index]);
//     let styles = `
//     color:red;
//     border-bottom: none;
//     background-color: white;`;// new style

//     index1.style = styles;
//     block1.style.display = "block";
// }

// navbar(index);


// end buttons styles ..............





