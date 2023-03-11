import { useState, useEffect } from "react";
import '../Styles/movies.css'
// import yashh from '../images/yash.webp'
// import dqq from '../images/dq.jpg'
// import har from '../images/harsh.jpg'
// import mur from '../images/murphy.webp'
import MovieaData from "./MoviesData";
import Celebs from "./Celebs";

const Movies = () => {


    // let cele = [
    //     {
    //         image: yashh,
    //         name: "Rocking Star"
    //     },
    //     {
    //         image: dqq,
    //         name: "Dulquer Salmaan"
    //     },
    //     {
    //         image: har,
    //         name: "Harshvardhan Rane"
    //     },
    //     {
    //         image: mur,
    //         name: "Cillian Murphy"
    //     }
    // ]
    // let [celeb, setCeleb] = useState(cele)

    let [celeb, setCeleb] = useState([])


    let [movies, setMovies] = useState([])

    useEffect(() => {

        let fetchData = async () => {
            let response = await fetch("http://localhost:4010/movies")

            let response2 = await fetch("http://localhost:4010/celeb")

            let data = await response.json()

            let data1 = await response2.json()

            setMovies(data)

            setCeleb(data1)
        }
        fetchData()
    }, [])

    let remove = (id, title) => {
        let result = movies.filter(x => x.id !== id)
        setMovies(result)
        alert(`${title} has been removed from Favourites`)
    }

    return (
        <div className="movies">

            <div className="title">
                <h1>Favourite Movies and TV Shows</h1>

            </div>
            <div className="underline"></div>

            {/* WE ARE USING PROBES CONCEPT */}

            <MovieaData data={movies} fn={remove} />
            <MovieaData data={movies.filter(x => x.rating > 4.5)} fn={remove} title={"Top Rated Movies"} />
            <MovieaData data={movies.filter(x => x.language === "English")} fn={remove} title={"English Movies"} />




            {/* {(movies.length == 0) ? (<h1 style={{ textAlign: 'center' }}>😔 No Movies Present in your Favourite List</h1>) : (
                movies.map((data) => (
                    <div className="moviesData">
                        <h1>Title:{data.title}</h1>
                        <h2>Genre:{data.genre}</h2>
                        <h3>Rating:{data.rating} ⭐</h3>
                        <h3>Langauage:{data.language}</h3>

                        <button onClick={() => remove(data.id, data.title)}>Remove 👎</button>
                    </div>
                )))} */}


            <div className="title">
                <h1>Top Celebrities </h1>

            </div>
            <div className="underline"></div>

            <Celebs dataa={celeb} />

        </div>
    );
}

export default Movies;