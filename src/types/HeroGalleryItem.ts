export type HeroGalleryItem = {
    id: number,
    src: string,
    alt: string,
    decoding?: "async" | "auto" | "sync" | undefined
};