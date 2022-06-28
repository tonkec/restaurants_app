export interface Restaurant {
    id: number;
    uid: string;
    name: string;
    type: string;
    description: string;
    review: string;
    logo: string;
    phone_number: string;
    address: string;
	hours: Record<Day, {
        opens_at: string;
        closes_at: string;
        is_closed: boolean;
    }>;
   
}

type Day = "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday" | "sunday";