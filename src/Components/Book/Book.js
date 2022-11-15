import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Review from '../Review/Review';
import CreateReview from '../Review/CreateReview';
import AddToCart from '../Cart/AddToCart';
import { BsArrowLeft } from 'react-icons/bs';
import { deleteBook } from '../../store';
import Recs from './Recs';
const Book = () => {
  const { books, auth } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const book = books.find((book) => book.id === id);

  if (!book) return <h1>...loading</h1>;

  const destroyBook = () => {
    if (
      confirm(`Are you sure you want to delete ${book.title} from the store?`)
    ) {
      dispatch(deleteBook(book, navigate));
    }
  };

  return (
      <div style={{ height: '300vh' }}>
        <div className="book_info">
          <img src={book.imageUrl} className="book_page_img" alt="Book cover" />
          <div className="book_text">
            <h4>{book.title}
            <br></br>
            {book.author}
            </h4>
            <p>${book.price}</p>
            <p>{book.description}</p>
            <AddToCart />
            {auth.isAdmin ? (
              <Link to={`/books/${book.id}/edit`}>Edit Book Info</Link>
            ) : null}
            <br></br>
            {auth.isAdmin ? (
              <button onClick={() => destroyBook()}>Delete Book</button>
            ) : null}
          </div>
        </div>
        <div className='arrow'>
          <Link to="/books">
            <BsArrowLeft size={30} />
            <>Back</>
          </Link>
        </div>
        <div className='book_reviews'>
          <Review id={book.id} book={book.title} />
          {auth.id ? <CreateReview id={book.id} book={book.title} /> : null}
        </div>
        <div className='book_recs'>
        <Recs book={book.id} genre={book.genre} />
        </div>
      </div>
  );
};

export default Book;
