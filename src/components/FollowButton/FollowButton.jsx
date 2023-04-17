import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import s from './FollowButton.module.css';

export default function FollowButton({ id, followers, onFollowersChange }) {
    const [following, setFollowing] = useState(false);
    const [followersCount, setFollowersCount] = useState(followers);

    useEffect(() => {
        const followingLS = localStorage.getItem(`following-${id}`);
        const followersCountLS = localStorage.getItem(`followersCount-${id}`);
        if(followingLS !== null && followersCountLS !== null) {
            setFollowing(JSON.parse(followingLS));
            setFollowersCount(JSON.parse(followersCountLS));
        }
    }, [id]);
    
    const onFollowClick = (id) => {
        const newFollowersCount = following ? followersCount - 1 : followersCount + 1;
        localStorage.setItem(`following-${id}`, !following);
        localStorage.setItem(`followersCount-${id}`, newFollowersCount);
        setFollowing(!following);
        setFollowersCount(newFollowersCount);
        onFollowersChange(newFollowersCount);      
    };

    return (
        <button type="button"
                className={s.followButton}
                onClick={() => onFollowClick(id)}
                style={{ backgroundColor: following ? 'var(--accent-color)' : 'var(--secondary-color)' }}>
            {following ? 'Following' : 'Follow'}
        </button>
    )
};

FollowButton.propTypes = {
    id: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    onFollowersChange: PropTypes.func.isRequired
};

