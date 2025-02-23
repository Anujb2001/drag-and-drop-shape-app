import React, {useState} from "react";  


const DragAndDrop = (props) => {
    // consider initial shapes all are circle

    // created the shapes state for holding the all five shapes 
    const [shapes, setShapes] = useState(props.initialData)
    // to hold the index of the drag shape
    const [dragItemIdex, setDragItemIndex] = useState(-1)



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

            {/* created the containers for holding all four quadrants */}
                <div className="container" >
                    {
                    props.shapeContainers.map((container, index) => {
                        return(
                            // add the on drop even 
                            <div 
                                key = {index} 
                                className={container.shapeType}
                                onDrop={(e) => handleDrop(e, container.shapeType)}
                                onDragOver={(e) => e.preventDefault()} 
                            > 
                            
                            {shapes.filter(s => s.type === container.shapeType).map((s)=>
                                // Render the shape item 
                                <div 
                                    key={s.index} 
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, s.index)}
                                >

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

export default DragAndDrop