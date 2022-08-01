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
      val: 'Click me!'
    };
    //binding this context to event handler
    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onEmailChangeEventHandler = this.onEmailChangeEventHandler.bind(this);
    this.onGenderChangeEventHandler = this.onGenderChangeEventHandler.bind(this);
    this.setDoStuff = this.setDoStuff.bind(this);
    this.doStuff = this.doStuff.bind.apply(this);
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
        <input type="text" onChange={doStuff} />
        <button onClick={setDoStuff}>{this.state.val}</button>
      </div>
    );
  }
}

const root = createRoot(document.getElementById('root'));
root.render(<MyForm />);
