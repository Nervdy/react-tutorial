import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: inline-block;
  width: ${props => props.width || '100%'};
  padding: ${props => props.padding || '5px'};
  font-size: 14px;
  box-sizing: border-box;
  border: 1px solid ${props => props.borderColor || 'orange'};
  p {
    margin: 0;
  }
`

const MarginTopContaner = styled(Container)`
  margin-top: ${props => props.marginTop || '10px'};
`

const Col = styled.p`
  display: inline-block;
  width: 40%;
  height: 1.2em;
  line-height: 1.2em;
  margin: 0;
  color: ${props => props.color || 'black'};
`

class ProductRow extends Component {
  render() {
    const product = this.props.product
    return (
      <div className={this.props.className}>
        <Col color={!product.stocked ? 'red' : ''}>{product.name}</Col>
        <Col>{product.price}</Col>
      </div>
    )
  }
}

class ProductCategoryRow extends Component {
  render() {
    const category = this.props.category

    return (
      <div className={this.props.className}>
        {category}
      </div>
    )
  }
}

class ProductTable extends Component {
  render() {
    let rows = []
    let lastCategory = ''
    this.props.products.forEach(product => {
      if (!product.name.includes(this.props.filterText) || (this.props.isStockOnly && !product.stocked)) return
      
      if (product.category !== lastCategory) {
        rows.push(
          <MarginTopContaner 
            as={ProductCategoryRow}
            key={product.category}
            category={product.category}
            borderColor="#57fa74"
            padding="2px"
            marginTop="2px" />
        )
      }
      rows.push(
        <MarginTopContaner
          as={ProductRow}
          key={product.name}
          product={product}
          padding="2px"
          marginTop="2px" />
      )
      lastCategory = product.category
    })

    return (
      <div className={this.props.className}>
        <Container 
          borderColor="white"
          padding="0" >
          <Col>Name</Col>
          <Col>Price</Col>
        </Container>
        {rows}
      </div>
    )
  }
}

class SearchBar extends Component {
  handleFilterTextChange = (event) => {
    this.props.onChange(event.target.value, 'filterText')
  }

  handleIsStockOnlyChange = (event) => {
    this.props.onChange(event.target.checked, 'isStockOnly')
  }
  
  render() {
    return (
      <div className={this.props.className}>
        <input 
          type="text" 
          placeholder="Search..." 
          value={this.props.filterText} 
          onChange={this.handleFilterTextChange} />
        <p>
          <label>
            <input 
              type="checkbox" 
              checked={this.props.isStockOnly}
              onChange={this.handleIsStockOnlyChange} />
            Only show products in stock
          </label>
        </p>
      </div>
    )
  }
}

class FilterableProductTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      isStockOnly: false
    }
  }

  handleChange = (value, key) => {
    console.log(value, key)
    this.setState({[key]: value})
  }
  
  render() {
    return (
      <div className={this.props.className}>
        <Container 
          as={SearchBar}
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          onChange={this.handleChange}
          padding="10px"
          borderColor="blue" />

        <MarginTopContaner
          as={ProductTable}
          filterText={this.state.filterText}
          isStockOnly={this.state.isStockOnly}
          products={this.props.products}
          borderColor="green" />
      </div>
    )
  }
}

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]

export default (
  <Container 
    as={FilterableProductTable} 
    products={PRODUCTS}
    width="250px" />
)