import React, { Component } from 'react';
import BagelDisplay from './Components/BagelDisplay/BagelDisplay';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bagels: [
        {
          name: 'Onion Bagel',
          imageUrl:'http://cdn.shopify.com/s/files/1/1749/6693/products/onion-bagel_1024x1024.png?v=1531755332',
          scale: 9
        },
        {
          name: 'Blueberry Bagel',
          imageUrl: 'http://cdn.shopify.com/s/files/1/1749/6693/products/blueberry_1024x1024.jpg?v=1531755323',
          scale: 10
        },
        {
          name: 'Wheat Bagel',
          imageUrl: 'https://bagelbiz.com/wp-content/uploads/2017/11/Bagel-Biz-Whole-Wheat-Bagel.png',
          scale: 5
        },
        {
          name: 'Bantam Bagles',
          imageUrl: 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/41/1476297779-delish-bantam-bagels-2.jpg',
          scale: 11
        }
      ]
    } // end of state

    this.updateScale = this.updateScale.bind(this);

  } // end of constructor

  updateScale(num, index) {
    this.state.bagels[index].scale = num;
    this.setState({
      bagels: this.state.bagels
    })
  }

  render() {
    const mappedBagels = this.state.bagels.map((bagel,index) => {
      return <div>
        <BagelDisplay name={bagel.name} imageUrl={bagel.imageUrl} scale={bagel.scale} updateScale={this.updateScale} index={index}/>
      </div>
    })
    return (
      <div className='App'>
        {mappedBagels}
      </div>
    );
  }
}

export default App;
