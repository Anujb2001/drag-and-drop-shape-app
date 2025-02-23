import React, {useState} from "react";  
import './App.scss'

const App = () => {
    // consider initial shapes all are circle
    const initialData = []
    for (let i=1 ; i <= 5; i++) {
        // add the initial data shape as [{index:1, type:"circle"}, {index:2, type:"circle"}....]
        initialData.push({index:i, type:"circle"})
    }
    // created the shapes state for holding the all five shapes 
    const [shapes, setShapes] = useState(initialData)
    // to hold the index of the drag shape
    const [dragItemIdex, setDragItemIndex] = useState(-1)

    // Created the list of four quadrant with shape type
    const shapeContainers = [
        {name:"Top Left", shapeType:"circle"},
        {name:"Top Right", shapeType:"hexagon"},
        {name:"Bottom Left", shapeType:"square"},
        {name:"Bottom Right", shapeType:"triangle"},
    ]

    // handle the dragging start and hold the drag item index
    const handleDragStart = (e, index) => {
        setDragItemIndex(index);
    }

    // handle the drop, here getting the target shape where the item get drop
    const handleDrop = (e, targetShape) => {
        // create the newShapes array by updating the shape index
        const newShapes= shapes.map((item) => {
            if (item.index === dragItemIdex ){
                item.type = targetShape
            }
            return item
        })
        setShapes(newShapes)
    }
    

    return (
        <div>
            <h1> Drag and drop shape application</h1>
            {/* created the containers for holding all four quadrants */}
                <div className="container" >
                    {
                    shapeContainers.map((container, index) => {
                        return(
                            // add the on drop even 
                            <div 
                                key = {index} 
                                className={container.shapeType}
                                onDrop={(e) => handleDrop(e, container.shapeType)}
                                onDragOver={(e) => e.preventDefault()} 
                            > 
                            {container.name} {container.shapeType} 
                            {shapes.filter(s => s.type === container.shapeType).map((s)=>
                                // Render the shape item 
                                <div 
                                    key={s.index} 
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, s.index)}
                                >{s.index}

                                </div>
                                )
                            } 
                            </div>
                        )
                    })
                    }
                
            </div>
        </div>
    )
}

export default App