import { React, useState } from 'react';


// className={`darkmode ${isDark? "light": "dark"}`}



function darkMode(props) {
    const [isDark, toggleDark] = useState(false);

    function toggle() {
        console.log('The toggle is switched');
        toggleDark(!isDark);
    }
  
return (
<div>
    <button onClick={toggle}>Toggle Dark mode</button>
    <br/>
</div>
);
}

export default darkMode;