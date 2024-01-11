import { carProp, filterProps } from "@/types";

const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '93e6716566mshbcab58f2841636dp193641jsna125a08bd0c5',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchCars(filterValue:filterProps) {
    const {manufacturer,model,fuel,year,limit}=filterValue
    const headers ={
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '93e6716566mshbcab58f2841636dp193641jsna125a08bd0c5',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }};
       try{ const response = await 
        fetch(`${url}?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, headers);
            
        const result = await response.json();
            return result;
        } catch (error) {
            console.error(error);
        }
        
}
 export function generateCarImageUrl(car:carProp,angle?:string) {
    const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  url.searchParams.append('zoomLevel', 'fullscreen');
  url.searchParams.append('angle', `${angle}`);
   console.log(url)
  return `${url}`;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
  export function updateSearchParam(type:string,value:string){
    const searchParams = new URLSearchParams(window.location.search)
  
        searchParams.set(type,value)
     const NewPathName=`${window.location.pathname}?${searchParams.toString()}`
     return NewPathName
  }