import * as PIXI from 'pixi.js';
import { Event, Point } from './types';
import Sprite from './sprite'

export default class Scene {
    private pixiContainer: PIXI.Container;
    children: Sprite[];

    public constructor() {
        this.pixiContainer = new PIXI.Container();
        this.children = [];
    }

    public getContainer(): PIXI.Container {
        return this.pixiContainer;
    }

    public addChild(sprite: Sprite): void {
        this.children.push(sprite);
        this.pixiContainer.addChild(sprite.pixiSprite); 
    }

    public removeChild(sprite: Sprite): void {
        const index = this.children.indexOf(sprite);
        if (index > -1) {
            this.children.splice(index, 1);
            this.pixiContainer.removeChild(sprite.pixiSprite);
        }
    }

    public onUpdate(ticks: number): void {
        for (const sprite of this.children) {
            sprite.onUpdate(ticks);
        }
    }

    public onKeyboard(event: Event, keyCode: number): void { 
        for (const sprite of this.children) {
            sprite.onKeyboard(event, keyCode); 
        }
    }

    public onMouse(event: Event, point: Point): void { 
        for (const sprite of this.children) {
            sprite.onMouse(event, point);
        }
    }
}
