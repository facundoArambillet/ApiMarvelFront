import { MarvelComic } from "./MarvelComic";
import { MarvelEvents } from "./MarvelEvents";
import { MarvelSeries } from "./MarvelSeries";
import { MarvelStories } from "./MarvelStories";
import { MarvelThumbnail } from "./MarvelThumbnail";
import { MarvelUrls } from "./MarvelUrls";

export interface MarvelCharacter {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: MarvelThumbnail;
    resourceURI: string;
    comics: MarvelComic;
    series: MarvelSeries;
    stories: MarvelStories;
    events: MarvelEvents;
    urls: MarvelUrls[];
}
