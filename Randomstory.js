const character = ["Man","Woman","Virgin","Bon Jovi","Jerry"];
const place = ["South Africa","L.A.","The Bedroom","The Studio","The tennis lane"];
const action = ["paint","hurt","knock","play","make","hear"," climb","jump"];
const subject = ["painting","wall","tower","ladies room"," microphone"];


const randomize = num => {
let rand = Math.floor(Math.random()*num);
return rand;
}

const char = () =>{
    return character[randomize(character.length)];
}

const place_choose = () =>{
    return place[randomize(place.length)];
}

const action_choose = ()=>{
    return action[randomize(action.length)];
}

const subject_choose = ()=>{
    return subject[randomize(subject.length)];
}

const combined = () =>{
    return char() + " will " + action_choose() + " the " + subject_choose() + " in " + place_choose();
}

console.log(combined());