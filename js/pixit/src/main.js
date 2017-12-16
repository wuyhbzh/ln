// https://www.codeandweb.com/physicseditor
import GameManager from './GameManager';
import * as View from './View';


global.gamer = new GameManager();

gamer.run(View.Fight);
