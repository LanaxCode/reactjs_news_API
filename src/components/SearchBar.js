import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const SearchBar = () => {

    const [input, setInput] = useState("");
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState(false)
    const [language, setLanguage] = useState([]);

    useEffect(() => {
        if (input) {
            fetch(`https://newsapi.org/v2/everything?q=${input}&language=${language}&apiKey=712ef00549134bfc8376f20f42b38676`
            )
                .then(res => res.json())
                .then(json => {
                    setArticles(json.articles)
                })
        }
    }, [search])

    return (
        <section >
            <article className="searchbar">
                <form action="" >
                    <div>
                        <input type="text" placeholder="Type to search..." value={input} className="input_field" onChange={(event) => setInput(event.target.value)} />
                        <input type="button" value="Search" onClick={() => setSearch(!search)} className="searchbar" />
                        <select name="languages" className="languages" onChange={(event) => setLanguage(event.target.value)}>
                            <option value="">Select your language</option>
                            <option value="de">German</option>
                            <option value="en">Englisch</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                        </select>
                    </div>
                </form>
            </article>
            {articles.map((elt, i) => {
                return (
                    <NewsItem
                        key={i}
                        image={elt.urlToImage}
                        title={elt.title}
                        description={elt.description}
                        id={i}
                        allarticles={elt}
                    />
                )
            })}
        </section >
    );
}

export default SearchBar;
