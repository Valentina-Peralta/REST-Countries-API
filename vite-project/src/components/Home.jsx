import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import '../stylesheets/home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        fetchData();

    }, []);

    useEffect(() => {
        console.log(countries[0]);
    }, [countries]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            setCountries(data);
            setFilteredCountries(data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('')


    useEffect(() => {
        setFilteredCountries(countries.filter((country) => country.region.toLowerCase() === selectedRegion.toLowerCase()))
    }, [selectedRegion])
    useEffect(() => {
        setFilteredCountries(countries.filter((country) => country.name.common.toLowerCase().includes(selectedCountry.toLowerCase())))
    }, [selectedCountry])
    return <div>

        <main>
            <nav>
                <form
                    onSubmit={() => {
                        console.log('submit')
                    }}
                    action="">
                    <input
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className='search_input'
                        type="text"
                        placeholder='Search for a country...' />
                    <select
                        id="regionFilter"
                        value={selectedRegion}
                        onChange={(e) => setSelectedRegion(e.target.value)}>
                        <option disabled selected hidden value="">Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </form>
            </nav>
            <div className="countries_wrapper">
                {filteredCountries && filteredCountries.map((country, index) => (
                    <Link
                        to={`/${index}`}
                        key={index}

                    >
                        <CountryCard
                            name={country.name.common}
                            population={country.population}
                            capital={country.capital}
                            region={country.region}
                            flag={country.flags.png}
                            alt={country.flags.alt}

                        />
                    </Link>
                ))}
            </div>
        </main>

    </div>;
};

export default Home;
