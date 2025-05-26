import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'


function Categories (){
    const [recepies, setRecepies] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setRecepies(data.meals))
    },[])


    return(
    <>
        <h1>categories</h1>
        {recepies.map(recepie => (
            <p><Link to="/Details">{recepie.strMeal}</Link></p>

        ))}
        
    </>
    )
}
export default Categories