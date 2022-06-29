import { MouseEventHandler } from 'react';

interface RestaurantProps {
    name: string;
    logo: string;
    type: string;
    description: string;
    onClick: MouseEventHandler;
}

const Restaurant: React.FC<RestaurantProps> = (props: RestaurantProps) => (
    <div
        onClick={props.onClick}
        className="cursor-pointer mt-12 mb-12 border-2 border-black px-2 py-2 hover:bg-orange hover:text-white"
    >
        <h2 className="font-bold text-xl mb-4">
            {' '}
            {props.name} | {props.type}
        </h2>
        <p className="mb-4"> {props.description}</p>
        <img src={props.logo} alt="logo" width={150} height={150} />
    </div>
);

export default Restaurant;
