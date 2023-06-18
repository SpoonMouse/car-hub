
export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'd64f4f1f10msh99f215b540e8b70p12cbd6jsnd5010bfad7a4',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}