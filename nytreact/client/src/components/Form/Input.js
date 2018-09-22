import React from 'react';
import "./Form.css";

export const Input = props => (
	<div className='form-group'>
	 <label >{props.label}</label>
	<input className='form-control input' {...props} />
	</div>
)

