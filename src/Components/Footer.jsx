import '../Styles/Footer.css'
// import prime from  '/images/logo.svg'

// import p1 from '/images/fb1.png'
// import p2 from '/images/twitter.png'
// import p3 from '/images/youtube.png'
// import p4 from '/images/insta.png'
// import p5 from '/images/linkedin.png'

const Footer = () => {

    let logo=[
        {image:'/images/fb1.png'},
        {image:'/images/twitter.png'},
        {image:'/images/youtube.png'},
        {image:'/images/insta.png'},
        {image:'/images/linkedin.png'}
    ]

    return (
        <div className="footer">

            <div className="imgg">
                <img src={'/images/logo.svg'} alt="" />
            </div>

            <div className="linnks">
                <ul>
                    <li><a href="">Terms and Privacy Notice</a></li>
                    <li><a href="">Send us feedback</a></li>
                    <li><a href="">Help</a></li>
                </ul>
            </div>

            <div className="socialMedia">
                {
                    logo.map((x)=>(
                        <img width='45' src={x.image} alt="" />
                    ))
                }
            </div>

            <div className="copyright">
                <p>&copy; 1996 -2023, bookmyshow.com, Inc. or its affilates</p>
            </div>
        </div>
    );
}

export default Footer;