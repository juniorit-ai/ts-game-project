import { Game } from "@juniorit/gamecraft"
import FirstScene from "./first_scene"

const game = Game.instance();
game.init(1280, 512);

const scene = new FirstScene();
game.addScene(scene);

game.setCurrentScene(scene);

game.run();

