import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { putInCart } from '../store';

const Book = () => {
  const { books } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const book = books.find((book) => book.id === id);

  if (!book) return <h1>...loading</h1>;

  const addItem = async (e) => {
    e.preventDefault();
    try {
      await dispatch(putInCart({ book, quantity }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h4>{book.title}</h4>
      <p>${book.price}</p>
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

export default Book;
