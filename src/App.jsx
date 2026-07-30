import { useState, useEffect } from "react";
import "./App.css";
function App() {
 
 const [colors, setColors] = useState([]);
   
   
   function generateColor() {
  return (
    "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase()
    );}

   function generatePalette() {
  let newColors = [];

  for (let i = 0; i < 6; i++) {
    newColors.push(generateColor());
  }
    setColors(newColors);
    console.log(newColors);
 }
  
  function copyColor(color) {
  navigator.clipboard.writeText(color);
}
   
 //console.log(generateColor());
  useEffect(() => {
  generatePalette();
  }, []);
  return (
  
  <div className="app">
    <h1>Color Palette Generator</h1>
    <p>
      Create beautiful random color palettes.
      Click any color to copy its HEX code.
    </p>
    
    <button className="button" onClick={generatePalette}>Random</button>
    <div className="palette">
    {colors.map((color, index) => (
    <div className="card" key={index} onClick={() => copyColor(color)}>
      <div
        className="colorBox"
        style={{ backgroundColor: color }}
      ></div>
      <p>{color}</p>
      </div>
      ))}
     </div>
    
    
   </div>
  );
}

export default App
