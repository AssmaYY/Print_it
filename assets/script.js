const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}

];



// Obtenez les références des éléments du carrousel
const carouselContainer = document.querySelector("#banner");
const userSelection = document.getElementsByClassName('menu');
const prevArrow = document.getElementsByClassName('arrow_left');
const nextArrow = document.getElementsByClassName('arrow_right');
const dotsContainer = document.querySelector('.dots');



// Variable pour suivre l'index de la diapositive active
let currentSlide = 0;

// Fonction pour afficher une diapositive
function showSlide(index) {

	console.log(index);
	// Vérifiez que l'index est dans les limites des diapositives
	if (index < 0) {
		index = slides.length - 1;
	} else if (index >= slides.length) {
		index = 0;
	}

	// Obtenez la diapositive correspondant à l'index
	const slide = slides[index];
	console.log( `./assets/images/slideshow/${slide.image}`);
	
	// Mettez à jour l'image et la balise de la diapositive active
	
	var currentCarousel = document.getElementsByClassName('banner-img');
	currentCarousel[0].src = `./assets/images/slideshow/${slide.image}`;
	
	// carouselContainer.innerHTML = `
	// 	<img class="banner-img" src="./assets/images/slideshow/${slide.image}" alt="Banner Print-it">
	// 	<p>${slide.tagLine}</p>
	// `;

	// Supprimez les anciennes taglines
	const existingTaglines = carouselContainer.querySelectorAll('p');
	existingTaglines.forEach(tagline => tagline.remove());

	// Créez et insérez la nouvelle tagline
	const tagline = document.createElement('p');
	tagline.innerHTML = slide.tagLine;
	carouselContainer.appendChild(tagline);

	// Mettez à jour les points indicateurs
	dotsContainer.innerHTML = '';
	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('span');
		dot.className = 'dot';
		if (i === index) {
			dot.classList.add('dot_selected');
		}
		dotsContainer.appendChild(dot);
	}

	// Mettez à jour l'index de la diapositive active
	currentSlide = index;
}

// Gestionnaire d'événement pour la flèche précédente
for(let i = 0; i < prevArrow.length; i++) {
	prevArrow[i].addEventListener("click", function() {
		showSlide(currentSlide - 1);
	})
}

// Gestionnaire d'événement pour la flèche suivante
for(let i = 0; i < nextArrow.length; i++) {
	nextArrow[i].addEventListener("click", function() {
		showSlide(currentSlide + 1);
	})
}

// Afficher la première diapositive lors du chargement de la page
showSlide(currentSlide);
