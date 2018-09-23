import React from 'react';

export const SaveButton = props => (
	<button onClick={() => props.onFormSubmit()} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
    Save Article
  </button>
)

// export default SaveButton;