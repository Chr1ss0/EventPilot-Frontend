import styles from "./FilterMenuTime.module.css"

function FilterMenuTime() {
    return(
    <div className={styles['filterMenuTimeWrapper']}>
        <div className={styles['headlineWrapper']}>
        <p>Time & Date</p>
        </div>
        <div className={styles['filterDayWrapper']}>
            <div  className={styles['filterDay']}>
                <p >Today</p>
            </div>
            <div className={styles['filterDayActive']}>
                <p>Tomorrow</p>
            </div>
            <div className={styles['filterDay']}>
                <p>This week</p>
            </div>
        </div>
        <div className={styles['DateWrapper']}>
        <form action="">
        <div>
            <input
            type="date"
            placeholder="Choose from calendar"
            />
        </div>
        </form>
        </div>
    </div>
    )
}

export default FilterMenuTime;
