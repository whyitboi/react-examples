import { Component } from 'react';

export class Count extends Component {
  render() {
    return <p>Number of tasks: {this.props.count}</p>;
  }
}
