import axios from 'axios';

const books = (state = [], action)=> {
  if(action.type === 'SET_BOOKS'){
    return action.books;
  }
  return state;
};

const setBooks = books => {
    return {
        type: 'SET_BOOKS',
        books
    };
};

export const fetchBooks = ()=> {
    return async(dispatch)=> {
        const response = await axios.get('/books');
        dispatch(setBooks(response.data))
    };
};

export default books;