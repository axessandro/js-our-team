// Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
// Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
// Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
// Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
// Scott Estrada	Developer	            scott-estrada-developer.jpg
// Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg

// wrappers
const personWrappers = document.getElementsByClassName("person")
const nameWrappers = document.getElementsByClassName("name-wrapper");
const roleWrappers = document.getElementsByClassName("role-wrapper");
const urlWrappers = document.getElementsByClassName("url-wrapper");
console.log(nameWrappers);

// create person objects
const person1 = {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    photoUrl: "wayne-barnett-founder-ceo.jpg"
}
const person2 = {
    name: "Angela Caroll",
    role: "Chief Editor",
    photoUrl: "angela-caroll-chief-editor.jpg"
}
const person3 = {
    name: "Walter Gordon",
    role: "Office Manager",
    photoUrl: "walter-gordon-office-manager.jpg"
}
const person4 = {
    name: "Angela Lopez",
    role: "Social Media Manager",
    photoUrl: "angela-lopez-social-media-manager.jpg"
}
const person5 = {
    name: "Scott Estrada",
    role: "Developer",
    photoUrl: "scott-estrada-developer.jpg"
}
const person6 = {
    name: "Barbara Ramos",
    role: "Graphic Designer",
    photoUrl: "barbara-ramos-graphic-designer.jpg"
}

// create arrays
const personsArray = [person1, person2, person3, person4, person5, person6];
let nameArray = [];
let roleArray = [];
let urlArray = [];


// push keys value in arrays
for (let i = 0; i < personsArray.length; i++) {
    const thisPerson = personsArray[i];

    // name to push
    const thisName = (thisPerson.name);
    nameArray.push(thisName)

    // role to push
    const thisRole = (thisPerson.role);
    roleArray.push(thisRole)

    // url to push
    const thisUrl = (thisPerson.photoUrl);
    urlArray.push(thisUrl)
}
console.log(nameArray);
console.log(roleArray);
console.log(urlArray);

for (let i = 0; i < 6; i++){
    const thisNameWrapper = nameWrappers[i];
    thisNameWrapper.innerHTML = nameArray[i];
    const thisRoleWrapper = roleWrappers[i];
    thisRoleWrapper.innerHTML = roleArray[i];
    const thisUrlWrapper = urlWrappers[i];
    thisUrlWrapper.innerHTML = `<img src="img/${urlArray[i]}" alt="">`;
}
