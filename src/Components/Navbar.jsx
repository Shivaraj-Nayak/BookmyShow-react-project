import '../Styles/Navbar.css'

import { Link } from 'react-router-dom';

// import Logo from '../images/logo100.svg'
const Navbar = () => {

    return (
        <div className="navbar">

            <div className="logo">
                {/* <h1>Logo</h1> */}
                <img src={'/images/logo.svg'} alt="" />
            </div>

            <div className="links">
                <ul>
                    {/* <li> <a href="  ">Home</a></li> */}

                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/movies">Movies</Link></li>
                    <li> <Link to="/addMovies">Add Movies</Link></li>
                    <li> <button>Sign In</button> </li>
                </ul>
            </div>

        </div>
    );
}

export default Navbar;
