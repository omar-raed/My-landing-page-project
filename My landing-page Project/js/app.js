/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// For testing the loading time 
const t0 = performance.now();

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Remove class "your-active-class " function
const removeActive = function (sec){
    sec.classList.remove("your-active-class")
    sec.style.cssText= "background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)";
    
};

//Add class "your-active-class" function
const addActive = function (sec) {
    
    sec.classList.add("your-active-class");
    sec.style.background = "#f00";

};
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navigation menu

const navBuild = function () {
    
// Looping over sections & creating Links 
        sections.forEach (function (section){
        const sectionId = section.getAttribute("id");
        const makeLi = document.createElement("li");
        const makeAnchore = document.createElement("a");

        makeAnchore.setAttribute("class","menu__link");
        makeAnchore.setAttribute("href",`#${sectionId}`);
        makeAnchore.textContent = section.getAttribute("data-nav");
// append <a> elements to <li>
        makeLi.appendChild(makeAnchore);
// append <li> elements to navList 
        navList.appendChild(makeLi);

    })
        
        return navList;
                

}

navBuild();




// Adding or Removing class "your-active-class" to section when near top of viewport on scrolling

const scrolling = document.onscroll= function (){
    let postionSec = document.documentElement.scrollTop ;
sections.forEach( function(section){

    if (postionSec >= section.offsetTop - section.offsetHeight *0.6 && postionSec < section.offsetTop + section.offsetHeight *0.4 ){
        
       addActive(section); 
    }else{
        removeActive(section);
    }
    })
}



 
// Scroll to section on link click using scrollIntoView method
const Anchors = document.querySelectorAll("a");
Anchors.forEach( function (anchor){
    anchor.addEventListener("click", function(event){
        event.preventDefault();
        
        document.querySelector(event.target.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        })
    })
})

/**
 * End Main Functions
 * 
*/



// The go up button 
const btn = document.getElementById("upBtn")
window.onscroll = function () {
    if (window.scrollY >= 300) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
}

btn.addEventListener("click", function () {
    window.scrollTo(0,0);
})


// For testing the loading time 

const t1 = performance.now();

console.log(`it took ${t1-t0} millisecond`);