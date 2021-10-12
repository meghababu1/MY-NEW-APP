import React, { Component } from 'react'
import Car from './Car'
import MyContext from './MyContext'

export default class Cars extends Component {
    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <div>
                        {
                            Object.keys(context.cars).map(carid =>
                                <Car id={carid} key={carid} car={context.cars[carid]} incrementPrice={context.incrementPrice} decrementPrice={context.decrementPrice}></Car>)
                        }
                    </div>)}

            </MyContext.Consumer>
        )
    }
}
