export type HeroGalleryItem = {
    id: number,
    src: string,
    alt: string,
    class: "small" | "large",
    decoding?: "async" | "auto" | "sync";
};