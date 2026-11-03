import { useState } from 'react';
import './App.css';

const COLORS = ['pink', 'green', 'blue', 'yellow', 'purple'];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [backgroundChange, setBackgroundChange] = useState(0);

  const onButtonClick = (color) => () => {
    setBackgroundColor(color);
    //counts only when the color is changed.
    setBackgroundChange(
      backgroundColor !== color ? backgroundChange + 1 : backgroundChange,
    );
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h1>Color Change Number: {backgroundChange}</h1>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
          className={backgroundColor === color ? 'selected' : ''}
        >
          {color}
        </button>
      ))}
      <CustomInput></CustomInput>
    </div>
  );
}
function CustomInput() {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></input>
  );
}

export default App;
