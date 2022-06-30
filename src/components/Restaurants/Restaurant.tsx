import { MouseEventHandler } from 'react';

interface RestaurantProps {
    name: string;
    logo: string;
    type: string;
    description: string;
    onClick: MouseEventHandler;
}

const Restaurant = ({
    name,
    logo,
    type,
    description,
    onClick,
}: RestaurantProps) => {
    return (
        <div
            onClick={onClick}
            className="cursor-pointer mt-12 mb-12 border-2 border-black px-2 py-2 hover:bg-orange hover:text-white"
        >
            <h2 className="font-bold text-xl mb-4">
                {name} | {type}
            </h2>

            <p className="mb-4 line-clamp-5"> {description} </p>
            <img src={logo} alt="logo" width={150} height={150} />
        </div>
    );
};

export default Restaurant;
