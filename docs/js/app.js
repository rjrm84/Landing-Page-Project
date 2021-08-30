
/*JS For nav*/
/* Creates an array of all section items. */
const navItems = [];
const sections = Array.from(document.getElementsByTagName("section"));

/* creating the li element and the a element and
   adds it to the element ul. */
const createNavigation = (sections) => {
    const navigation = document.getElementById('js-nav-list');

    sections.forEach((section) => {
        const liElement = document.createElement('li');
        const aElement = document.createElement('a');

        aElement.textContent = section.firstElementChild.textContent;
        /* Add the cursor property with the value of pointer since the element "a".*/
        aElement.style.setProperty('cursor', 'pointer');

        liElement.appendChild(aElement);
        navigation.appendChild(liElement);

        const navItem = {
            elementNav: aElement,
            elementSection: section
        };

        navItems.push(navItem);
    });
};

createNavigation(sections);


// Create a toggle event in navigation to handle responsiveness
let navList = document.getElementById('js-nav-list');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
});

/* Apply the class css activated
   in the navigation item corresponding to that section.*/
const activatedNavList = () => {
    let windowY = window.pageYOffset;


    navItems.forEach(({elementSection, elementNav}) => {
        const elementSectionTop = elementSection.offsetTop - 250;
        const elementSectionContent = elementSection.offsetHeight + elementSectionTop;

        if (
            windowY > elementSectionTop &&
            windowY <= elementSectionContent
        ) {
            elementNav.classList.add('activated');
        } else {
            elementNav.classList.remove('activated');
        }
    });
};

window.addEventListener('scroll', activatedNavList);


/*Create an event that verifies which navigation item was clicked and when
  it finds it, scrolls to the corresponding section.*/
const navigation = document.getElementById('js-nav-list');

navigation.addEventListener('click', (event) => {
    event.preventDefault();

    navItems.forEach(({elementSection, elementNav}) => {
        if (elementNav === event.target) {
            elementSection.scrollIntoView({behavior: 'smooth'});
        }
    });
});

/*JS for Nav Ends*/

//MODAL- SLIDER
function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
