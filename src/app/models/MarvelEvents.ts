import { ItemEvents } from "./ItemEvents";

export interface MarvelEvents {
    available: number;
    collectionURI: string;
    items: ItemEvents[];
    returned: number;
}