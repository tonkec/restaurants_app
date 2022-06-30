import moment from 'moment';
import { Day, RestaurantModel } from '../../models/Restaurant';

const RestaurantDate = ({
    restaurantDate,
}: {
    restaurantDate: RestaurantModel['hours'];
}) => {
    const currentDate = new Date();
    const currentDay: Day = moment(currentDate)
        .format('dddd')
        .toLowerCase() as Day;
    const currentHours = restaurantDate[currentDay];
    const openningHours = currentHours.opens_at;
    const closingHours = currentHours.closes_at;
    const currentTime = moment(currentDate).format('LT');

    const isCurrentlyOpen = moment(currentTime, 'LT').isBetween(
        moment(openningHours, 'LT'),
        moment(closingHours, 'LT')
    );

    return (
        <p>
            {currentHours.opens_at} - {currentHours.closes_at} -{' '}
            {isCurrentlyOpen ? 'open' : 'closed'}
        </p>
    );
};

export default RestaurantDate;
