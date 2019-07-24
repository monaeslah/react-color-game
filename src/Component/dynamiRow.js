import React from "react";

export default class Table extends React.Component {
  state = {
    data: []
  };
  appendChild = () => {
    let { data } = this.state;
    data.push(data.length); // data.length is one more than actual length since array starts from 0.
    // Every time you call append row it adds new element to this array. 
    // You can also add objects here and use that to create row if you want.
    this.setState({data});
  };
  render() {
    return (
      <table>
        <thead>
          <th>Type</th>
          <th>Position</th>
        </thead>
        <tbody>
          {this.state.data.map(id => (
            <Row id = {id} />
          ))}
        </tbody>
      </table>
    );
  }
}

const Row = ({ id }) => (
  <tr>
    <td>
      <input type="text" id={`select-type-${id}`} />
    </td>
    <td>
      <input type="text" id={`select-position-${id}`} />
    </td>
  </tr>
);