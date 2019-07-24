import React, { Component } from 'react'


export default class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [
                { id: 1, name: 'mona', age: '28', email: 'something@somwhre.com' },
                { id: 2, name: 'mina', age: '30', email: 'anotherThing@newwhere.com' },
                { id: 3, name: 'minosh', age: '27', email: 'everewhere@nederland.com' },
                { id: 4, name: 'sinoosh', age: '25', email: 'newwhere@gmail.com' }
            ]

        }
    }


    renderTableData() {
        return this.state.students.map((student, index) => {
            const { id, name, age, email } = student
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                </tr>
            )
        })

    }
    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
            return <th key={index}>
                {key.toUpperCase()}
            </th>
        })

    }
    render() {
        return (
            <React.Fragment>
                <h1 id="title">Select diffrence color</h1>
                <table id="students">
                    <tbody><tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}