import { useState } from 'react';
import PropTypes from 'prop-types';
import logo from '../../images/logo.png';
import picture from '../../images/picture.png';
import FollowButton from '../FollowButton';
import s from './UserListItem.module.css';

export default function UserListItem({ id, name, tweets, followers, avatar }) {
    const [followersCount, setFollowersCount] = useState(followers);
    const handleFollowersChange = (newCount) => {
        setFollowersCount(newCount);
    }
    return (
        <li className={s.item}>
            <img className={s.logo} src={logo} alt='logo'/>
            <img className={s.picture} src={picture} alt='abstract figures'/>
            <div className={s.divider}>
                <div className={s.stripe}></div>
                <img className={s.avatar} src={avatar} alt={name}/>
            </div>
            <div className={s.text}>
                <span style={{fontWeight: 700, color: 'var(--accent-color)'}}>{name}</span>
                <span>{tweets === 1 ? tweets + ' tweet' : tweets.toLocaleString() + ' tweets'}</span>
                <span>{followersCount === 1 ? followersCount + ' follower' : followersCount.toLocaleString() + ' followers'}</span>
            </div>
            <FollowButton id={id} followers={followersCount} onFollowersChange={handleFollowersChange} />
        </li>
    )
};

UserListItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    tweets: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired
};