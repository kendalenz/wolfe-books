import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Books = () => {
  const { books } = useSelector((state) => state);

  const Bookcard = (props) => {
    return (
      <div style={{ padding: '2rem', margin: '1rem' }}>
        <img src={props.imageUrl} className="books_page_img" alt="Book cover" />
        <br></br>
        <Link to={`/books/${props.id}`}>
          <strong>{props.title}</strong>
        </Link>
        <br></br>
        <strong>{props.author}</strong>
        <br></br>
        <br></br>${props.price}
      </div>
    );
  };

  return (
    <div>
      <form className='genre_form'>
      <label form="genre">View by genre:</label>
        <select>
          <option value=''></option>
          {books.map((book)=> {
            return (
              <option key={book.id} value={book.genre}>
                {book.genre}
              </option>
            )
          })}
        </select>
      </form>
      
    <div className='books_div'>      
        {
            books.map((book) => <Bookcard id={book.id} key={book.id} imageUrl={book.imageUrl} title={book.title} author={book.author} price={book.price}/>)
        }
  
    </div>
    </div>
  );
};

export default Books;
