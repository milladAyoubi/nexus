

export async function fetchCars() {
    const headers = {
        'X-RapidAPI-Key': 'bcf9fa71f5msh41ed7dd71c7f465p1c8c87jsn98fc432c255c',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }
 

    
    const response = await fetch( 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars', {
        headers: headers,
    });

    const result = await response.json();
    return result;
}