import React from "react";
import { Button, Card } from "react-bootstrap";

const News = (props) => {
  return (
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h3>
            {
                props.article.title
            }
          </h3>
          <h5>
            {props.article.description}
          </h5>
          <Button style={{marginBottom: '20px'}} variant="primary"><a style={{color:'white'}} href={props.article.url}>Read More</a></Button>{' '}
          <footer className="blockquote-footer">
            Reported by <cite title="Source Title">{props.article.author}</cite>
            <br />
            <p>
                Publiced at: {props.article.publishedAt}
            </p>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default News;
