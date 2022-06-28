import { MouseEventHandler } from 'react';

interface RestaurantProps {
    name: string;
    logo: string;
    onClick: MouseEventHandler;
}

const Restaurant: React.FC<RestaurantProps> = (props: RestaurantProps) => (
    <div onClick={props.onClick}>
        <h2> {props.name}</h2>
        <img src={props.logo} alt="logo" width={50} height={50} />
    </div>
);

export default Restaurant;
