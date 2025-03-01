import React, { useEffect } from "react";
import "../styles/global.css";

// Import all game scripts

import "../scripts/utils";
import "../scripts/DirectionInput";
import "../scripts/Overworld";
import "../scripts/GameObject";
import "../scripts/Person";
import "../scripts/PizzaStone";
import "../scripts/Sprite";
import "../scripts/OverworldMap";
import "../scripts/OverworldEvent";
import "../scripts/TextMessage";
import "../scripts/KeyPressListener";
import "../scripts/RevealingText";
import "../scripts/SceneTransition";
import "../scripts/KeyboardMenu";
import "../scripts/Hud";
import "../scripts/PauseMenu";
import "../scripts/CraftingMenu";
import "../scripts/Progress";
import "../scripts/TitleScreen";
import "../scripts/init";

const GameCanvas = () => {
  useEffect(() => {
    // Run the game initialization script
    import("../scripts/init").then((module) => {
      module.default(); // Call the init function if it's exported as default
    });
  }, []);

  return (
    <div className="game-container">
      <canvas className="game-canvas" width="352" height="198"></canvas>
      <p className="how-to-play">Use Arrow Keys to move. Enter to prompt/talk.</p>
    </div>
  );
};

export default GameCanvas;
