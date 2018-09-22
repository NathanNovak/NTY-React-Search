import React, {Component} from "react";
import { Container, Row, Col } from "../Grid";
import Thumbnail from "./../Thumbnail";
import {SaveButton} from '../../components/Buttons';


// // ArticleListItem renders a bootstrap list item containing data from the article api call
// class ArticleListItem extends Component {
  

//   render(){
//     console.log(props)
//     return(
// <li className="list-group-item">
//     <Container>
//       <Row>
//         <Col size="xs-4 sm-2">
//           <Thumbnail src={props.thumbnail} />
//         </Col>
//         <Col size="xs-8 sm-9">
//           <h3>{props.title}</h3>
//           <p>{props.news}</p>
//           <a rel="noreferrer noopener" target="_blank" href={props.href}>
//             Go to article!
//           </a>
//           <SaveButton
//             onFormSubmit={props.submit}
//           />
//         </Col>
//       </Row>
//     </Container>
//   </li>
//     )
//   }
// }
  
// export default ArticleListItem

// ArticleListItem renders a bootstrap list item containing data from the article api call
export const ArticleListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          <p>{props.news}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>
            Go to article!
          </a>
          <SaveButton
            onFormSubmit={props.submit}
          />
        </Col>
      </Row>
    </Container>
  </li>
);
