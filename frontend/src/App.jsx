import React from "react";
import GameCanvas from "./components/GameCanvas";


import "./styles/global.css";
import "./styles/TextMessage.css";
import "./styles/SceneTransition.css";
import "./styles/KeyboardMenu.css";
import "./styles/Hud.css";
import "./styles/TitleScreen.css";
import "./styles/Battle.css";
import "./styles/Combatant.css";
import "./styles/SubmissionMenu.css";
import "./styles/Team.css";
import "./styles/Menus.css";


const App = () => {
  return (
    <div>
      <GameCanvas />
    </div>
  );
};

export default App;
