import React from 'react';
import { Button, Badge, Popover, PopoverHeader, PopoverBody, Table } from 'reactstrap';
import {ShopList} from '../ShopList.json';

function Remove(props){
        return (
            <button onClick={props.onClick} className="btn btn-danger btn-sm"> 
                <span className="material-icons">remove_shopping_cart</span>
            </button>
        );
}

class ShopCart extends React.Component {
   
    constructor() {
        super();
        this.state = {
            popoverOpen:false,
            ShopList
        }
        this.toggle = this.toggle.bind(this); 
    }
    toggle() {
        this.setState(prevState => ({
            popoverOpen: !prevState.popoverOpen
        }));
    }

    handleClick(i){
        //Elimina compra del array tomando el indice
        ShopList.splice(i-1, 1); 
        alert('Item deleted from shopping cart');
    }

    
    render(){
   
        var total = 0;
        const arrayCart = this.state.ShopList.map(
            (ShopList, i) => {
                total = parseFloat(total) + parseFloat(ShopList.price);
                //total = total.toFixed(3);
                return(
                    <tr key={i}>
                        <td>{(i += 1)}</td>
                        <td>{ShopList.title}</td>
                        <td>{ShopList.price}</td>
                        <td><Remove value={i} onClick={() => this.handleClick(i)}/></td>
                    </tr>
                );
            }
        );
        total = (parseInt(total)*parseInt(1000));
        
        return(
            <div>         
                <Button id="Popover1">
                    <span className="material-icons">shopping_cart</span>
                    <Badge color="success">items: {arrayCart.length}</Badge>
                    <Badge color="info">total: {total} CLP</Badge>
                </Button>
                <Popover target="Popover1" placement="bottom" isOpen={this.state.popoverOpen} toggle={this.toggle} trigger="legacy">
                    <PopoverHeader>List to buy</PopoverHeader>
                    <PopoverBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {arrayCart}
                            </tbody>
                            <tfoot>
                            <tr>
                                    <td><b>Total:</b></td>
                                    <td></td>
                                    <td>{total} CLP</td>
                                    <td></td>
                                </tr>
                               
                                </tfoot>
                        </Table>
                    </PopoverBody>
                </Popover>

            </div>
        );
    }
}
export default ShopCart;