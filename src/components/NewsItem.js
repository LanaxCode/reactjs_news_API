import { Link } from "react-router-dom";

const NewsItem = (props) => {
    return (
        <article className="article-sec">
            <img src={props.image}></img>
            <p>{props.title}</p>
            <p>{props.description}</p>
            <p>{props.title}</p>
            <Link to={`/${props.id}`} state={props.allarticles}>Read more</Link>
        </article>
    );
}

export default NewsItem;