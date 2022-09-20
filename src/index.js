// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));

import emojipedia from "./components/emojipedia";

const meanings = emojipedia.map(function(entry){
    return entry.meaning
})

console.log(meanings);