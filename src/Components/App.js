import React, { useEffect } from 'react';
import { HiBookOpen, HiUsers } from 'react-icons/hi';
import {
  RiShoppingCart2Fill,
  RiLogoutBoxRLine,
  RiLoginBoxLine,
} from 'react-icons/ri';
import { MdReorder, MdAccountBox } from 'react-icons/md';
import Home from './Home';
import Login from './Login';
import Books from './Book/Books';
import Book from './Book/Book';
import Cart from './Cart/Cart';
import Users from './User/Users';
import Orders from './Cart/Orders';
import OrderSuccess from './Cart/OrderSuccess';
import EditUser from './User/EditUser';
import AllUsers from './User/AllUsers';
import EditBook from './Book/EditBook';
import CreateAccount from './User/CreateAccount';
import CreateBook from './Book/CreateBook';
import EditReview from './Review/EditReview';
import { useSelector, useDispatch } from 'react-redux';
import {
  loginWithToken,
  fetchCart,
  fetchBooks,
  fetchReviews,
  fetchUsers,
  logout,
} from '../store';
import { Link, Routes, Route } from 'react-router-dom';
import OrderCancelled from './Cart/OrderCancelled';

const App = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginWithToken());
    dispatch(fetchBooks());
    dispatch(fetchReviews());
  }, []);

  useEffect(() => {
    if (auth.id) {
      dispatch(fetchCart());
    }
  }, [auth]);

  useEffect(() => {
    if (auth.isAdmin) {
      dispatch(fetchUsers());
    }
  }, [auth]);

  return (
    <div>
      {!!auth.id ? (
        <div>
          <nav>
            <Link to="/" className="wolfe_books">
              <h2>Wolfe Books</h2>
            </Link>
            <div className="nav-links">
              <Link to="/books">Store</Link>
              <HiBookOpen size={20} />
            </div>
            <div className="nav-links">
              <Link to="/cart">Cart</Link>
              <RiShoppingCart2Fill size={15} />
            </div>
            <div className="nav-links">
              <Link to="/orders">Orders</Link>
              <MdReorder size={20} />
            </div>
            <div className="nav-links">
              <Link to={`/users/${auth.id}`}>Account</Link>
              <MdAccountBox size={18} />
            </div>
            <div className="nav-links">
              <Link to="#" onClick={() => dispatch(logout())}>
                Logout
              </Link>
              <RiLogoutBoxRLine size={18} />
            </div>

            {auth.isAdmin ? (
              <div className="nav-links">
                <Link to="/users">All Users</Link>
                <HiUsers size={20} />
              </div>
            ) : null}
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/search/:filter" element={<Books />} />
            <Route path="/books/:id" element={<Book />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path='/order-cancelled' element={<OrderCancelled />} />
            <Route path="/users/:id" element={<Users />} />
            <Route path="/users/:id/edit" element={<EditUser />} />
            <Route path="/createaccount" element={<CreateAccount />} />
            <Route path="/users" element={<AllUsers />} />
            <Route path="/review/edit/:id" element={<EditReview />} />
            {auth.isAdmin ? (
              <Route path="/books/:id/edit" element={<EditBook />} />
            ) : null}
            {auth.isAdmin ? (
              <Route path="/createbook" element={<CreateBook />} />
            ) : null}
          </Routes>
          <footer className="footer">
            <p>HOURS: 12-8PM DAILY</p>
            <p>
              Wolfe BOOKS
              <br></br>
              99 AVENUE A<br></br>
              NEW YORK, NY 10009
              <br></br>
              (646) 370-1666
              <br></br>
              INFO@WOLFEBOOKS.COM
            </p>
          </footer>
        </div>
      ) : (
        <div>
          <nav>
            <Link to="/" className="wolfe_books">
              <h2>Wolfe Books</h2>
            </Link>
            <div className="nav-links">
              <Link to="/books">Store</Link>
              <HiBookOpen size={22} />
            </div>
            <div className="nav-links">
              <Link to="/login">Log in</Link>
              <RiLoginBoxLine size={20} />
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/search/:filter" element={<Books />} />
            <Route path="/books/:id" element={<Book />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createaccount" element={<CreateAccount />} />
          </Routes>
          <footer className="footer">
            <p>HOURS: 12-8PM DAILY</p>
            <p>
              Wolfe BOOKS
              <br></br>
              99 AVENUE A<br></br>
              NEW YORK, NY 10009
              <br></br>
              (646) 370-1666
              <br></br>
              INFO@WOLFEBOOKS.COM
            </p>
          </footer>
        </div>
      )}
    </div>
  );
};

// return (
//   <div>
//     <nav>
//       <Link to="/" className="wolfe_books">
//         <h2>Wolfe Books</h2>
//       </Link>
//       <Link to="/books">Store</Link>
//       {auth.id ? (
//         <Link to={`/users/${auth.id}`}>Account</Link>
//       ) : (
//         <Link to="/login">Log in</Link>
//       )}
//       {auth.id ? <Link to="/cart">Cart</Link> : null}
//       {auth.isAdmin ? <Link to="/users">All Users</Link> : null}
//     </nav>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/books" element={<Books />} />
//       <Route path="/books/:id" element={<Book />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/users/:id" element={<Users />} />
//       <Route path="/users/:id/edit" element={<EditUser />} />
//      <Route path="/createaccount" element={<CreateAccount />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/users" element={<AllUsers />} />
//       {auth.isAdmin ? (
//         <Route path="/books/:id/edit" element={<EditBook />} />
//       ) : null}
//     </Routes>
//     <footer className="footer">
//       <p>HOURS: 12-8PM DAILY</p>
//       <p>
//         Wolfe BOOKS
//         <br></br>
//         99 AVENUE A<br></br>
//         NEW YORK, NY 10009
//         <br></br>
//         (646) 370-1666
//         <br></br>
//         INFO@WOLFEBOOKS.COM
//       </p>
//     </footer>
//   </div>
// );

export default App;
