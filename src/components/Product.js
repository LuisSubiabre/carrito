import React from 'react';
import './Product.css';
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import ProductDescription from './ProductDescription';

class Product extends React.Component {
    
    render() {
        //console.log(this.props);
        return(
            <Col sm="6">
            <Card className="Card" body outline color="primary">
                <CardImg src={this.props.img}></CardImg>
                <CardBody>
                <CardTitle><b>Title:</b> {this.props.title}</CardTitle>
                    <CardSubtitle><b>Price</b>: {this.props.price}</CardSubtitle>
                    <CardText>{this.props.description}</CardText>
                    <ProductDescription props={this.props}></ProductDescription>
                </CardBody>
            </Card>
            </Col>
        );
    }
}

export default Product;