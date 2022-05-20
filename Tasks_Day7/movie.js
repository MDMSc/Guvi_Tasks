class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movies) {
        let moviesPG = [];
        movies.forEach(element => {
            if(element.rating === "PG") {
                moviesPG.push(element);
            }
        });
        return moviesPG;
    }
}

const movie1 = new Movie("Casino Royale1", "Eon Productions1", "PG13");
const movie2 = new Movie("Casino Royale2", "Eon Productions2", "PG");
const movie3 = new Movie("Casino Royale3", "Eon Productions3", "PG13");
const movie4 = new Movie("Casino Royale4", "Eon Productions4", "PG");

let movies = [movie1, movie2, movie3, movie4];
let movie = new Movie(movies);
console.log(movie.getPG(movies));