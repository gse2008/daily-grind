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
   <strong id="coffee-highlight" class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong> ${coffee.desc}
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
                desc: `I like me some BUBBA.`
            };
        break;

        case 2:
            today = "Tuesday";
            coffee = {
                pic: "images/drip.jpg",
                alt: "A picture of a Drip Coffee",
                day: "Tuesday",
                name: "Drip",
                color: "brown",
                desc: `Sometimes you just need the drip.`
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
                desc: `Sometimes you just need the drip.`
            };
        break;

        case 4:
            today = "Thursday";
            coffee = {
                pic: "images/drip.jpg",
                alt: "A picture of a Drip Coffee",
                day: "Wednesday",
                name: "Drip",
                color: "brown",
                desc: `Sometimes you just need the drip.`
            };
        break;

        case 5:
            today = "Wednesday";
            coffee = {
                pic: "images/drip.jpg",
                alt: "A picture of a Drip Coffee",
                day: "Wednesday",
                name: "Drip",
                color: "brown",
                desc: `Sometimes you just need the drip.`
            };
        break;

        case 6:
            today = "Wednesday";
            coffee = {
                pic: "images/drip.jpg",
                alt: "A picture of a Drip Coffee",
                day: "Wednesday",
                name: "Drip",
                color: "brown",
                desc: `Sometimes you just need the drip.`
            };
        break;

        case 0:
            today = "Wednesday";
            coffee = {
                pic: "images/drip.jpg",
                alt: "A picture of a Drip Coffee",
                day: "Wednesday",
                name: "Drip",
                color: "brown",
                desc: `Sometimes you just need the drip.`
            };
        break;

}

console.log(coffee);

document.getElementById("coffee-output").innerHTML = coffeeTemplate(coffee);

document.getElementsByTagName("HTML")[0].style.backgroundColor = coffee.color;

document.getElementById("coffee-highlight").style.color = coffee.color;
//alert(today);
