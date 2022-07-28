import CarList from '../components/CarList'
import { useContext } from 'react'
import CarForm from '../components/CarForm'
import { DataContext } from '../contexts/DataProvider'

export default function Inventory() {
    return (
        <>
            <h1>Inventory</h1>
            <CarForm />
            <CarList />
        </>
    )
}