export default function ReviewSplit(props){

    const stars1 = function stars(){
        let a = [];
        for (let i = 0 ; i < props.reviews.stars1 ; i++){
            a.push(<i className="bi bi-star-fill"></i>);
        }
        return (<div className="star-div">{a}</div>)
    }

    const stars2 = function stars(){
        let a = [];
        for (let i = 0 ; i < props.reviews.stars2 ; i++){
            a.push(<i className="bi bi-star-fill"></i>);
        }
        return (<div className="star-div">{a}</div>)
    }

    return (
        <div className = "review-section-split">
            <div className = "review-card-split">
                <p className="review-name-split">{props.reviews.name1}</p>
                {stars1()}
                <p className="review-text-split">{props.reviews.review1}</p>
            </div>
            <div className = "review-card-split">
                <p className="review-name-split">{props.reviews.name2}</p>
                {stars2()}
                <p className="review-text-split">{props.reviews.review2}</p>
            </div>

      </div>
    )
}