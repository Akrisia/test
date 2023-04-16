import { Grid } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
    return (
        <div className={s.loader}>
            <Grid height="80" width="80" color="var(--accent-color)" ariaLabel='loading' />
        </div>
    )
};

