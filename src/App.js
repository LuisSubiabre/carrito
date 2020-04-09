import React from 'react';
import './App.css';
import Product from './components/Product.js';
import Navigation from './components/Navegation.js';
import {Container, Row} from 'reactstrap';
import {  } from 'react-dom';
import { productList } from './productList.json'



class App extends React.Component{

  constructor(){
    super();

    this.state = {
      productList
    };
  }
  render() {
    const arrayComponents = this.state.productList.map(
      (productList, i) => {
        return(
          
          <Product
          key={i}
          id={productList.id}
          title={productList.title}
          img={productList.img}
          description={productList.description}
          price={productList.price}
          stock={productList.stock}
        />
        )
        
      }
    );
    return(
      
        <Container>
          <Navigation title="My First site Photo Stock with React"/>
          <Row>
            {arrayComponents}
          </Row>
      </Container>
    );
  }
}

export default App;
