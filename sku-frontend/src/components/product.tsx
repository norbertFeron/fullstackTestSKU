
import React from 'react';

import { Card, Row, Col } from 'react-bootstrap';

type ProductProps = { product: {
    title?: string,
    id?: string,
    vendor?: string,
    price?: number,
    body_html?: string,
    created_at?: string,
    requireShipphing?: boolean,
    image_src?: string,
    stock?: number
  }
};

export function Product(prop : ProductProps) {
  console.log(prop)
  return (
  <Card className="product">
    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
    <Card.Body style={{ paddingBottom: 0 }}>
      <Row className="borderBottom">
        <Col sm={12}>
          <div id="textbox">
            <h2 className="alignleft">{prop.product.title} - {prop.product.id}</h2>
            <p className="alignright">{prop.product.created_at !== undefined && new Date(parseInt(prop.product.created_at)).toLocaleString().slice(0, -13)}</p>
          </div>
          <div className="clearBoth"></div>
        </Col>
      </Row>
      <Row>
        <Col sm={8}>
          <Row className="borderRightBottom">
            <h4>Stock - {prop.product.stock !== Number.NaN ? prop.product.stock : "NA" } &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {prop.product.vendor}</h4>
          </Row>
          <Row  className="borderRight">
            <h3>{prop.product.price ? prop.product.price : "NA"} $ - "Product Price"</h3>
            <small><span data-mce-fragment="1">{prop.product.body_html && prop.product.body_html.replace('<span data-mce-fragment="1">', '').replace('</span>', '')}</span></small>
          </Row>
        </Col>
        <Col className="imageContainer" sm={4}><img src={prop.product.image_src} className="productImg" /></Col>
      </Row>
    </Card.Body>
  </Card>
  );
}
