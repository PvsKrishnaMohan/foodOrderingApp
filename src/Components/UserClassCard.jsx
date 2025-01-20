import React from "react";

class UserClassCard extends React.Component {
  constructor(props) {
    super(props);
  
  this.state ={
    count: 0,
    count2: 2
  }

}
  render() {
    const {count2} = this.state;
    return (
      <div className="userCard">
        <h1>{this.props.name}</h1>
        <h2>{this.props.location}</h2>
        <h3>{this.props.gender}</h3>
        <h3>{this.state.count}</h3>
        <h3>{count2}</h3>
        <button onClick={() => {
            this.setState({count2 : this.state.count2 +1})
        }}>increase Count</button>
        <h3>{count2}</h3>
      </div>
    );
  }
}

export default UserClassCard;
