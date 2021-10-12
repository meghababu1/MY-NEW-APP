import React, { Component } from 'react'
import ProductList from './components/ProductList'
import MyProvider from './components/MyProvider'

export default class App extends Component {
  
  
  render() {
    return (
      <div>
        <MyProvider>
        <ProductList/>
        </MyProvider>
      </div>
    )
  }
}

