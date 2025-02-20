import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({products}) => {
  return (
      <div style={styles.cardContainer}>
    {products.map((product)=>{
return <ProductCard key={product.id} item={product} />
    })}
    </div>
  )
}
const styles = {
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    },
  };
export default ProductList
