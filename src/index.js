import React from 'react';
import { createRoot } from 'react-dom/client';

class MyForm extends React.Component {
  constructor(props) {
    super(props);

    //state init
    this.state = {
      name: '',
      email: '',
      gender: 'Male',
      valsetter: 'Click me',
      val: ''
    };
    //binding this context to event handler
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
    this.setDoStuff = this.setDoStuff.bind(this);
    this.doStuff = this.doStuff.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const message = `
    Name: ${this.state.name}
    Email: ${this.state.email}
    Gender: ${this.state.gender}
  `;

    alert(message);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value
      };
    });
  }

  onEmailChangeEventHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      };
    });
  }

  onGenderChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        gender: event.target.value
      };
    });
  }

  setDoStuff = () => {
    this.setState({ valsetter: this.state.val });
  };

  doStuff = (event) => {
    this.setState({ val: event.target.value });
  };

  render() {
    return (
      <div>
        <h1> Register Form</h1>
        <form onSubmit={this.onSubmitEventHandler}>
          <label for="name">Name: </label>
          <input id="name" type="text" value={this.state.name} onChange={this.onNameChangeEventHandler} />
          <br />
          <label for="email">Email: </label>
          <input id="email" type="text" value={this.state.email} onChange={this.onEmailChangeEventHandler} />
          <br />
          <label for="gender">Gender: </label>
          <select id="gender" value={this.state.gender} onChange={this.onGenderChangeEventHandler}>
            <option value="Man">Man</option>
            <option value="Woman">Woman</option>
          </select>
          <br />
          <button type="submit">submit</button>
        </form>

        {/* foreign addition */}
        <br />
        <input type="text" onChange={this.doStuff} />
        <button onClick={this.setDoStuff}>{this.state.valsetter}</button>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);
