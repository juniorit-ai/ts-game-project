import { Scene, Sprite, Event, Point } from "@juniorit/gamecraft"

export default class FirstScene extends Scene {
    constructor() {
        super();

        const sprite = new Sprite("t-rex.png");
        this.addChild(sprite);
        
    }

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
