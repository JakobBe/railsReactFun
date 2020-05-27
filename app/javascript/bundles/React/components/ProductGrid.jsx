import React from 'react';

class ProductGrid extends React.Component {
  getProductCards = (products) => {
    
    return (
      <div class="row">
        {products.map((product, index) => {
          const cardClass = (index + 1) % 2 === 0 ? 'card product-right' : 'card product-left'; 
          let pictureClass = undefined;
          if (product.name.includes('Rails')) {
            pictureClass = 'rails'
          } else if (product.name.includes('React')) {
            pictureClass = 'react'
          } else {
            pictureClass = '3'
          }

          return (
            <div class={cardClass}>
              <div class="card__side card__side--front">
                <div class={`card__picture card__picture--${pictureClass}`}>
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--1">{product.name}</span>
                </h4>
                <div class="card__details">
                  <span>Hover for more information</span>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-value">{product.price}</p>
                  </div>
                  <a href={`/products/${product.id}`} class="btn btn--white">Get in Contact</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div class="product-section">
        {this.getProductCards(this.props.products)}
      </div>
    );
  }
}

export default ProductGrid;