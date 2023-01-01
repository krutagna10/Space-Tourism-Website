let data = {
    "destinations": [
        {
            "name": "Moon",
            "images": {
                "png": "/images/destination/image-moon.png",
                "webp": "/images/destination/image-moon.webp"
            },
            "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            "distance": "384,400 km",
            "travel": "3 days"
        },
        {
            "name": "Mars",
            "images": {
                "png": "/images/destination/image-mars.png",
                "webp": "/images/destination/image-mars.webp"
            },
            "description": "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            "distance": "225 mil. km",
            "travel": "9 months"
        },
        {
            "name": "Europa",
            "images": {
                "png": "/images/destination/image-europa.png",
                "webp": "/images/destination/image-europa.webp"
            },
            "description": "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            "distance": "628 mil. km",
            "travel": "3 years"
        },
        {
            "name": "Titan",
            "images": {
                "png": "/images/destination/image-titan.png",
                "webp": "/images/destination/image-titan.webp"
            },
            "description": "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            "distance": "1.6 bil. km",
            "travel": "7 years"
        }
    ],
    "crew": [
        {
            "name": "Douglas Hurley",
            "images": {
                "png": "/images/crew/image-douglas-hurley.png",
                "webp": "/images/crew/image-douglas-hurley.webp"
            },
            "role": "Commander",
            "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
            "name": "Mark Shuttleworth",
            "images": {
                "png": "/images/crew/image-mark-shuttleworth.png",
                "webp": "/images/crew/image-mark-shuttleworth.webp"
            },
            "role": "Mission Specialist",
            "bio": "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        },
        {
            "name": "Victor Glover",
            "images": {
                "png": "/images/crew/image-victor-glover.png",
                "webp": "/images/crew/image-victor-glover.webp"
            },
            "role": "Pilot",
            "bio": "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
        },
        {
            "name": "Anousheh Ansari",
            "images": {
                "png": "/images/crew/image-anousheh-ansari.png",
                "webp": "/images/crew/image-anousheh-ansari.webp"
            },
            "role": "Flight Engineer",
            "bio": "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
        }
    ],
    "technology": [
        {
            "name": "Launch vehicle",
            "images": {
                "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
                "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
            },
            "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
            "name": "Spaceport",
            "images": {
                "portrait": "./assets/technology/image-spaceport-portrait.jpg",
                "landscape": "./assets/technology/image-spaceport-landscape.jpg"
            },
            "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
            "name": "Space capsule",
            "images": {
                "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
                "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
            },
            "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
    ]
}

// Mobile Navigation Toggle
const navToggle = document.querySelector('.header__mobile-nav-toggle');
const header = document.querySelector('.header')
navToggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
})

// General functions for links
const update = (links, currentActive) => {
    links.forEach((link, index) => {
        if (currentActive === index) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    })
}

// Destination Page
const destinationNavLinks = document.querySelectorAll('.destination__nav-link');
const destinationPlanetImage = document.querySelector('.destination__planet-image');
const destinationPlanet = document.querySelector('.destination__planet');
const destinationPlanetText = document.querySelector('.destination__planet-text');
const destinationPlanetDistance = document.querySelector('.destination__distance');
const destinationTravelTime = document.querySelector('.destination__travel-time');


destinationNavLinks.forEach((navLink, index) => {
    navLink.addEventListener('click', () => {
        update(destinationNavLinks, index);
        destinationPlanetImage.src = data.destinations[index].images.webp;
        console.log(destinationPlanetImage.src = data.destinations[index].images.webp)
        destinationPlanet.textContent = data.destinations[index].name;
        destinationPlanetText.textContent = data.destinations[index].description;
        destinationPlanetDistance.textContent = data.destinations[index].distance;
        destinationTravelTime.textContent = data.destinations[index].travel;
    })
})


// crew Page
const crewNavLinks = document.querySelectorAll('.crew__nav-link');
const crewImage = document.querySelector('.crew__image');
const crewPersonBio = document.querySelector('.crew__person-bio');
const crewPersonPost = document.querySelector('.crew__person-post');
const crewPersonName = document.querySelector('.crew__person-name');

crewNavLinks.forEach( (navLink, index) => {
    navLink.addEventListener('click', () => {
        update(crewNavLinks, index);
        crewPersonPost.textContent = data.crew[index].role;
        crewPersonName.textContent = data.crew[index].name;
        crewPersonBio.textContent = data.crew[index].bio;
        crewImage.src = data.crew[index].images.webp;
    })
})


// technology Page
const technologyNavLinks = document.querySelectorAll('.technology-nav-link');
const technologyTextContent = document.querySelectorAll('.technology-text-content');
const landScapeTechnologyImage = document.querySelector('.landscape-image');
const potraitTechnologyImage = document.querySelector('.portrait-image');

let currentActiveTechnologyLink = 0;


const updateTechnologyLink = () => {
    technologyNavLinks.forEach((technologyLink, index) => {
        if (currentActiveTechnologyLink === index) {
            technologyLink.classList.add('active-link');
            technologyTextContent[index].classList.add('current-technology-text');
        } else {
            technologyLink.classList.remove('active-link');
            technologyTextContent[index].classList.remove('current-technology-text');
        }
    })
}

const updateTechnologyImage = () => {
    if (currentActiveTechnologyLink === 0) {
        landScapeTechnologyImage.src = 'images/technology/image-launch-vehicle-landscape.jpg';
        potraitTechnologyImage.src = 'images/technology/image-launch-vehicle-portrait.jpg';
    } else if (currentActiveTechnologyLink === 1) {
        landScapeTechnologyImage.src = 'images/technology/image-spaceport-landscape.jpg';
        potraitTechnologyImage.src = 'images/technology/image-spaceport-portrait.jpg';
    } else {
        landScapeTechnologyImage.src = 'images/technology/image-space-capsule-landscape.jpg';
        potraitTechnologyImage.src = 'images/technology/image-space-capsule-portrait.jpg';
    }
}

technologyNavLinks.forEach((technologyLink, index) => {
    technologyLink.addEventListener('click', () => {
        currentActiveTechnologyLink = index;
        updateTechnologyLink();
        updateTechnologyImage();
    })
})



