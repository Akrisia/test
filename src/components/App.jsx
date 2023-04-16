import { useState } from 'react';
import s from './App.module.css';
import UserList from './UserList';
import Loader from './Loader';
import LoadMoreButton from './LoadMoreButton';


export default function App() {
  const [users, setUsers] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleUsers = ({ users, total, loading, page }) => {
    setUsers(users);
    setTotal(total);
    setLoading(loading);
    setPage(page);
  };

  const onLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <div className={s.app}>
      <UserList page={page} handleUsers={handleUsers}/>
      {loading && <Loader/>}
      {users.length > 0 && users.length < total && <LoadMoreButton page={page} onLoadMore={onLoadMore}/>}
    </div>
  );
};
