import React from 'react';
import {FormGroup,ControlLabel,FormControl,Checkbox,Label,Table } from 'react-bootstrap';

var ProductCategoryRow = React.createClass({
  render() {
    return (<tr><th colSpan="2">{this.props.category}</th></tr>);
  }
});

var ProductRow = React.createClass({
	render() {
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
  render(){
    var rows = [];
    var lastCategory = null;
	let filterText = this.props.filterText;
	let inStockOnly = this.props.inStockOnly;
    this.props.products.forEach(function(product) {
	  // 过滤表格内容
	  console.log("filterText => %s",filterText);
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
  formData: {
	  filterTextInput:'',
	  inStockOnlyInput:true
  },
  handleChange(){
    this.props.onUserInput(
      this.formData.filterTextInput,
      this.formData.inStockOnlyInput
    );
  },
  render(){
    return (
      <form>
		<FormGroup controlId="formControlsText">
		  <ControlLabel>搜索</ControlLabel>
		  <FormControl type="text" placeholder="Search ..." value={this.props.filterText}
			onChange={(e) => {
				this.formData.filterTextInput = e.target.value;
				this.handleChange();
			}}
		  />
		</FormGroup>
		<Checkbox checked={this.props.inStockOnly}
		  onChange={(e) => {
			  this.formData.inStockOnlyInput = e.target.checked;
			  this.handleChange();
		  }}
		>
		  Only show products in stock
		</Checkbox>
      </form>
    )
  }
});

var FilterableProductTable = React.createClass({
  getInitialState(){
	  return {
		filterText: 's',
		inStockOnly: true
	  };
  },
  render(){
	// 传递回调函数onUserInput给子组件SearchBar，
	// 当子组件的文本框发生变化时执行在父组件中设置的回调函数以更新父组件的state
	return (
      <div>
        <SearchBar 
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
		  onUserInput={(filterText, inStockOnly) => {
			this.setState({
			  filterText: filterText,
			  inStockOnly: inStockOnly
			});
		  }}
		/>
        <ProductTable
		  products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
		/>
      </div>
    )
  }
});


export default FilterableProductTable;