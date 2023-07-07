import React, { useEffect, useState } from 'react';
import CountryCard from './CountryCard';
import '../stylesheets/home.css'

const Home = () => {
    const [countries, setCountries] = useState([]);

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
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return <div>

        <main>
            <div className="countries_wrapper">
                {countries && countries.map((country, index) => (
                    <CountryCard
                        key={index}
                        name={country.name.common}
                        population={country.population}
                        capital={country.capital}
                        region={country.region}
                        flag={country.flags.png}
                        alt={country.flags.alt}

                    />
                ))}
            </div>
        </main>

    </div>;
};

export default Home;
