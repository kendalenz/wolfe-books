import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteReview } from '../../store';
import { FaStar } from 'react-icons/fa';
import EditReview from './EditReview';
import dayjs from 'dayjs';

const Review = (props) => {
  const dispatch = useDispatch();
  const { reviews, auth } = useSelector((state) => state);
  const bookID = props.id;
  const getReviews = reviews.filter((review) => review.bookId === bookID);
  const book = props.book;

  const [showForm, setShowForm] = useState(false);

  const showEditForm = () => {
    setShowForm(true);
  };
  return (
    <div>
      <hr />
      <div>
        <h2>Reviews for {book}</h2>
        {getReviews.length >= 1
          ? getReviews.map((review) => {
              return (
                <div key={review.id} id="reviews">
                  <h3>{review.user.username}</h3>
                  {[...Array(5)].map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        size={25}
                        color={
                          review.rating >= index + 1 ? '#FFBA5A' : '#a9a9a9'
                        }
                      />
                    );
                  })}{' '}
                  ({review.rating} stars)
                  <p>
                    Reviewed on{' '}
                    {dayjs(review.createdAt).format('MMMM, D YYYY').toString()}
                  </p>
                  <p>{review.text}</p>
                  <div id="buttons">
                    {auth.id === review.userId ? (
                      <div>
                        <button
                          type="submit"
                          value="Edit"
                          onClick={() => {
                            showEditForm();
                          }}
                        >
                          Edit
                        </button>
                        {showForm ? (
                          <EditReview
                            onClose={() => {
                              setShowForm(false);
                            }}
                            id={review.id}
                            text={review.text}
                            rating={review.rating}
                            bookId={bookID}
                            userId={review.userId}
                          />
                        ) : null}
                      </div>
                    ) : null}
                    {auth.id === review.userId || auth.isAdmin === true ? (
                      <div>
                        <button
                          onClick={() => {
                            dispatch(deleteReview(review));
                          }}
                        >
                          Delete Review
                        </button>
                      </div>
                    ) : null}
                  </div>
                  <hr />
                </div>
              );
            })
          : 'no reviews yet...be the first one to write a review!'}
      </div>
    </div>
  );
};

export default Review;
