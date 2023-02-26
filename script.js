const btnElement = document.getElementById("btn")
const jokeElement = document.getElementById("joke");


const apiKey = "hHaEOFdu9cg1ddOMin/wfA==WYAM3gFrKRW7EFFN";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


async function getJoke(){

    try {

        jokeElement.innerText = "Updating...";
        btnElement.disabled = true;
        btnElement.innerText = "LOADING..."

        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnElement.disabled = false;
        btnElement.innerText = "TELL ME A JOKE";
    
        jokeElement.innerText = data[0].joke;
    } catch (error) {

        jokeElement.innerText = "An Error Happened, Try Again Later.";
        btnElement.disabled = false;
        btnElement.innerText = "TELL ME A JOKE";
        console.log(error);
    }

}

btnElement.addEventListener("click", getJoke)    
