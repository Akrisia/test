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
    const formatLabel = (number, singularLabel, pluralLabel) => {
        return number === 1 ? `${number} ${singularLabel}` : `${number.toLocaleString()} ${pluralLabel}`;
    }
    return (
        <li className={s.item}>
            <img className={s.logo} src={logo} alt='logo' width="76" height="22" />
            <img className={s.picture} src={picture} alt='abstract figures' width="308" height="168" />
            <div className={s.divider}>
                <img className={s.avatar} src={avatar} alt={name} width="62" height="62" />
            </div>
            <div className={s.text}>
                <span style={{fontWeight: 700, color: 'var(--accent-color)'}}>{name}</span>
                <span>{formatLabel(tweets, 'tweet', 'tweets')}</span>
                <span>{formatLabel(followersCount, 'follower', 'followers')}</span>
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