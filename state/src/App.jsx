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
      <Person></Person>
      <h2 id="firstName"></h2>
    </div>
  );
}
function CustomInput() {
  const [value, setValue] = useState('');

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        document.querySelector('#firstName').textContent = e.target.value;
      }}
    ></input>
  );
}

function Person() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastname: 'Smith',
    age: 23,
  });

  return (
    <>
      <label for="firstName">
        Firstname:
        <CustomInput
          id="firstName"
          key="firstName"
          onChange={(e) => {
            const newPerson = { ...person, firstName: e.target.value };
            setPerson(newPerson);
          }}
        >
          {person.firstName}
        </CustomInput>
      </label>

      <label for="lastName">
        Lastname:
        <CustomInput
          id="lastName"
          key="lastName"
          onChange={(e) => {
            const newPerson = { ...person, lasttName: e.target.value };
            setPerson(newPerson);
          }}
        >
          {person.lastName}
        </CustomInput>
      </label>
    </>
  );
}

export default App;
