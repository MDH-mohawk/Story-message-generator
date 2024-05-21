
// These are simply the data arrays used to generate a random story message
const character = ["Man","Woman","Virgin","Bon Jovi","Jerry"];
const place = ["South Africa","L.A.","The Bedroom","The Studio","The tennis lane"];
const action = ["paint","hurt","knock","play","make","hear"," climb","jump"];
const subject = ["painting","wall","tower","ladies room"," microphone"];


//The function below creates a random number based on the value of "num" variable
const randomize = num => {
let rand = Math.floor(Math.random()*num);
return rand;
}

//picks out a character from the character array using the randomizer function
const char = () =>{
    return character[randomize(character.length)];
}

//picks out a place from the place array using the randomizer function
const place_choose = () =>{
    return place[randomize(place.length)];
}

//picks out an action from the action array using the randomizer function
const action_choose = ()=>{
    return action[randomize(action.length)];
}

//picks out a subject from the subject array using the randomizer function
const subject_choose = ()=>{
    return subject[randomize(subject.length)];
}

// The function below combines all functions outputs into one sentence
const combined = () =>{
    return char() + " will " + action_choose() + " the " + subject_choose() + " in " + place_choose();
}

console.log(combined());