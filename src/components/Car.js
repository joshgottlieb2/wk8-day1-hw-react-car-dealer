export default function Car(props) {
    console.log(props)

    return (
        <div className="card">
            <h2>{props.car.make}</h2>
            <p>{props.car.model}</p>
            <p>{props.car.year}</p>
            <p>{props.car.color}</p>
        </div>
    )
}