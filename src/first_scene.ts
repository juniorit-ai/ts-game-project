import { Scene, Sprite, Event, Point } from "@juniorit/gamecraft"

/*
    The first scene of the game. 
    We will update this file to implement our game logic.
*/

export default class FirstScene extends Scene {
    constructor() {
        super();

        // The sprite image is located in the 'res' folder.
        const sprite = new Sprite("t-rex.png");
        this.addChild(sprite);

    }


    // The onUpdate method is called by the main game loop every frame, approximately 60 times per second in our game project.
    public onUpdate(ticks: number): void {
        super.onUpdate(ticks);

    }

    public onKeyboard(event: Event, keyCode: number): void {
        super.onKeyboard(event, keyCode);

    }

    public onMouse(event: Event, point: Point): void {
        super.onMouse(event, point);

    }
}
