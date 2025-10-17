function Hello() {
    let name = "Olamide Azeezat"
    let location = "Abeokuta, Nigeria"

    return(
        <div>
            <h1>This is {name}</h1>
            <p className="location">Current location: {location}</p>
            <p className="theBody">Hello, Welcome to my React Journey</p>
            
        </div>
    )
}

export default Hello