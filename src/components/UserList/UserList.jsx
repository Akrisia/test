import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import getUsers from '../../services/GetUsers';
import getAllUsers from "../../services/GetAllUsers";
import UserListItem from '../UserListItem';
import s from './UserList.module.css';

export default function UserList({ page, handleUsers }) {
    const [users, setUsers] = useState([]);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getUsers(page)
        .then(response => {
            setUsers(users =>
                page === 1
                ? response.data
                : [...users, ...response.data]);
        })
        .catch(error => error.message)
        .finally(() => setLoading(false));
    }, [page]);

    useEffect(() => {
        getAllUsers()
        .then(response => {
            setTotal(total => response.data.length);
        })
        .catch(error => error.message)
    }, []);

    useEffect(() => {
        handleUsers({ users, total, loading, page });
    }, [users, total, loading, page, handleUsers]);

    return (
        <ul className={s.list}>
            {users.map(({ id, user, tweets, followers, avatar }) => {
                return <UserListItem
                key={id}
                id={id}
                name={user}
                tweets={tweets}
                followers={followers}
                avatar={avatar}
                />
            })}
        </ul>
    );
};

UserList.propTypes = {
    page: PropTypes.number.isRequired,
    handleUsers: PropTypes.func.isRequired
};