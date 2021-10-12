import React, { Component } from 'react'
import './Car.css'
import MyContext from './MyContext'

export default class Car extends Component {
    render() {
        return (
            <div className="div">
                {this.props.car.name}
                {this.props.car.price}
                
                            <button className ="btn" onClick={()=>{this.props.incrementPrice(this.props.id)}}>+</button>
                            <button className ="btn" onClick={()=>{this.props.decrementPrice(this.props.id)}}>-</button>
            
            </div>
        )
    }
}
