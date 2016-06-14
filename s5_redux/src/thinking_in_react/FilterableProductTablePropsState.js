import React from 'react';
import {FormGroup,ControlLabel,FormControl,Checkbox,Label,Table } from 'react-bootstrap';

var ProductCategoryRow = React.createClass({
  render: function() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ?
      this.props.product.name :
      <Label bsStyle="danger">
		{this.props.product.name}
	  </Label>;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

var ProductTable = React.createClass({
  /*
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ];
  */
  render: function() {
    var rows = [];
    var lastCategory = null;
	let filterText = this.props.filterText;
	let inStockOnly = this.props.inStockOnly;
    this.props.products.forEach(function(product) {
	  // 过滤表格内容
      if (product.name.indexOf(filterText) === -1 || (!product.stocked && inStockOnly)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <Table striped bordered condensed hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    );
  }
});

var SearchBar = React.createClass({
  render: function() {
    return (
      <form>
		<FormGroup controlId="formControlsText">
		  <ControlLabel>搜索</ControlLabel>
		  <FormControl type="text" placeholder="Search ..." value={this.props.filterText}/>
		</FormGroup>
		<Checkbox checked={this.props.inStockOnly}>
		  Only show products in stock
		</Checkbox>
      </form>
    );
  }
});

var FilterableProductTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: 's',
      inStockOnly: true
    };
  },
  render: function() {
    return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
		/>
        <ProductTable
		  products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
		/>
      </div>
    );
  }
});


export default FilterableProductTable;