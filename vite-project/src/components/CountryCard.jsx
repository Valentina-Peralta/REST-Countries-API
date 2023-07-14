import '../stylesheets/countryCard.css'

const CountryCard = ({ name, population, region, capital, flag, alt, onClick }) => {
    return (
        <div
            onClick={onClick}
            className='country_card'>

            <img src={flag} alt={alt} />
            <div className="country_info">
                <h4>{name}</h4>
                <p><span className='bold'>Population:</span> {population}</p>
                <p><span className='bold'>Region:</span>  {region}</p>
                <p><span className='bold'>Capital:</span>  {capital}</p></div>
        </div>
    )
}

export default CountryCard