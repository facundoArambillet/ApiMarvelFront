import { ItemStories } from "./ItemStories";

export interface MarvelStories {
    available: number;
    collectionURI: string;
    items: ItemStories[];
    returned: number;
}
