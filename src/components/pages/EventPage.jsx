import LikedEvents from '../ui/LikedEvents.jsx';
import MainButton from '../ui/MainButton.jsx';
import style from './EventPage.module.css';

function EventPage() {
  return (
    <>
      <main className={style.main}>
        <article className={style.upper}>
          <h1>Upcoming Events</h1>
          <LikedEvents />
        </article>
        <article className={style.middle}>
          <div className={style.noEvents}>
            <h2>No Upcoming Events</h2>
            <p>There are no Events yet!</p>
          </div>
        </article>
        <article className={style.bottom}>
          {/* <MainButton>search events</MainButton> */}
        </article>
      </main>
    </>
  );
}

export default EventPage;
