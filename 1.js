class Movie {
    constructor(title,studio,rating="PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movies) {
        let arr = []; 

        for(let i=o;i < movies.length;i++){
            if(movies[i].rating === "PG") {
                arr.push({
                    title: movies[i].title,
                    studio: movies[i].studio,
                    rating: movies[i].rating,
                });
            }
        }
        return arr
    } 
}
const CasinoRoyal = new Movie("Casino Royale","Eon productions","PG13");

const moviesArray = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG13"),
    new Movie("Movie 4", "Studio 4", "PG"),
];

const pgMoviesArray = Movie.getPG(moviesArray);

console.log('Title: ${casinoRoyale.title}');
console.log('Studio: ${casinoRoyale.studio}');
console.log('Rating: ${casinoRoyale.rating}');
console.log();
console.log("movies with rating 'PG':");
for(let i = 0; i < pgMoviesArray.length; i++){
    console.log('Title:${pgMoviesArray[i].title}, Studio:${pgMoviesArray[i].studio}, Rating:${pgMoviesArray[i].rating}')
}  


