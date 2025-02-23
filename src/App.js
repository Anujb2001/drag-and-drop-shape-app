import React, {useState, useEffect} from "react";  
import './App.scss'

const App = () => {
    // consider initial shapes all are circle
    const initialData = [{index:1, type:"circle"}, {index:2, type:"circle"}]
    const [shapes, setShapes] = useState(initialData)
    // Created the list of four quadrant with shape type
    const shapeContainers = [
        {name:"Top Left", shapeType:"circle"},
        {name:"Top Right", shapeType:"hexagon"},
        {name:"Bottom Left", shapeType:"square"},
        {name:"Bottom Right", shapeType:"triangle"},
    ]
    

    return (
        <div>
            <h1> Drag and drop shape application</h1>
            {/* created the containers for holding all four quadrants */}
            <div className="container" >
                {shapeContainers.map(container => <div className={container.shapeType}> 
                  {container.name} 
                  {shapes.filter(s => s.type === container.shapeType).map((s)=>
                    // Render the shape item 
                    <div key={s.index}></div>
                )} 
                </div>)}
                
            </div>
        </div>
    )
}

export default App