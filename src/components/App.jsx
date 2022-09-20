import React from "react";
import Card from "./Card";
import emojipedia from "./emojipedia";

// function createCard(emoji) {
//     return (
//         <Card
//             key={emoji.id}
//             emoji={emoji.emoji}
//             name={emoji.name}
//             meaning={emoji.meaning}
//         />

//     );
// }


function App() {
    return(<div>
        <div>
            <h1><span>emojipedia</span></h1>
        </div>
        <div>
            {emojipedia.map(emojiTerm => (
                <Card
                    key={emojiTerm.id}
                    emoji={emojiTerm.emoji}
                    name={emojiTerm.name}
                    meaning={emojiTerm.meaning}
                />
            ))}
        </div>
    </div>      
    )
}

export default App;