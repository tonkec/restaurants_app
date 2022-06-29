import { getAllRestaurants } from '../../api/restaurants/restaurants';
import { useEffect, useState, useMemo } from 'react';
import Restaurant from './Restaurant';
import { RestaurantModel } from '../../models/Restaurant';
import Modal from '../Modal/Modal';
import _ from 'lodash';
import Select from 'react-select';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState<RestaurantModel[]>([]);
    const [isModalShown, setIsModalShown] = useState(false);
    const [modalData, setModalData] = useState<any | null>(null);
    const [selectedOption, setSelectedOption] = useState(null);
    const [filteredRestaurants, setFilteredRestaurants] = useState<
        RestaurantModel[]
    >([]);

    const restaurantsByType = useMemo(
        () => _.groupBy(restaurants, 'type'),
        [restaurants]
    );
    const allKeys = Object.keys(restaurantsByType);
    const options: any = [];
    allKeys.forEach(key => options.push({ value: key, label: key }));

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
        const filteredRestaurants = restaurants.filter(
            restaurant => restaurant.type === option.value
        );

        setFilteredRestaurants(filteredRestaurants);
    };

    const renderRestaurants = (restaurants: RestaurantModel[]) =>
        restaurants.map((restaurant: RestaurantModel) => (
            <Restaurant
                key={restaurant.uid}
                name={restaurant.name}
                logo={restaurant.logo}
                onClick={() => {
                    setModalData(restaurant);
                    setIsModalShown(true);
                }}
            />
        ));

    const handleClear = () => setFilteredRestaurants([]);
    return (
        <>
            <Select
                options={options}
                onChange={onSelectChange}
                defaultValue={selectedOption}
            />
            <button onClick={handleClear}>Clear Value</button>
            {filteredRestaurants.length > 0
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
