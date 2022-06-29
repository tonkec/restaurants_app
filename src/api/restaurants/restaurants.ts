import axios from 'axios';

export const getAllRestaurants = async () => {
    const response = await axios.get(
        'https://random-data-api.com/api/restaurant/random_restaurant?size=30'
    );
    return response.data;
};
