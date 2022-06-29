import { RestaurantModel } from '../../models/Restaurant';
import { createAxionsInstance } from '../apiHelper';

const axiosInstance = createAxionsInstance(
    'https://random-data-api.com/api/restaurant'
);

export const getAllRestaurants = async (): Promise<RestaurantModel[]> => {
    const response = await axiosInstance.get('/random_restaurant?size=30');
    return response.data;
};
