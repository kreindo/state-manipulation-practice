import React from 'react';
import { createRoot } from 'react-dom/client';

class MyForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      val: 'click'
    };
  }

  setDoStuff = (event) => {
    this.setState({ val: this.state.name });
  };

  doStuff = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div>
        <h1> Register Form</h1>
        <form>
          <label for="name">Name: </label>
          <input id="name" type="text" />
          <br />
          <label for="email">Email: </label>
          <input id="email" type="text" />
          <br />
          <label for="gender">Gender: </label>
          <select id="gender">
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </form>
        <br />
        <input type="text" onChange={this.doStuff} />
        <button onClick={this.setDoStuff}>{this.state.val}</button>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);
