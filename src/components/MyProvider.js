import React, { Component } from 'react'
import MyContext from './MyContext'

export default class MyProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: {
                car1001: { name: "Honda", price: 500000 },
                car1002: { name: "BMW", price: 1500000 },
                car1003: { name: "Mercedes", price: 500000 }
            }
        }
    }
    incrementCarPrice = this.incrementCarPrice.bind(this)
    decrementCarPrice = this.decrementCarPrice.bind(this)
    incrementCarPrice(carid) {
        let car_copy = Object.assign({}, this.state.cars)
        car_copy[carid].price += 10000
        console.log(car_copy)
        this.setState({ car_copy })
    }
    decrementCarPrice(carid) {
        let car_copy = Object.assign(this.state.cars)
        car_copy[carid].price -= 5000
        this.setState({ car_copy })
    }
   
        //     const context = {
        //         cars:this.state.cars,
        //         incrementPrice:this.incrementCarPrice,
        //         decrementPrice:this.decrementCarPrice
        //     }
        
    render() {
        
        return (
            <div>
                <MyContext.Provider value={{cars:this.state.cars, incrementPrice:this.incrementCarPrice, decrementPrice:this.decrementCarPrice}}>
                    {this.props.children}
                </MyContext.Provider>
            </div>
        )
    }
}
