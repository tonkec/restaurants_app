import { getAllRestaurants } from '../../api/restaurants/restaurants';
import { useEffect, useState } from 'react';
import Restaurant from './Restaurant';
import { RestaurantModel } from '../../models/Restaurant';
import Modal from '../Modal/Modal';
import Select from 'react-select';

interface Option {
    value: string;
    label: string;
}

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);
    const [isModalShown, setIsModalShown] = useState(false);
    const [modalData, setModalData] = useState<any | null>(null);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    const options: Option[] = [
        // unique array of restaurant types
        ...new Set(restaurants.map(restaurant => restaurant.type)),
    ].map(restaurantType => ({
        label: restaurantType,
        value: restaurantType,
    }));

    const filteredRestaurants =
        selectedOption !== null
            ? restaurants.filter(
                  restaurant => restaurant.type === selectedOption.value
              )
            : [];

    useEffect(() => {
        const getAllRestaurantsFromApi = async () => {
            const response = await getAllRestaurants();
            setRestaurants(response);
        };
        getAllRestaurantsFromApi();
    }, [setRestaurants]);

    const modalClose = () => setIsModalShown(false);

    const onSelectChange = (option: any) => {
        setSelectedOption(option);
    };

    const renderRestaurants = (restaurants: RestaurantModel[]) =>
        restaurants.map((restaurant: RestaurantModel) => (
            <Restaurant
                key={restaurant.uid}
                name={restaurant.name}
                logo={restaurant.logo}
                type={restaurant.type}
                description={restaurant.description}
                onClick={() => {
                    setModalData(restaurant);
                    setIsModalShown(true);
                }}
            />
        ));

    const handleClear = () => {
        setSelectedOption(null);
    };

    return (
        <>
            <Select
                options={options}
                onChange={onSelectChange}
                value={selectedOption}
            />
            <button
                onClick={handleClear}
                className="border-2 border-black inline-block px-4 py-2 mt-6 text-sm"
            >
                Reset selection
            </button>

            {selectedOption !== null
                ? renderRestaurants(filteredRestaurants)
                : renderRestaurants(restaurants)}

            <Modal
                isModalShown={isModalShown}
                data={modalData}
                close={modalClose}
            />
        </>
    );
};

export default Restaurants;
