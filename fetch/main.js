// async function get() {
//     return 1
// }

// console.log(get());

// async function getStars(id) {
//     const response = await fetch(`https://swapi.dev/api/films/${id}/`) 
//     console.log('ответ получен', response);
//     return response.json();
// }
// getStars()
// const movies = getStars(1).then((movie) => {
//     console.log(movie.title);
// })

// console.log('результат вызова функции', movies);



const axios = require('axios').default;

axios.get('https://fortnite-api.com/v2/cosmetics/br').then(response => {
    console.log(response.data);
}).catch(error => {console.error(error)})