const searchBtn = document.querySelector('.search-button');
const textInput = document.querySelector('.search');
const cardDisplay = document.querySelector('.wrapper-results');
const apiKey = `d8531486`;
let movieName = "";


searchBtn.addEventListener('click', (e) => {
    movieName = textInput.value;
    console.log(movieName);
    getMovie();

})


async function getMovie() {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;
    console.log(url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        // for (let i = 0; i < json.Search.length < 10; i++) {

        //     cardDisplay.innerHTML = `
        // <img src="${json.Search[i].Poster}"/>
        // <h1>${json.Search[i].Title}</h1>
        // <p>Year: ${json.Search[i].Year}</p>
        // <button class="see-more-btn">See more</button>
        // `;


        // }
        // const movieCard = document.createElement('div');
        // movieCard.className = 'wrapper-results';
        //
        //
        // const img = document.createElement('img');
        // img.className = 'movie-img';
        // movieCard.appendChild(img);
        //
        // const title = document.createElement('h1');
        // title.className = 'movie-name';
        // movieCard.appendChild(title);
        //
        //
        // const movieYear = document.createElement('p');
        // movieYear.className = 'movieYear';
        // movieCard.appendChild(movieYear);
        //
        //
        // const seeMoreBtn = document.createElement('button');
        // seeMoreBtn.className = 'see-more-btn';
        // seeMoreBtn.textContent = 'See More';
        // movieCard.appendChild(seeMoreBtn);


        if (movieName === "") {
            cardDisplay.innerHTML = `<h1>Enter movie name</h1>`
        }
        else {
            cardDisplay.innerHTML = `
            <img src="${json.Search[0].Poster}"/>
            <h1>${json.Search[0].Title}</h1>
            <p>Year: ${json.Search[0].Year}</p>
            <button class="see-more-btn">See more</button>
             `;
        }



        searchBtn.addEventListener('click', (e) => {
            cardDisplay.innerHTML = ``;
        })


        cardDisplay.style.display = 'flex';
        // cardDisplay.appendChild(movieCard);

    } catch (error) {

    }
}

