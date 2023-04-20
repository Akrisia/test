import { useState } from 'react';
import { Link } from 'react-router-dom';
import UserList from '../../components/UserList';
import Loader from '../../components/Loader';
import LoadMoreButton from '../../components/LoadMoreButton';
import s from './TweetsView.module.css';


export default function TweetsView() {
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
    <>
      <Link to="/" className={s.link}>Back</Link>    
      <div className={s.tweets}>
        <UserList page={page} handleUsers={handleUsers}/>
        {loading && <Loader/>}
        {users.length > 0 && users.length < total && <LoadMoreButton page={page} onLoadMore={onLoadMore}/>}
      </div>
    </>
  );
};
