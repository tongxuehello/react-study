import React from 'react';
import { ButtonToolbar,Button,ButtonGroup } from 'react-bootstrap';
import LoadingButton from './LoadingButton';

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
const buttonsInstance = (
  <div>
	<h2>bsStyle</h2>
	<ButtonToolbar>
		{/* Standard button */}
		<Button>Default</Button>

		{/* Provides extra visual weight and identifies the primary action in a set of buttons */}
		<Button bsStyle="primary">Primary</Button>

		{/* Indicates a successful or positive action */}
		<Button bsStyle="success">Success</Button>

		{/* Contextual button for informational alert messages */}
		<Button bsStyle="info">Info</Button>

		{/* Indicates caution should be taken with this action */}
		<Button bsStyle="warning">Warning</Button>

		{/* Indicates a dangerous or potentially negative action */}
		<Button bsStyle="danger">Danger</Button>

		{/* Deemphasize a button by making it look like a link while maintaining button behavior */}
		<Button bsStyle="link">Link</Button>
	</ButtonToolbar>

	<h2>bsSize</h2>
	<ButtonToolbar>
		<Button bsStyle="primary" bsSize="large">Large button</Button>
		<Button bsSize="large">Large button</Button>
	</ButtonToolbar>
	<ButtonToolbar>
		<Button bsStyle="primary">Default button</Button>
		<Button>Default button</Button>
	</ButtonToolbar>
	<ButtonToolbar>
		<Button bsStyle="primary" bsSize="small">Small button</Button>
		<Button bsSize="small">Small button</Button>
	</ButtonToolbar>
	<ButtonToolbar>
		<Button bsStyle="primary" bsSize="xsmall">Extra small button</Button>
		<Button bsSize="xsmall">Extra small button</Button>
	</ButtonToolbar>
	
	<h2>block level buttons</h2>
	<div className="well" style={wellStyles}>
		<Button bsStyle="primary" bsSize="large" block>Block level button</Button>
		<Button bsSize="large" block>Block level button</Button>
	</div>
	
	<h2>Active state</h2>
	<ButtonToolbar>
		<Button bsStyle="primary" bsSize="large" active>Primary button</Button>
		<Button bsSize="large" active>Button</Button>
	</ButtonToolbar>
	
	<h2>Button tags</h2>
	<ButtonToolbar>
		<Button href="#">Link</Button>
		<Button>Button</Button>
	</ButtonToolbar>
	
	<h2>Disabled state</h2>
	<ButtonToolbar>
		<Button bsStyle="primary" bsSize="large" disabled>Primary button</Button>
		<Button bsSize="large" disabled>Button</Button>
	</ButtonToolbar>
	
	<h2>LoadingButton</h2>
	<LoadingButton />
	
	<h2>ButtonGroup</h2>
	<ButtonGroup>
		<Button>Left</Button>
		<Button>Middle</Button>
		<Button>Right</Button>
	</ButtonGroup>
	
	
	<h2>ButtonToolbar</h2>
	  <ButtonToolbar>
		<ButtonGroup>
		  <Button>1</Button>
		  <Button>2</Button>
		  <Button>3</Button>
		  <Button>4</Button>
		</ButtonGroup>
	​
		<ButtonGroup>
		  <Button>5</Button>
		  <Button>6</Button>
		  <Button>7</Button>
		</ButtonGroup>
	​
		<ButtonGroup>
		  <Button>8</Button>
		</ButtonGroup>
	  </ButtonToolbar>
	  
	  
	  
	 <h2> ButtonToolbar bsSize</h2>
 <div>
    <ButtonToolbar>
      <ButtonGroup bsSize="large">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>

    <ButtonToolbar>
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>

    <ButtonToolbar>
      <ButtonGroup bsSize="small">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>

    <ButtonToolbar>
      <ButtonGroup bsSize="xsmall">
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </ButtonToolbar>
  </div>
	  
  </div>
);


export default React.createClass({
	render() {
		return buttonsInstance;
	}
});