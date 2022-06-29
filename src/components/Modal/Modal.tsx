import { RestaurantModel } from '../../models/Restaurant';

interface ModalProps {
    isModalShown: boolean;
    close: () => void;
    data: RestaurantModel;
}

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    if (!props.isModalShown) {
        return null;
    }
    return (
        <div className="fixed top-1/2 -translate-y-1/2 left-0 right-0 max-w-sm mx-auto bg-orange text-white px-4 py-6 modal">
            <p className="cursor-pointer" onClick={props.close}>
                Close
            </p>
            <h2 className="text-xl font-bold mb-6">{props.data.name}</h2>
            <img src={props.data.logo} alt="logo" width={500} height={500} />
            <p className="mt-4">{props.data.review}</p>
        </div>
    );
};

export default Modal;
