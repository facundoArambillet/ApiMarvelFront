import { ItemSeries } from "./ItemSeries";

export interface MarvelSeries {
    available: number;
    collectionURI: string;
    items: ItemSeries[];
    returned: number;
}
