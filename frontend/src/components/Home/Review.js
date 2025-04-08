export default function Review(props){

    const stars = function star(){
        let a = [];
        for (let i = 0 ; i < props.reviews.stars ; i++){
            a.push(<i className="bi bi-star-fill"></i>);
        }
        return (<div className="star-div">{a}</div>)
    }

    return (
        <div className="review-section">
            <div className = "review-card">
                <p className="review-name">{props.reviews.name}</p>
                {stars()}
                <p className="review-text">{props.reviews.review}</p>
            </div>
        </div>
    )
}