import React, {  } from 'react';
import { Button, Container, Modal, ModalHeader, ModalBody, ModalFooter, CardImg } from 'reactstrap';
import './ProductDescription.css';
import {ShopList} from '../ShopList.json';
import 'react-toastify/dist/ReactToastify.css';

class ProductDescription extends React.Component {
    constructor(props) {
        super();

        this.state = {
            modal:false,
            ShopList
        }

        this.toggle = this.toggle.bind(this); //comparte a los demás métodos de la clase
        this.shopAdd = this.shopAdd.bind(this);
 
    }
    toggle() {
       
        this.setState(prevState => ({
            modal: !prevState.modal,
            
        }));
    }
    handleClick()
    {
    }
    shopAdd(){
        this.handleClick();
        ShopList.push({
            "id": this.props.props.id,
            "title": this.props.props.title,
            "price": this.props.props.price
        });
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    }
    render() {

        var stockCheck = this.props.props.stock;
        ShopList.forEach(element =>{ 
            if(element['id']===this.props.props.id){
                stockCheck = stockCheck - 1;
            }
        });

       
        return(
            <Container> 
                <Button onClick={this.toggle}>View Pic</Button>
                <Modal isOpen={this.state.modal}>
                    <ModalHeader>{this.props.props.title}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.img}></CardImg>
                        <p></p>
                        <p><b>Info: </b>{this.props.props.title}</p>
                        <p><b>$</b>{this.props.props.price}</p>
                        <p><b>Stock: </b>{stockCheck}</p>
                    </ModalBody>
                    <ModalFooter className="modalFooter">
                        {
                            stockCheck > 0 ? <Button color="success" onClick={this.shopAdd}>Add to Card</Button> : <Button color="success" onClick={this.shopAdd} disabled>(No more stock)</Button>
                        }
                        <Button color="secondary" onClick={this.toggle}>Close</Button>
                    </ModalFooter>      
                </Modal>
            </Container>
        );
    }
}

export default ProductDescription;