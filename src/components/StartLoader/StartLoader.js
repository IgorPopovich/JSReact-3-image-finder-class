
import css from './StartLoader.module.css';

const StartLoader = () => {
    return (
        <div className={css.StartLoaderContainer}>
            <p className={css.loadingTitle}>Loading...</p>
            <div className={css.StartLoader}>
            </div>
        </div>
  );
};

export default StartLoader;