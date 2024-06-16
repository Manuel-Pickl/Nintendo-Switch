export class ActionData {
    constructor(name: string, image: string, action: () => any = () => {}) {
        this.name = name;
        this.image = image;
        this.action = action;
    }

    name: string;
    image: string;
    action: () => any;
}