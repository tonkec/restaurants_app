import moment from 'moment';
import { Day } from '../../models/Restaurant';

const RestaurantDate = ({ restaurantDate }: any) => {
    const curerntDate = new Date();
    const currentDay: Day = moment(curerntDate)
        .format('dddd')
        .toLowerCase() as Day;
    const currentHours = restaurantDate[currentDay];
    return (
        <p>
            {currentHours.opens_at} - {currentHours.closes_at} -{' '}
            {currentHours.is_closed ? 'closed' : 'open'}
        </p>
    );
};

export default RestaurantDate;
