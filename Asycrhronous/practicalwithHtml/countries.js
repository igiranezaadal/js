// import { fetchCountries } from "./countries.js";

// const searchBtn = document.getElementById("search-btn");
// const textInput = document.getElementById("text-input");

// fetch("https://countriesnow.space/api/v0.1/countries")
//   .then(response => response.json())
//   .then(result => console.log(result.data))
//   .catch(error => console.error('Error:', error));
let url = "https://countriesnow.space/api/v0.1/countries";
let container = document.querySelector('.conatiner')

fetch(url)
    .then(response=> {
        // console.log(response)
        if(!response.ok){
            throw new Error('network response was not ok')
        }
        return response.json()
    })
    .then(data=>{
        console.log(data);
        data.forEach(info =>{
            // console.log(info);
            container.innerHTML += `<div class="card">
                                        <span><b>ID</b> ${info.id}</span>
                                        <h3>${info.name}</h3>
                                        <p><b>UserName:</b> ${info.username}</p>
                                        <p><b>Gmail:</b> ${info.email}</p>
                                        <p><b>city:</b> ${info.adress.city}</p>
                                    </div>`
        })
    })
    // .catch(error=>{
    //     container.innerHTML= `<h3>${`Error`, error.message}</h3>`
    // })