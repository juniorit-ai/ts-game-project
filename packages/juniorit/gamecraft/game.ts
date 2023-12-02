import * as PIXI from 'pixi.js';
import Scene from './scene';
import { Event, Point } from './types';

export default class Game {
    private static _instance: Game | null = null;

    private app: PIXI.Application;
    private scenes: Scene[] = [];
    private currentScene: Scene | null = null;

    private constructor() {
        let width = 1280
        let height = 720
        this.app = new PIXI.Application({
            width,
            height,
            backgroundColor: 0x0,
            autoStart: true,
            sharedTicker: true
        });
    }

    public static instance(): Game {
        if (this._instance === null) {
            this._instance = new Game();
        }
        return this._instance;
    }

    public init(width: number, height: number, caption: string = "JuniorIT.AI Game Craft") {
        this.app.screen.width = width
        this.app.screen.height = height

        document.addEventListener('DOMContentLoaded', (event) => {
            document.body.style.overflow = 'hidden';
            document.body.style.margin = '0 auto';
            document.body.style.backgroundColor = 'black';
            document.body.appendChild(this.app.view);
            document.title = caption;
        });
        
        // Set ticker to 60 FPS
        this.app.ticker.maxFPS = 60;
    }

    public initializeEventListeners(pixiContainer: PIXI.Container): void {
        pixiContainer.interactive = true;

        pixiContainer.on('mousedown', this.handleMouseDown);
        pixiContainer.on('mouseup', this.handleMouseUp);
        pixiContainer.on('mousemove', this.handleMouseMove);
        pixiContainer.on('wheel', this.handleMouseWheel);

        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    public unInitializeEventListeners(pixiContainer: PIXI.Container): void {
        pixiContainer.interactive = false;

        pixiContainer.off('mousedown', this.handleMouseDown);
        pixiContainer.off('mouseup', this.handleMouseUp);
        pixiContainer.off('mousemove', this.handleMouseMove);
        pixiContainer.off('wheel', this.handleMouseWheel);

        window.removeEventListener('keydown', this.handleKeyDown);
        window.removeEventListener('keyup', this.handleKeyUp);
    }

    private handleMouseDown = (event: PIXI.InteractionEvent) => {
        this.onMouse(Event.MOUSEBUTTONDOWN, new Point(event.data.global.x, event.data.global.y));
    };

    private handleMouseUp = (event: PIXI.InteractionEvent) => {
        this.onMouse(Event.MOUSEBUTTONUP, new Point(event.data.global.x, event.data.global.y));
    };

    private handleMouseMove = (event: PIXI.InteractionEvent) => {
        this.onMouse(Event.MOUSEMOTION, new Point(event.data.global.x, event.data.global.y));
    };

    private handleMouseWheel = (event: WheelEvent) => {
        this.onMouse(Event.MOUSEWHEEL, new Point(event.pageX, event.pageY));
    };

    private keyToAscii(key: string): number {
        if (key.length === 1) {
            return key.charCodeAt(0);
        }
        // Handle special keys
        switch (key) {
            case 'Enter':
                return 13; // ASCII for carriage return
            case 'Escape':
                return 27; // ASCII for escape
            case 'Backspace':
                return 8;  // ASCII for backspace
            case 'Space':
                return 32; // ASCII for space
            case 'ArrowUp':
                return 38; // Assign a value for Arrow Up
            case 'ArrowDown':
                return 40; // Assign a value for Arrow Down
            case 'ArrowLeft':
                return 37; // Assign a value for Arrow Left
            case 'ArrowRight':
                return 39; // Assign a value for Arrow Right
            default:
                return 0; // No ASCII equivalent
        }
    }

    private handleKeyDown = (event: KeyboardEvent) => {
        this.onKeyboard(Event.KEYDOWN, this.keyToAscii(event.key));
    };

    private handleKeyUp = (event: KeyboardEvent) => {
        this.onKeyboard(Event.KEYUP, this.keyToAscii(event.key));
    };

    public addScene(scene: Scene): void {
        this.scenes.push(scene);
    }

    public removeScene(scene: Scene): void {
        const index = this.scenes.indexOf(scene);
        if (index !== -1) {
            this.scenes.splice(index, 1);
        }
    }

    public setCurrentScene(scene: Scene): void {
        if (this.currentScene) {
            this.unInitializeEventListeners(this.currentScene.getContainer())
            this.app.stage.removeChild(this.currentScene.getContainer());
        }
        this.currentScene = scene;
        this.initializeEventListeners(this.currentScene.getContainer())
        this.app.stage.addChild(scene.getContainer());
    }

    public run(): void {
        this.app.ticker.add((ticks) => this.update(ticks));
    }

    private update(ticks: number): void {
        if (this.currentScene) {
            this.currentScene.onUpdate(ticks);
        }
    }

    public onKeyboard(event: Event, keyCode: number): void {
        for (const scene of this.scenes) {
            scene.onKeyboard(event, keyCode);
        }
    }

    public onMouse(event: Event, point: Point): void {
        for (const scene of this.scenes) {
            scene.onMouse(event, point);
        }
    }

}

