

let movies = [

    {
        name: "RRR",
        poster: "https://www.movieposters.com/cdn/shop/products/wandavision.mp_240x360_crop_center.progressive.jpg?v=1614371756",
        rating: 9.2
    },

    {
        name: "GAME CHANGER",
        poster: "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
        rating: 9.1
    },

    {
        name: "RANGASTHALAM",
        poster: "https://www.movieposters.com/cdn/shop/products/ed4796ac6feff9d2a6115406f964c928_6b200bda-fe71-4900-ad7f-903cdda50dab_240x360_crop_center.progressive.jpg?v=1573587596",
        rating: 8
    },

    {
        name: "YEVADU",
        poster: "https://s.yimg.com/ny/api/res/1.2/E.FAGqX4jrO1ua6AzsZxVg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTk0OA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/891b4e126673e49ec8bcc10e43f39287",
        rating: 8.4
    },

    {
        name: "NAYAK",
        poster: "https://i2.wp.com/www.instantshift.com/assets/uploads/2008/12/cmp-01.jpg",
        rating: 9.5
    },

    {
        name: "ORANGE",
        poster: "https://cdn.cinematerial.com/p/297x/3edzwhfn/fast-x-movie-poster-md.jpg?v=1678807508",
        rating: 9.4
    },

    {
        name: "MAGHADHEERA",
        poster: "https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145",
        rating: 10
    },

    {
        name: "racha",
        poster: "https://cdn.cinematerial.com/p/297x/nlvsyuid/uncharted-british-movie-poster-md.jpg?v=1645370145",
        rating: 10
    },
];



// function searchMovie() {
//     // console.log("hello waste");

//     let movieName = document.getElementById("search").value;
//     console.log(movieName);
//     // document.write(movieName);
// }

function displayMovies() {

    let htmlString = ` `;

    for(let i=0;i<movies.length;i++)
    {
        htmlString=htmlString+`
        <div class="movie">
        <div class="overlay">
        <div class="video"> </div>
        
        <div class="details">
        <h1>${movies[i].name}</h1>
        <h2>${movies[i].rating}</h2>
        <P>Ramcharabn Aliabhat</P>
        </div> </div>
        <img src="${movies[i].poster}" alt="poster">
        </div>
        `}

    console.log(htmlString);
    
    document.getElementById('movies').innerHTML = htmlString;

}

displayMovies();


// let movieDIV = document.createElement("div");

// movieDIV.classList.add('movie');

// let overlayDIV = document.createElement("div");

// overlayDIV.classList.add('overlay');
// // console.log(overlay);

// movieDIV.appendChild(overlayDIV);

// console.log(movieDIV);