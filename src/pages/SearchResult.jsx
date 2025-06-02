import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { Link } from 'react-router-dom'



function SearchResult (){
    const {searchWord} = useParams()

    const [results,setResults] = useState([])

    useEffect(() => {
            fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + searchWord)
                .then(response => response.json())
                // 4. Setting *dogImage* to the image url that we received from the response above
                .then(data => setResults(data.meals))
           
    
        },[])



    return (
        <>

        <h1>Results</h1>
        <section>
            {results && results.map(recepie => (
                <p key={recepie.idMeal}><Link to={"/My-Recipe/Details/" + recepie.idMeal}>{recepie.strMeal}</Link></p>
            ))}
            {!results && (<p>No recipes exists for "{searchWord}"</p>)}
        </section>
        </>
    )
}
export default SearchResult