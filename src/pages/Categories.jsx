import { useState } from 'react'
import { Link } from 'react-router-dom'


const initialRecepies = [
    {
        idMeal: 100 ,
        strMeal: "spagity",
        strInstructions: `
        the first step is to buy a good italian pasta:
        you also need fresh tomatoes`,

        strMealThumb:"https://static01.nyt.com/images/2025/01/17/multimedia/CR-Lemony-Hummus-Pasta-wtkj/CR-Lemony-Hummus-Pasta-wtkj-threeByTwoMediumAt2X.jpg",
        strArea: "Italy",
        strCategory:"pasta"
    },
    {
        idMeal: 101 ,
        strMeal: "Soshi",
        strInstructions: `
        Salmen is the most popular Soshi fish:
        the rice is also important`,
        strMealThumb:"https://www.bizben.com/pictures/2922241.jpg?ver=1746158400",
        strArea:"Japan",
        strCategory:"seafood"

    }
]

function Categories (){
         const [recepies, setRecepies] = useState(initialRecepies)
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