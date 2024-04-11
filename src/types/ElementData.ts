import { Id } from "./Id";

export class ElementData {
    constructor(id: Id, name: string, image: string) {
        this.id = id;
        this.name = name;
        this.image = image;
    }

    id: Id;
    name: string;
    image: string;
}