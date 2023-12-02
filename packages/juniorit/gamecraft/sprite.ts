
import * as PIXI from 'pixi.js';
import { Rectangle } from 'pixi.js';
import { Event, Point, FlipMode, Rect } from './types'; 

export default class Sprite {

    public pixiSprite: PIXI.Sprite;
    private frames: Rectangle[];
    private flipMode: FlipMode = FlipMode.FLIP_NONE;

    public constructor(imagePath: string, frames: Rect[] = []) {
        const texture = PIXI.Texture.from("./assets/" + imagePath);
        this.pixiSprite = new PIXI.Sprite(texture);

        this.frames  = frames.map((frame=> {
            return new Rectangle(frame.x, frame.y, frame.w, frame.h)
        }))

    }

    public setPosition(top: number, left: number): void {
        this.pixiSprite.x = left;
        this.pixiSprite.y = top;
    }

    public setScale(scale: number): void {
        let actualScaleX = scale;
        let actualScaleY = scale

        switch (this.flipMode) {
            case FlipMode.FLIP_HORIZONTAL:
                actualScaleX *= -1;
                break;
            case FlipMode.FLIP_VERTICAL:
                actualScaleY *= -1;
                break;
            case FlipMode.FLIP_DIAGONAL:
                actualScaleX *= -1;
                actualScaleY *= -1;
                break;
        }

        this.pixiSprite.scale.set(actualScaleX, actualScaleY);
    }

    public setAngle(angle: number): void {
        this.pixiSprite.angle = angle;
    }

    public setCenter(center: Point): void {
        this.pixiSprite.anchor.x = center.x;
        this.pixiSprite.anchor.y = center.y;

    }

    public setFlip(flipMode: FlipMode): void {
        switch (flipMode) {
            case FlipMode.FLIP_NONE:
                this.pixiSprite.scale.x = Math.abs(this.pixiSprite.scale.x);
                this.pixiSprite.scale.y = Math.abs(this.pixiSprite.scale.y);
                break;
            case FlipMode.FLIP_HORIZONTAL:
                this.pixiSprite.scale.x = -1 *  Math.abs(this.pixiSprite.scale.x);
                this.pixiSprite.scale.y = Math.abs(this.pixiSprite.scale.y);;
                break;
            case FlipMode.FLIP_VERTICAL:
                this.pixiSprite.scale.x =  Math.abs(this.pixiSprite.scale.x);
                this.pixiSprite.scale.y = -1 *  Math.abs(this.pixiSprite.scale.y);
                break;
            case FlipMode.FLIP_DIAGONAL:
                this.pixiSprite.scale.x = -1 *  Math.abs(this.pixiSprite.scale.x);
                this.pixiSprite.scale.y *= -1 *  Math.abs(this.pixiSprite.scale.y);
                break;
        }
    }

    public setFrame(frameIndex: number): void {
        if (0 <= frameIndex && frameIndex < this.frames.length) {
            this.pixiSprite.texture.frame = this.frames[frameIndex];
        }
    }

    public onUpdate(ticks: number): void {

    }

    public  onKeyboard(event: Event, keyCode: number): void { 
       
    }

    public onMouse(event: Event, point: Point): void { 
       
    }
}
