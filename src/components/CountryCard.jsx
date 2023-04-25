export function CountryCard(props) {
	const { country } = props;
	return (
		<div className='card'>
			<h2>{country.name.common}</h2>
			<img src={country.flags.png} alt={country.name.common} />
			<p>Capital: {country.capital}</p>
			<p>Region: {country.region}</p>
			<p>Population: {country.population}</p>
		</div>
	);
}
