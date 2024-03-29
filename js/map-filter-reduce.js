"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at
// least 3 languages in the languages array.

const languagesThree = users.filter(user => user.languages.length >= 3);
console.log(languagesThree);

//Use .map to create an array of strings where each element is a user's email address
const usersEmails = users.map(user => user.email);
console.log(usersEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get the total
// of years you can use the result to calculate the average.

const yearsOfExperience = users.reduce(function (combineYears, user) {
    return combineYears + user.yearsOfExperience;
},0);

const average = yearsOfExperience / users.length;

console.log(`The average years of experience is ${average}`);

//Use .reduce to get the longest email from the list of users.


// const longestEmail = users.reduce(function (a,b) {
//     return a.email.length > b.email.length ? a : b;
// });
let longestIndex = users[0].email.length;

const longestEmail = users.reduce((longEmail, user, index, array) => {

    if(user.email.length >= longestIndex) {
        longEmail = user.email;
        longestIndex = user.email.length;
    }

     return longEmail;
},"");

console.log(longestEmail);
        //davids solution
// let longestEmail = usersEmails.reduce((longest, email) => {
//     if(email.length > longest.length){
//         return email;
//     }  else{
//         return longest;
//     }
// }, "");
//
// Use .reduce to get the list of user's names in a single string. ' +
// 'Example: Your instructors are: ryan, luis, zach, fernando, justin.

const allNames = users.reduce(function (names, user) {
    return names + `${user.name} `;
},"");

console.log(`Your instructors are: ${allNames.split(" ").join(", ")}.`);

//Bonus

const languages = Array.from(users.reduce((total, user) => {
   user.languages.forEach(function (language) {
       total.add(language);
});

    return total;
},new Set()));

console.log(languages);

