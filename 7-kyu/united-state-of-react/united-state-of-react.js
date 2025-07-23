import React from 'react';
​
export class States extends React.Component {
  constructor() {
    super(); 
    this.state = {
      united: false
    }
  }
  unite = () => {
    this.setState({united: true})
  }
  render() {
     return (
      <div className="status">
        <h1>
          {this.state.united ? "Code for everyone" : "Make America code again"}
        </h1>
      </div>
    );
  } 
}
  
  