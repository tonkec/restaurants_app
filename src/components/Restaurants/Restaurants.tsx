import { getAllRestaurants } from '../../api/restaurants/restaurants';
import { useEffect, useState } from 'react';
import Restaurant from './Restaurant';
import { RestaurantModel } from '../../models/Restaurant';
import Modal from '../Modal/Modal';
const Restaurants = () => {
    const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);
    const [isModalShown, setIsModalShown] = useState(false);
    const [modalData, setModalData] = useState<any | null>(null);

    useEffect(() => {
        const getAllRestaurantsFromApi = async () => {
            const response = await getAllRestaurants();
            setRestaurants(response);
        };
        getAllRestaurantsFromApi();
    }, [setRestaurants]);

    const modalClose = () => setIsModalShown(false);

    return (
        <>
            {restaurants.map(restaurant => (
                <Restaurant
                    key={restaurant.uid}
                    name={restaurant.name}
                    logo={restaurant.logo}
                    onClick={() => {
                        setModalData(restaurant);
                        setIsModalShown(true);
                    }}
                />
            ))}

            <Modal
                isModalShown={isModalShown}
                data={modalData}
                close={modalClose}
            />
        </>
    );
};

export default Restaurants;
