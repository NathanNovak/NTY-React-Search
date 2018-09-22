import React from "react";

// ArticleList renders a bootstrap list item
export const ArticleList = props => (
  <ul className="list-group" style={{marginTop: 20, marginBottom: 60}}>{props.children}</ul>
);
