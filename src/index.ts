/* 
   Import the tools we need to make our game
   Get the Game class from the "@juniorit/gamecraft" module
*/
import { Game } from "@juniorit/gamecraft";

// Import the starting scene from the local "./first_scene" module
import FirstScene from "./first_scene";


// Define constants for the game name, width, and height
const name = "JuniorIT GameCraft App";
const width = 1280;
const height = 512;

// Create an instance of the Game class (Create the game object)
const game = Game.instance();

// Initialize the game with the specified name, width, and height
game.init(name, width, height);

// Create the starting scene for our game
const scene = new FirstScene();

// Add the starting scene to the game
game.addScene(scene);

//  Set the current scene of the game to the starting scene and make the starting scene active
game.setCurrentScene(scene);

// Run the game, begin the game loop
game.run();
