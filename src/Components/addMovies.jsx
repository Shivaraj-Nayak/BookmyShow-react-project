import { useState } from 'react';
import '../Styles/Addmovies.css'
import { useNavigate } from 'react-router-dom';
const AddMovies = () => {

    let [title, setTitle] = useState("")
    let [genre, setGenre] = useState("")
    let [language, setLanguage] = useState("")
    let [rating, setRating] = useState("")

    let navigate = useNavigate() // used to navigate between pages

    let handleSubmit = (e) => {

        e.preventDefault() // use to prevent reloding of the site(should pass any parameter in above call back function,eg here passing 'e').
        let data = { title, genre, rating, language }
        fetch("http://localhost:4010/movies", {
            method: 'POST',
            headers: { 'content-Type': 'application/json' },
            body: JSON.stringify(data) //used to convert the entered data to String

        })
        alert("Movie added successfully")

        navigate('/movies')
        
    }

    return (

        <div className="addMovies">

            <div className="add d-flex justify content center">

                <h1>Add Movies your favourite Movie  </h1>

                <div className="forms">

                    <form action="" onSubmit={handleSubmit}>


                        <div className="ttle">
                            <label htmlFor="">Title:</label>
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Title" />
                        </div>

                        <br />


                        <div className="genre">
                            <label htmlFor="">Genre:</label>
                            <input type="text" value={genre} onChange={(f) => setGenre(f.target.value)} placeholder="Enter the Genre" />
                        </div>

                        <br />
                        <div className="rating">
                            <label htmlFor="">Rating:</label>
                            <input type="text" value={rating} onChange={(g) => setRating(g.target.value)} placeholder="Enter Ratings" />
                        </div>
                        
                        <br />
                        <div className="lang">
                            <label htmlFor="">Langauage:</label>
                            <input type="text" value={language} onChange={(e) => setLanguage(e.target.value)} placeholder="Enter the Language" />
                        </div>

                        <br />
                        <div className="buttonn">
                            <button type="submit">Submit:</button>
                        </div>



                    </form>
                    <br />
                    <div className="imm">
                        <img height={"450px"} width={"380px"} src="/images/theater.webp" alt="" />
                    </div>



                </div>


            </div>

        </div>
    );
}

export default AddMovies;