import React from "react";  
import './App.scss'

const App = () => {
    return (
        <div>
            <h1> Drag and drop shape application</h1>
            {/* created the containers for holding all four quadrants */}
            <div className="container" >
                <div>Top Left</div>
                <div>Top Right</div>
                <div>Bottom Left</div>
                <div>Bottom Right</div>
            </div>
        </div>
    )
}

export default App