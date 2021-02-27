/*
    Here is the info we'll need to change for each coffee
    pic - image src
    alt - alt tag
    day - day of week
    name - name of coffee
    color - color
    desc - description
*/

let myDate = new Date();
let myDay = "";
let today= "";
let coffee = "";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if(urlParams.has('day')){//use querystring data
    myDay = urlParams.get('day');
}else{//use date object
    myDay = myDate.getDay();
}

myDay = parseInt(myDay);

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
    <p>
    <img src="${coffee.pic}" alt="${coffee.alt}" id="coffee">
   <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong>. ${coffee.desc}
</p>`;

    return myReturn;
}

switch(myDay){

    case 1:
            today = "Monday";
            coffee = {
                pic: "images/bubble-tea.jpg",
                alt: "A picture of Bubble Tea",
                day: "Monday",
                name: "Bubble Tea",
                color: "pink",
                desc: `I like me some BUBBA!`
            };
        break;

        case 2:
            today = "Tuesday";
            coffee = {
                pic: "images/caramel-latte.jpg",
                alt: "A picture of a Caramel Latte",
                day: "Tuesday",
                name: "Caramel Latte",
                color: "red",
                desc: `Sweet and tasty!`
            };
        break;

        case 3:
            today = "Wednesday";
            coffee = {
                pic: "images/drip.jpg",
                alt: "A picture of a Drip Coffee",
                day: "Wednesday",
                name: "Drip",
                color: "brown",
                desc: `Sometimes you just need the drip!`
            };
        break;

        case 4:
            today = "Thursday";
            coffee = {
                pic: "images/cold-brew.jpg",
                alt: "A picture of a cold-brew",
                day: "Thursday",
                name: "Cold Brew",
                color: "orange",
                desc: `Refreshing energy!`
            };
        break;

        case 5:
            today = "Friday";
            coffee = {
                pic: "images/frappaccino.jpg",
                alt: "A picture of a Frappuccino",
                day: "Friday",
                name: "Frappuccino",
                color: "purple",
                desc: `Treat yourself!`
            };
        break;

        case 6:
            today = "Saturday";
            coffee = {
                pic: "images/mocha.jpg",
                alt: "A picture of a Mocha",
                day: "Saturday",
                name: "Mocha",
                color: "blue",
                desc: `A mocha is always good!`
            };
        break;

        case 0:
            today = "Sunday";
            coffee = {
                pic: "images/pumpkin-spice-latte.jpg",
                alt: "A picture of a Pumpkin Spice Latte",
                day: "Sunday",
                name: "Pumpkin Spice Latte",
                color: "green",
                desc: `Fall Vibes!`
            };
        break;

}

console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;
//alert(today);
