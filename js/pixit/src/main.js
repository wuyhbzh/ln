// https://www.codeandweb.com/physicseditor
import GameManager from './GameManager';
import * as views from './View';


global.gamer = new GameManager();


gamer.run(views.fight);
