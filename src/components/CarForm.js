
export default function CarForm() {

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const data = Object.fromEntries(formData)
        console.log(data.name)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="" />
            </div>
            <div className="form-group">
                <label htmlFor="year">Year</label>
                <input type="text" name="year" id="" />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="text" name="price" id="" />
            </div>
            <button type="submit">Add Car</button>
        </form>
    )
}