import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../stylesheets/details.css'

const Details = () => {
    const params = useParams()
    console.log(params)


    const [country, setCountry] = useState();


    useEffect(() => {
        fetchData();

    }, []);

    useEffect(() => {
        console.log(country);
    }, [country]);

    const fetchData = async () => {

        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountry(data[Number(params.index)]);
            console.log(country.currencies)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (

        <div className="country_wrapper">
            <Link to='/'>
                <button
                    className='back_btn'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m274-450 248 248-42 42-320-320 320-320 42 42-248 248h526v60H274Z" /></svg>
                    Back</button>
            </Link>
            {country ? <><img src={country.flags.png} alt={country.flags.alt} />
                <div className="country_data_wrapper">
                    <h2>{country.name.common}</h2>
                    <div className="country_data">
                        <p><span className='bold'>Native Name: </span>{country.name.nativeName.official}</p>
                        <p><span className='bold'>Population: </span>{country.population}</p>
                        <p><span className='bold'>Region: </span>{country.region}</p>
                        <p><span className='bold'>Subregion: </span>{country.subregion}</p>
                        <p><span className='bold'>Capital: </span>{country.capital}</p>
                        <p><span className='bold'>Top Level Domain: </span>{country.tld}</p>
                        <p><span className='bold'>Currencies: </span>{country.currencies[Object.keys(country.currencies)].name}</p>
                        <p><span className='bold'>Capital: </span>{country.capital}</p>
                        <p><span className='bold'>Languages: </span>{country.languages[Object.keys(country.languages)]}</p>
                    </div></div> </> : null}

        </div>
    )
}

export default Details