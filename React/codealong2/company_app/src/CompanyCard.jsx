import './CompanyCard.css'

function CompanyCard({ name, industry, location, employees, logo, featured }) {
    return (
        <div className={`company-card ${featured? 'featured' : 'unfeatured'}`}>
            <img src={logo} alt={`${name} logo`} className="company-logo"/>
            <h2>{name}</h2>
            <p className="industry">{industry}</p>
            <div className="company-info">
                <span>📍{location}</span>
                <span> 👥{employees}</span>
            </div>
            <div>
                {featured && <div className="badge">Featured</div>}
            </div>
        </div>
    )

}

export default CompanyCard