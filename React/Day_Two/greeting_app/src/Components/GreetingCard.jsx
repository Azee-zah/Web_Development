function Greeting({name, message, color}) {
    return(
        <div style={{backgroundColor: color}}>
            <p>Hello, {name}</p>
            <p>{message}!</p>
        </div>
    )
}

export default Greeting