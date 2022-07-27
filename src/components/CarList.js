import { useEffect, useState } from 'react'
import Car from './Car'

export default function InventoryList() {
    const [cars, setCars] = useState([])

    useEffect(() => {

        fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
            .then((res) => res.json())
            .then((data) => setCars(data))
    }, [])

    return (
        <>
            {/* { 
                posts.map(post => {
                    return (
                        <div className="card">
                            <h2>{ post.title }</h2>
                            <p>{ post.text }</p>
                        </div>
                    )
                }) 
            } */}
            {
                cars.map(car => <Car car={car} key={car.id} />)
            }
        </>
    )
}



// import { useState } from 'react'
// import Car from './Car'

// export default function CarList() {
//     const [cars, setcars] = useState([
//         {
//             id: 0,
//             make: "Honda",
//             model: "Civic",
//             year: 2020,
//             color: "blue"
//         },
//         {
//             id: 1,
//             make: "Honda",
//             model: "Accord",
//             year: 2018,
//             color: "black"
//         },
//         {
//             id: 2,
//             make: "Toyota",
//             model: "Camry",
//             year: 2015,
//             color: "silver"
//         }
//     ])

//     return (
//         <>
//             {/* { 
//                 posts.map(post => {
//                     return (
//                         <div className="card">
//                             <h2>{ post.title }</h2>
//                             <p>{ post.text }</p>
//                         </div>
//                     )
//                 }) 
//             } */}


//             {
//                 cars.map(car => <Car car={car} key={car.id} />)
//             }
//         </>
//     )
// }