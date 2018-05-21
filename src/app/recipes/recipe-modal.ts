export class Recipe {
    private recipeName: string;
    private imageUrl: string;
    private description: string;

    constructor (name: string, img: string, desc: string) {
        this.recipeName = name;
        this.description = desc;
        this.imageUrl = img;
    }
}