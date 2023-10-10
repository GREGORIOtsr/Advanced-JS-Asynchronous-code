// 1.
function getAllBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
        .then(res=>res.json())
        .then(dogs=> {
            return Object.keys(dogs.message)
        })
}

// 2.
function getRandomDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
        .then(res=>res.json())
        .then(img=> {
            return img.message;
        })
}

// 3.
function getAllImagesByBreed() {
    return fetch('https://dog.ceo/api/breed/komondor/images')
        .then(res=>res.json())
        .then(images=> {
            return images.message;
        })
}

// 4.
function getAllImagesByBreed2(breed) {
    return fetch(`https://dog.ceo/api/breed/${breed}/images`)
        .then(res=>res.json())
        .then(images=> {
            return images.message;
        })
}

// 5.
function getGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(res=>res.json())
        .then(user=> {
            return user;
        })
}

// 6.
function printGithubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(res=>res.json())
        .then(profile=> {
            let img = profile.avatar_url;
            let name = profile.name;
            return {'name':name, 'img':img}
        })
}

// 7.
function getAndPrintGitHubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then(res=>res.json())
        .then(profile=> {
            let img = profile.avatar_url;
            let name = profile.name;
            let repos = profile.public_repos;
            return `<section>
            <img src="${img}" alt="${name}">
            <h1>${name}</h1>
            <p>Public repos: ${repos}</p>
        </section>`
        })
}

// 8.
/* let body = document.body;
let input = document.createElement('input');
body.appendChild(input);
input.type = 'text';
input.name = 'username';
let button = document.createElement('button');
button.innerHTML = 'Buscar'
button.setAttribute('onclick', 'getAndPrintGitHubUserProfile()');
body.appendChild(button);
function getAndPrintGitHubUserProfile() {
    username = document.querySelector('input').value;
    return fetch(`https://api.github.com/users/${username}`)
        .then(res=>res.json())
        .then(profile => {
            let login = profile.login;
            let url = profile.html_url;
            return body.innerHTML +=    `<a href=${url}>${login}<a> `
        })
} */

// 9.
function fetchGithubUsers(userNames) {
    let arr = userNames.map(user=> {
        return fetch(`https://api.github.com/users/${user}`)
            .then(res=>res.json())
            .then(username=> {
                console.log(username.name);
                return username;
        })
    })
    return Promise.all(arr);
}
