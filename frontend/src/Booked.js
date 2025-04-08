import WhiteLanding from "./components/WhiteLanding.js"

export default function Booked(){
    return (
        <>
            <WhiteLanding />
            <div className="book-confirm">
                <i className="bi bi-check check-confirm"></i>
                <h1 className="booked-text">You're appointment is confirmed!</h1>
            </div>
        </>
    )
}