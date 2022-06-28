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
        <>
            <p onClick={props.close}>Close</p>
            <div>Modal {props.data.name}</div>
        </>
    );
};

export default Modal;
