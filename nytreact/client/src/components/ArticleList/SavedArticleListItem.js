import React, {Component} from "react";
import { Container, Row, Col } from "../Grid";
import Thumbnail from "./../Thumbnail";
import {DeleteButton} from '../../components/Buttons';


export const SavedArticleListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.thumbnail} />
        </Col>
        <Col size="xs-8 sm-9">
          <h3>{props.title}</h3>
          {/* <p>{props.news}</p> */}
          <a rel="noreferrer noopener" target="_blank" href={props.href}>
            Go to article!
          </a>
          <DeleteButton
            delete={props.submit}
          />
        </Col>
      </Row>
    </Container>
  </li>
);