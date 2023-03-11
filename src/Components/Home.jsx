// import baner from '../images/bannner.avif'
// import i1 from '../images/gandhi.avif'
// import i2 from '../images/knock.avif'
// import i3 from '../images/kranthi.avif'
// import i4 from '../images/michael.avif'
// import i5 from '../images/pathaan.avif'
import './Home.css'
const Home = () => {

    // js code

    let data = [
        {
            // dont use 'i1' because it will consider as String  
            // use '' while using image links
            image: '/images/gandhi.avif'
        },
        {
            image: '/images/knock.avif'
        },
        {
            image: '/images/kranthi.avif'
        },
        {
            image: '/images/michael.avif'
        },
        {
            image: '/images/pathaan.avif'
        }
    ]

    return (

        <div className="Home">

            <div className="banner">
                <img style={{ width: '100%' }} src={'images/bannner.avif'} alt="" />

                <div className="posters">

                    <div className="title">
                        <h2>Recommended Movies</h2>
                        {/* USE &gt TO GRT > symbol */}
                        <a href="" style={{ textDecoration: "none" }}>See All &gt;</a>
                    </div>
                    <div className="images">

                        {/* <img src={i1} alt="" />
                        <img src={i2} alt="" />
                        <img src={i3} alt="" />
                        <img src={i4} alt="" />
                        <img src={i5} alt="" /> */}

                        {data.map( (x)=> ( <img src={x.image} alt="" /> ))}


                    </div>
                </div>

            </div>

        </div>

    );
}

export default Home;
