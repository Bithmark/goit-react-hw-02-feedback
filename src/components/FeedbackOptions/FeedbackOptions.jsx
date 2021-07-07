import css from "./FeedbackOptions.module.css"

const FeedbackOptions = ({onChangeStatistics}) => {
    return (<div className={css.div}>
        <button className={css.btn} onClick={onChangeStatistics} name="good">Good</button>
        <button className={css.btn} onClick={onChangeStatistics} name="neutral">Neutral</button>
        <button className={css.btn} onClick={onChangeStatistics} name="bad">Bad</button>
    </div>)
}

export default FeedbackOptions