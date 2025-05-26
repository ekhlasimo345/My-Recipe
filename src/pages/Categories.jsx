import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'


function Categories (){
    const [dessertRecepies, setDessertRecepies] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setDessertRecepies(data.meals.slice(0,10)))
    },[])


    return(
    <>
        <h1>categories</h1>
        <section>
        <h3>Desserts</h3>
            {dessertRecepies.map(recepie => (
            <p><Link to={"/Details/" + recepie.idMeal}>{recepie.strMeal}</Link></p>
        ))}
        </section>
        <section>
            
        </section>
        
        
    </>
    )
}
export default Categories