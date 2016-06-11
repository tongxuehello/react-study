import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../common/Header';
//import FilterableProductTable from './FilterableProductTable';
//import FilterableProductTable from './FilterableProductTablePropsState';
import FilterableProductTable from './FilterableProductTableInverseDataFlow';


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
	(
	<div>
		<Header>Thinking in React</Header>
		<FilterableProductTable products={PRODUCTS} />
	</div>
	)
	,
	document.getElementById('app-container')
);