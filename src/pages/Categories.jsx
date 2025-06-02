import { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'


function Categories (){
    const [dessertRecepies, setDessertRecepies] = useState([])
    const [seafoodRecepies, setSeafoodRecepies] = useState([])
    const [vegetarianRecepies, setVegetarianRecepies] = useState([])
    const [pastaRecepies, setPastaRecepies] = useState([])

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert")
            .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
            .then(data => setDessertRecepies(data.meals.slice(0,10)))
        
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then(response => response.json())
            .then(data => setSeafoodRecepies(data.meals.slice(0,15)))    
            
        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian")
            .then(response => response.json())
            .then(data => setVegetarianRecepies(data.meals.slice(0,10)))

        fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta")
            .then(response => response.json())
            .then(data => setPastaRecepies(data.meals))

    },[])
    
    return(
    <>
    
        <h1>Categories</h1>
        <div className='categoriesBox'>
        
            <section>
            <h3 className="desserts">Desserts</h3>
                {dessertRecepies.map(recepie => (
                <p key={recepie.idMeal}><Link className="customLink" to={"/My-Recipe/Details/" + recepie.idMeal}>{recepie.strMeal}</Link></p>
            ))}
            </section>
            <section>
             <h3 className="seafood" >Seafood</h3>
                {seafoodRecepies.map(recepie => (
                <p key={recepie.idMeal}><Link className="customLink" to={"/My-Recipe/Details/" + recepie.idMeal}>{recepie.strMeal}</Link></p>
            ))}
            </section>
            <section>
                <h3 className="vegetarian">Vegetarian</h3>
                {vegetarianRecepies.map(recepie => (
                <p key={recepie.idMeal}><Link className="customLink" to={"/My-Recipe/Details/" + recepie.idMeal}>{recepie.strMeal}</Link></p> 
            ))}
            </section>
            <section>
                <h3 className="pasta">Pasta</h3>
                {pastaRecepies.map(recepie => (
                <p key={recepie.idMeal}><Link className="customLink" to={"/My-Recipe/Details/" + recepie.idMeal}>{recepie.strMeal}</Link></p> 
            ))}
            </section>
        </div>
    </>
    )
}
export default Categories