import React, { Component } from 'react'
import Cars from './Cars'
import './ProductList.css'

export default class ProductList extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        return (
            <div>
                <h1 className="heading">Products Page</h1>
                <Cars></Cars>
            </div>
        )
    }
}
