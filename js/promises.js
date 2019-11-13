"use strict";

function wait(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(resolve){
                console.log(`You will see this after ${num / 1000} second(s)`);
            }else if(reject){
                console.log("Error");
            }
        }, num);
    });
}

// let time = 1000;
// let request = wait(time);
// request.then();
//
// time = 5000;
// request = wait(time);
// request.then();

function getLastCommit(username){
    // let allRepos =[];
    // fetch(`https://api.github.com/users/${username}/repos`,{headers:{'Authorization': `token ${githubKey}`}})
    //     .then(response => response.json())
    //     .then(name => {
    //         name.forEach(repo => {
    //             //console.log(repo);
    //             //fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`,{headers:{'Authorization': `token ${githubKey}`}})
    //             fetch(`https://api.github.com/repos/${username}/${repo.name}/commits`,{headers:{'Authorization': `token ${githubKey}`}})
    //             //allRepos.push(repo.name)
    //                 .then(result => {
    //                     console.log(result)
    //                 })
    //                 .catch(error => console.log("Error: " + error));
    //         })
    //     })
    //     .then()
    //     .catch(error => console.log("Error: " + error));
    fetch(`https://api.github.com/users/${username}/events`,{headers:{'Authorization': `token ${githubKey}`}})
        .then(result => {
            result.json().then(data => {
                let pushEvents = data.filter(n => n.type = "PushEvent")
                console.log(pushEvents[0].created_at);
            });

        })
        .catch(error => console.log("Error: " + error));
}

getLastCommit("evaleriog");

const lastCommit = (username) => {
    fetch(`https://api.github.com/users/${username}/events`, {headers:{'Authorization': `token ${githubKey}`}})
        .then(response => response.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
}

lastCommit("evaleriog");