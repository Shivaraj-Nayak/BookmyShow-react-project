const MovieaData = (props) => {


    // SINCE movies AND remove ARE UNDEFINED WE HAVE TO DEFINE USING PARENT COMPONENT

    let movies = props.data
    let remove = props.fn

    // let celeb = props.dataa


    return (



        <div className="MovieaData">

            <h1 style={{padding:"0px 64px"}} >{props.title}</h1>

            {(movies.length == 0) ? (<h1 style={{ textAlign: 'center' }}>😔 No Movies Present in your Favourite List</h1>) : (

                movies.map((data) => (



                    <div className="moviesData">

                        <h1>Title:{data.title}</h1>
                        <h2>Genre:{data.genre}</h2>
                        <h3>Rating:{data.rating} ⭐</h3>
                        <h3>Langauage:{data.language}</h3>

                        <button onClick={() => remove(data.id, data.title)}>Remove 👎</button>
                    </div>
                )))}



        </div>



    );
}

export default MovieaData;