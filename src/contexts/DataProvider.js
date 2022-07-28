import { createContext, useState, useEffect, useContext } from "react"
import { getFirestore, getDoc, getDocs, collection, doc, addDoc, Timestamp, orderBy, query, collectionGroup } from '@firebase/firestore'
import { AuthContext } from "./AuthProvider"

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [cars, setCars] = useState([])
    const { user } = useContext(AuthContext)
    
    const db = getFirestore()

    useEffect(() => {
        const getCars = async () => {
            
            const collectionRef = collection(db, "Cars")
            const collectionSnap = await getDocs(collectionRef)

            let carsArr = []

            collectionSnap.forEach((docSnap) => {
                carsArr.push({
                    ...docSnap.data(),
                    id: docSnap.id
                })
            })

            console.log(carsArr)

            setCars(carsArr)
        }
        getCars()
    }, [])

    const getSingleCar = async (id) => {
        const docRef = doc(db, "Cars", id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            return {
                ...docSnap.data(),
                id: docSnap.id
            }
        } else {
            console.log("The document did not exist")
        }
    }

    const values = {
        cars,
        getSingleCar
    }

    return (
        <DataContext.Provider value={values}>
            {props.children}
        </DataContext.Provider>
    )
}