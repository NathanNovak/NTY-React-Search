import React from 'react';

export const DeleteButton = props => (
	<button onClick={() => props.delete()} style={{ float: "right", marginBottom: 10 }} className="btn btn-danger">
    Delete Article
  </button>
)