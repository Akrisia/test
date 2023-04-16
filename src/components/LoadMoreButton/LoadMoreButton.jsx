import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import s from './LoadMoreButton.module.css';

export default function LoadMoreButton({ page, onLoadMore} ) {
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        setCurrentPage(page)
    }, [page]);

    return (
        <button type="button" className={s.button} onClick={() => {
            setCurrentPage(currentPage => currentPage + 1);
            onLoadMore(currentPage);
        }}>
            Load more
        </button>
    )
};

LoadMoreButton.propTypes = {
    page: PropTypes.number.isRequired,
    onLoadMore: PropTypes.func.isRequired
};

