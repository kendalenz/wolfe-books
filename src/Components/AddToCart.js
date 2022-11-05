import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { putInCart } from '../store';

const AddToCart = () => {
  const { books } = useSelector((state) => state);
  const { id } = useParams();
  const book = books.find((book) => book.id === id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState('');

  const addItem = async (e) => {
    e.preventDefault();
    try {
      await dispatch(putInCart({ book, quantity }, navigate));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={addItem}>
        <input
          placeholder="How many?"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        ></input>
        <button>Add to Cart</button>
      </form>
    </div>
  );
};

export default AddToCart;
