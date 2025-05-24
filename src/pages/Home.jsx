import { useState } from 'react'
const initialRecepies = [
    {
        name: "Pasta",
        description: `
        the first step is to buy a good italian pasta:
        you also need fresh tomatoes`,
        price: 20.50,
        pictureUrl:"https://static01.nyt.com/images/2025/01/17/multimedia/CR-Lemony-Hummus-Pasta-wtkj/CR-Lemony-Hummus-Pasta-wtkj-threeByTwoMediumAt2X.jpg",
        originCountry:"Italy"
    },
    {
      name: "Soshi",
        description: `
        Salmen is the most popular Soshi fish:
        the rice is also important`,
        price: 25.50,  
        pictureUrl:"https://www.bizben.com/pictures/2922241.jpg?ver=1746158400",
        originCountry:"Japan"
    }
]
function Home (){
     const [recepies, setRecepies] = useState(initialRecepies)
    return(
        <>

        <h2>Home</h2>
        {recepies.map(recepi => (
            <div className='recepiBox'>
                <img src={recepi.pictureUrl}></img>
                <p>{recepi.name}</p>

            </div>
        ))}
        </>  
    )
}
export default Home