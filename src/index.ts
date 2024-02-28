import { Game } from "@juniorit/gamecraft"
import FirstScene from "./first_scene"

const name = "JuniorIT GameCraft App"

const width = 1280
const height = 512

const game = Game.instance();
game.init(name, width, height);

const scene = new FirstScene();
game.addScene(scene);

game.setCurrentScene(scene);

game.run();

