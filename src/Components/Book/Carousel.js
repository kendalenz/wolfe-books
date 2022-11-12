import React from 'react';
import Slider from 'react-slick';
import { useSelector } from 'react-redux';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
//import Carousel from 'react-material-ui-carousel';
//import { Paper, Button } from '@mui/material';

const Recommendations = (props) => {
  const genre = props.genre;
  const id = props.id;
  //console.log(id);
  const { books } = useSelector((state) => state);
  const booksByGenre = books.filter(
    (book) => book.id !== id && book.genre === genre
  );
  console.log(booksByGenre);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: booksByGenre.length,
    slidesToScroll: 3,
  };
  console.log(booksByGenre);
  return (
    <div>
      <h2>You May Also Enjoy...</h2>
      <Slider {...settings}>
        {booksByGenre.map((book) => (
          <BookCard book={book} key={book.id} />
        ))}
      </Slider>
    </div>
  );
};

const BookCard = (props) => {
  console.log(props.book.imageUrl);
  return (
    <>
      <h3>{props.book.title}</h3>
      <img height="400px" src={props.book.imageUrl} alt={props.book.title} />
    </>
  );
};
//carousel will show other books in the same genre (later could add tags for more specificity)
//this component will somehow need access to the genre of the book detail page it appears on, passed in as a prop to filter by?

export default Recommendations;
