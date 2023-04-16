import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import s from './FollowButton.module.css';

export default function FollowButton() {

    return (
        <button type="button" className={s.followButton} onClick={() => {
        }}>
            Follow
        </button>
    )
};

FollowButton.propTypes = {
};

