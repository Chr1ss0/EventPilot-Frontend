import { useNavigate } from 'react-router-dom';
import style from './BackButton.module.css';

function BackButton({ white = false }) {
  const navigate = useNavigate();

  return (
    <>
      <button
        type='button'
        onClick={() => navigate(-1)}
        className={style.button}>
        <svg
          width='18'
          height='16'
          viewBox='0 0 18 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M16.6167 7.99992H1.58337M1.58337 7.99992L8.00004 14.4166M1.58337 7.99992L8.00004 1.58325'
            stroke={white ? '#ffffff' : '#120D26'}
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
    </>
  );
}

export default BackButton;
