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

// create persons array
const personsArray = [person1, person2, person3, person4, person5, person6];
console.log(personsArray);

// logs keys value
for (let i = 0; i < personsArray.length; i++) {
    const thisPerson = personsArray[i];
    // name to print
    const thisName = (thisPerson.name);
    // role to print
    const thisRole = (thisPerson.role);
    // url to print
    const thisUrl = (thisPerson.photoUrl);

    console.log(thisName);
    for (let j = 0; j < personWrappers.length; j++) {
        const thisPersonWrapper = personWrappers[j];
        
        thisPersonWrapper.innerHTML = thisName;

    }
    
}
