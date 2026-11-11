import { Component } from 'react';

export class Count extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };
  }

  handleOnChange = (todos) => {
    this.setState(todos.length);
  };

  render() {
    return <p>{this.state.count}</p>;
  }
}
