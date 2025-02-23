# drag-and-drop-shape-app
Creating the single page app, to allow the shape to drag and drop on different four quadrants and also changed the shape according to container



# How to set up application
Clone the repository and install the required dependencies:
```bash
git clone https://github.com/Anujb2001/drag-and-drop-shape-app.git
cd drag-and-drop-shape-app
npm install
```

# How to run the Application
## For running the application on local server:
```bash
npm run dev
```
## For build the application for Development environment
```bash
npm run build:dev
```

## For build the application for production environment
```bash
npm run build:prod
```
# Approach used to develop
### 1. Created the react app from scratch without using any boiler plate and configure Webpack
### 2. Created the basic layout for show 4 equally Quadrant as Container. For this I used Grid 
### 3. Created the basic two type of shape css Circle and Triangle.
### 4. Created the shapes array as in state show that it will be re-render if the shapes type is modified.
### 5. Showing the shape based on the shape type of shape. For example if Shape is Circle, It will use filter method to filter the shape with container shape type, and then render it under that component.
### 5. Implement the drag and drop functionality without using any third party library, DND. 
### 6. For the implementation of drag and drop, Make the shape item as draggable. It will hold the shape index on state variable whenever it going to start dragging. Added the method on container for Drag drop and hold the target container shape, it will changed the shape type of state item and update the shapes state.
### 7. Make the responsive application by using media query, I have used pure SCSS and media query for three type of device Mobile, Tablet and Desktop.
### 8. Adding the Content Security policy, for this it will add the CSP meta tag on html, I used a plugging to add CSP on html and also create the Hasp key for the content.

# Challenges
### In CSS for creating the Hexagon shape, 
### Facing a issue on drag and drop, it will not drag and In stackoverflow.com I got the issue that it required to prevent the default behavior on onDragOver.
### Facing the issue to updated the HTML by adding the nonce hasp code by using webpack

# Scope for Improvements
### Code refactor - moving the code from App.js into septate sub components, 
### Add some animation transformation on drag and dropping the item.
### Store the state information on persistent state may be local storage.
