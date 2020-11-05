import React from "react";
import NavigationBar from './NavBar'
import Router from './router/router'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavigationBar/>
            </header>
            <div className="content">
                <Router/>
            </div>

        </div>
    );
}

export default App;
