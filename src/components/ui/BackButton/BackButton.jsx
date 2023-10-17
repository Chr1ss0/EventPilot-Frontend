import { useNavigate } from 'react-router-dom';
import backImg from '../../assets/img/Back.svg';
import style from './BackButton.module.css';

function BackButton() {
  const navigate = useNavigate();

  return (
    <>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={style.button}
      >
        <img src={backImg} alt="go to previous page" />
      </button>
    </>
  );
}

export default BackButton;
