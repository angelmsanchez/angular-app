export interface RestaurantInterface {
    type: string;
    title: string;
    rate: number;
    rateStars?: number[];
    others?: string;
    location?: string;
}
