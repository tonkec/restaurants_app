import { getAllRestaurants } from "../api/users/restaurants";
import {useEffect, useState} from "react";
import { Restaurant } from "../models/Restaurant";
const Restaurants = () => {
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    
    useEffect(() => {
       const getAllRestaurantsFromApi = async () => {
           const response = await getAllRestaurants();
           setRestaurants(response);
       }
       getAllRestaurantsFromApi();
    }, [setRestaurants]);
    return <>
        {restaurants.map((restaurant) => <div key={restaurant.uid}> {restaurant.name}</div>)}
    </>
}

export default Restaurants;