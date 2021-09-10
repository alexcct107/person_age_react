import { render } from "@testing-library/react";
import React, { useState } from "react";

// COMPONENTE FUNCIONAL ↓

// const PersonCard = props => {
//   const [count, setCount] = useState(props.age);
//   return (
//     <div className="App">
//       <h1>
//         {props.firstName}, {props.lastName}
//       </h1>
//       <h5>Age:{count}</h5>
//       <p>Hair color: {props.hairColor}</p>
//       <button onClick={() => setCount(count + 1)}> dame mas años </button>
//     </div>
//   );
// }

// COMPONENTE DE CLASE ↓

class PersonCard extends React.Component {
  constructor(props) {
    super(props);
      this.state = {count: this.props.age}
  }

  IncrementAge = () => {
    this.setState({ count: this.state.count + 1 });
  }

  DecreaseAge = () => {
    this.setState({count:this.state.count - 1})
  }

  render() {
    return (
      <div className="App">
      <h1>
        {this.props.firstName}, {this.props.lastName}
      </h1>
      <h5>Age:{this.state.count}</h5>
      <p>Hair color: {this.props.hairColor}</p>
      <button onClick={this.IncrementAge}> Hazme Viejo </button> <br />
      <button onClick={this.DecreaseAge}> Hazme Joven </button>
    </div>
    )
  }
}

export default PersonCard;