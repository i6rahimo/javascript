const searchTermElem = document.querySelector('#searchTerm')
const searchResultTermElem = document.querySelector('#searchResult')

searchTermElem.focus();

searchTermElem.addEventListener('input', function (event) {

})


const search = async (searchTerm) => {
    try {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${searchTerm}`;
        const response = await fetch(url);
        const searchResult = await response.json();


        console.log({
            'term': searchTerm,
            'result': searchResult.query.search
        });
    } catch (error) {
        console.log(error);
    }
}