import { Link, useLocation } from "react-router-dom";

const NewsDetails = () => {

    const location = useLocation()
    console.log(location)

    return (
        <section>
            <p><Link to={`/`}>Go Back</Link></p>
            <img src={location.state.urlToImage} alt="" />
            {/* <h1> {location.state.title}
            </h1>
            <h2> {location.state.description}</h2>
            <p>{location.state.author}</p>
            <p>{location.state.content}</p> */}
        </section>
    );
}

export default NewsDetails;