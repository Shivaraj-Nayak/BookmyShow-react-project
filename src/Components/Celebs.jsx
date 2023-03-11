const Celebs = (prob) => {

    let celeb=prob.dataa
    return ( 

        <div className="celebrity">


        {celeb.map((x) =>
        (<div className="cc">
            <img height={300} width={260} src={x.image} alt="" />
            <h1>{x.name}</h1>

        </div>)
        )}

    </div>
     );
}
 
export default Celebs;