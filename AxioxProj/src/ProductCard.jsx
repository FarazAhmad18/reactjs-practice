import React from "react";
const ProductCard = ({ item }) => {
  console.log("items is: ",item)
    return (
      <div style={styles.card}>
      <img src={item.image} alt={item.title} style={styles.image} />
      <h2 style={styles.title}>{item.title}</h2>
      <p style={styles.description}>{item.description}</p>
      <p style={styles.price}>$ {item.price}</p>
      <div style={styles.rating}>
        <span>Rating: {item.rating.rate} </span>
        <span>({item.rating.count} reviews)</span>
      </div>
    </div>
  );
};


const styles = {
    card: {
      width: '300px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '5px',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    description: {
      fontSize: '14px',
      color: '#555',
      marginTop: '10px',
      height: '80px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    price: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginTop: '10px',
    },
    rating: {
      marginTop: '10px',
      fontSize: '14px',
      color: '#f39c12',
    },
  };

  export default ProductCard;