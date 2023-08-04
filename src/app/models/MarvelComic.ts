import { ItemComic } from "./ItemComic";

export interface MarvelComic {
    available: number;
    collectionURI: string;
    items: ItemComic[];
    returned: number;
}