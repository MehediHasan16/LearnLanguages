const searchResult = () => {
    const inputField = document.getElementById("input-field");
    const inputFieldText = inputField.value;





    inputField.value = '';
    const url = `https://openlibrary.org/search.json?q=${inputFieldText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayLoad(data.docs));

}
const displayLoad = datas => {


    // search resultNumber
    const resultNumber = document.getElementById("result-number");
    resultNumber.innerHTML = ` <h2>search result: ${datas.length}</h2>`

    // search result details
    const resultDetails = document.getElementById("result-details");
    resultDetails.textContent = '';
    datas.forEach(data => {

        const div = document.createElement('div')

        div.classList.add('col')
        div.innerHTML = `
        <div id="inner-shadow" class="card h-100 shadow-lg">
        <img src=" https://covers.openlibrary.org/b/id/${data.cover_i}-M.jpg" class="card-img-top  p-5" alt="...">
        <div class="card-body">
            <h5 class="card-title">${data.title}</h5>
            <p class="card-text">Author Name: ${data.author_name[0]}<p>
            <p class="card-text">Publisher : ${data.publisher[0]}<p>
            <p class="card-text">Publish_Year : ${data.publish_year[0]}<p>
        </div>
    </div>
        `;

        resultDetails.appendChild(div);

    });



};