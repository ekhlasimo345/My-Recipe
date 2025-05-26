import { useState } from 'react'


 const initialRecepi = {
        idMeal: 100 ,
        strMeal: "spagity",
        strInstructions: `
        the first step is to buy a good italian pasta:
        you also need fresh tomatoes`,

        strMealThumb:"https://static01.nyt.com/images/2025/01/17/multimedia/CR-Lemony-Hummus-Pasta-wtkj/CR-Lemony-Hummus-Pasta-wtkj-threeByTwoMediumAt2X.jpg",
        strArea: "Italy",
        strCategory:"pasta"
    }

function Details (){
     const [recepie, setRecepie] = useState(initialRecepi)
    return(
        <>

        <h2>Home</h2>
        <div className='recepiBox'>
            <img src={recepie.strMealThumb}></img>
                <p>{recepie.strMeal}</p>

        </div>
        </>  
    )
}
export default Details