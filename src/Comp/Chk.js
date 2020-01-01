import React, { useState, useContext} from 'react'

// export default function Chk() {

//     const [fruit, fnFruit] = useState('banana');
//     console.log('mystate', useState('hello'))

//     return (
//         <div>
//             <button onClick={ () => fnFruit('mydata')}>onclick</button>
//             <h5>{fruit}</h5>
//         </div>
//     )
// }


const themes = {
    light: {
      foreground: "#000000",
      background: "#eeeeee"
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222"
    }
  };
  
  const ThemeContext = React.createContext(themes.dark);
  
export default function Chk() {
    return (
      <ThemeContext.Provider value={themes.light}>
        <Toolbar />
      </ThemeContext.Provider>
    );
  }
  
  function Toolbar(props) {
    return (
      <div>
        <ThemedButton />
      </div>
    );
  }
  
  function ThemedButton() {
    const theme = useContext(ThemeContext);
  
    return (
      <button style={{ background: theme.background, color: theme.foreground }}>
        I am styled by theme context!
      </button>
    );
  }