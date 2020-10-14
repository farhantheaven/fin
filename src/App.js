import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from 'react-bootstrap/Table'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  
  
  handleChange(event) {
    this.setState({ name: event });
  } 
  
  
  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/getContactsDetails`)
      .then(response => response.json())
      .then(state => {
        console.log(state)
        this.setState(state)
      });
  }  
  
  
  
  render() {
    if(this.state.greeting && this.state.greeting.length == 0){
      return (
        <div className="App">
          <header className="App-header">
            <p>
               Get The Result
            </p>
            <form onSubmit={this.handleSubmit}>
              <button type="submit">Submit</button>
            </form>
          </header>
        </div>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <Table responsive>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Age</th>
                      <th>Extra</th>
                      <th>Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.greeting.map((object, i) => 
                     <tr> 
                       <td> {i} </td>
                       <td> {object.name} </td>
                       <td> {object.fname}</td>
                       <td> {object.lname}</td>
                       <td> {object.age}</td>
                       <td> {object.extra}</td>
                       <td> {object.phone}</td>
                    </tr>
                    )}
                    </tbody>
                </Table>
          </header>
        </div>
      );
    }  }
}
export default App;