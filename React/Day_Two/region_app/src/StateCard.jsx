
import './StateCard.css'
function StateCard({state, capital, region, population}) {
    const regionColor = {
        "North" : "#8B4513",
        "South" : "#008751",
        "East" : "#FFD700",
        "West" : "#4169E1"
    }

    return (
        <div className="state-card" style={{backgroundColor: `${regionColor[region]}`}}>
            <p>{state} State</p>
            <p>Capital : {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
        </div>
    )

}

export default StateCard