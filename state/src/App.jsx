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
    </div>
  );
}
function CustomInput(props) {
  const [value, setValue] = useState('');

  return (
    <input type="text" value={props.value} onChange={props.onChange}></input>
  );

  //  (e) => {
  //       setValue(e.target.value);
  //       //  document.querySelector('#' the id of the relevant h2).textContent = e.target.value;
  //     }
}

function Person() {
  const [person, setPerson] = useState({
    firstName: 'John',
    lastName: 'Smith',
    age: 23,
  });

  return (
    <>
      <h2 id="firstName">{person.firstName}</h2>
      <label htmlFor="firstName">
        Firstname:
        <CustomInput
          id="firstName"
          key="firstName"
          value={person.firstName}
          onChange={(e) => {
            const newPerson = { ...person, firstName: e.target.value };
            setPerson(newPerson);
          }}
        >
          {person.firstName}
        </CustomInput>
      </label>

      <h2 id="lastName">{person.lastName}</h2>
      <label htmlFor="lastName">
        Lastname:
        <CustomInput
          id="lastName"
          key="lastName"
          value={person.lastName}
          onChange={(e) => {
            const newPerson = { ...person, lasttName: e.target.value };
            setPerson(newPerson);
          }}
        ></CustomInput>
      </label>
    </>
  );
}

export default App;
