// Exercise 1 - Closures
// Update the createAdder function below so that
// the below code works as intended

function createAdder(eight){
    function manip(num2){
        return eight + num2
    }
    return manip
};

const addEight = createAdder(8);
console.log('---------Eight---------')
console.log(addEight(10)); // 18
console.log(addEight(17)); // 25
console.log(addEight(50)); // 58
console.log(addEight(100)); // 108
console.log(addEight(92)); // 100

const addThree = createAdder(3);
console.log('---------Three---------')
console.log(addThree(10)); // 13
console.log(addThree(17)); // 20
console.log(addThree(50)); // 53
console.log(addThree(100)); // 103
console.log(addThree(92)); // 95


// Exercise 2 - Promises 
// Using either .then().catch() or Async/Await, create an asynchronous function that accepts 
// a movie title and then either displays the movie information or logs an error.

function getMovieInfo(movieName){
    return new Promise((resolve, reject) => {
        if (movieName.length > 5){
            let movie = {
                id: 123,
                title: movieName,
                // director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
}

function getMoiveId(movie_info){
    console.log("Getting movie ID")
    return new Promise((resolve, reject) => {
    id = movie_info['id']
    resolve(id)
    })
}

function getMovieDirector(movie_id){
    console.log("Getting Movie Director")
    return new Promise((resolve, reject) => {
        if (movie_id === 123){
            director = 'Christopher Spielberg'
        }
        resolve(director)

    })
}

function getMovieInfoFromName(movie){
    let movie_info = getMovieInfo(movie)
        .then(id => getMoiveId(id))
        .then(director => getMovieDirector(director))
        .then(() => console.log(`${movie} has an id of ${id}, and was directed by ${director}.`))
        .catch(err => console.error(err))
    // return movie_info
}

// console.log(getMovieInfoFromName("That One Movie We All Know"))
getMovieInfoFromName("That One Movie We All Know")
// getMovieInfoFromName("Tha")