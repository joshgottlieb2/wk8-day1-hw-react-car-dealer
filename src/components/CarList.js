import { useEffect, useState, useContext } from 'react'
import Car from './Car'
import { DataContext } from '../contexts/DataProvider'

export default function CarList() {
    const { cars } = useContext(DataContext)

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

