import { Link } from 'react-router-dom'

export default function Car(props) {

    function buildHeader() {
        let resHeader;

        if (!props.hideLink) {
            resHeader = (
                <Link to={"/inventory/" + props.car.id}>
                    {props.car.id+1}: {props.car.name}
                </Link>
            )
        } else {
            resHeader = (
                <>{props.car.id + 1}: {props.car.name}</>
            )
        }

        return resHeader
    }

    return (
        <div className="card card-item">
            <h2>
                {buildHeader()}
            </h2>
            <p>{props.car.name}</p>
            <p>Year: {props.car.year}</p>
            <p>Price: ${props.car.selling_price}</p>
        </div>
    )
}


// export default function Car(props) {
//     console.log(props)

//     return (
//         <div className="card">
//             <h2>{props.car.make}</h2>
//             <p>{props.car.model}</p>
//             <p>{props.car.year}</p>
//             <p>{props.car.color}</p>
//         </div>
//     )
// }