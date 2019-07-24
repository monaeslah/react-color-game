import React, { Component } from 'react'
import './assets/mainTable.scss'


export default class MainTable extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
           <div>
           <FirstTable />
           <SecTable />
           </div>
            </React.Fragment>
        );
    }
}