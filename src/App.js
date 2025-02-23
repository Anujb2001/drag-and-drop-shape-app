import React from "react";
import DragAndDrop from "./components/DragAndDrop";
import './App.scss'

const App = () => {

    const initialData = []
    for (let i=1 ; i <= 5; i++) {
        // add the initial data shape as [{index:1, type:"circle"}, {index:2, type:"circle"}....]
        initialData.push({index:i, type:"circle"})
    }    
    // Created the list of four quadrant with shape type
    const shapeContainers = [
        {name:"Top Left", shapeType:"circle"},
        {name:"Top Right", shapeType:"hexagon"},
        {name:"Bottom Left", shapeType:"square"},
        {name:"Bottom Right", shapeType:"triangle"},
    ]
    return (
        <>
            <h1> Drag and drop shape application</h1>
            <DragAndDrop initialData={initialData} shapeContainers={shapeContainers}/>
        </>
        
    )
}

export default App