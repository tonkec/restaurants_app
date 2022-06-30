import { RestaurantModel } from '../../models/Restaurant';
import RestaurantDate from '../Restaurants/RestaurantDate';
interface ModalProps {
    isModalShown: boolean;
    close: () => void;
    data: RestaurantModel;
}

const Modal = ({ isModalShown, close, data }: ModalProps) => {
    if (!isModalShown) {
        return null;
    }
    return (
        <div className="fixed top-1/2 -translate-y-1/2 left-0 right-0 max-w-sm mx-auto bg-orange text-white px-4 py-6 modal">
            <p className="cursor-pointer" onClick={close}>
                Close
            </p>
            <RestaurantDate restaurantDate={data.hours} />
            <h2 className="text-xl font-bold mb-6">{data.name}</h2>
            <img src={data.logo} alt="logo" width={500} height={500} />
            <p className="mt-4">{data.review}</p>
        </div>
    );
};

export default Modal;
