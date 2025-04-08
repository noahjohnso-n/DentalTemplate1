import { Link } from "react-router-dom";

export default function ServiceBookButtons(){
    return (
        <div className = "book-full">
            <Link to = "/book">
                <button className = "book-on book-btn">BOOK ONLINE</button>
            </Link>
            <button className = "call-book book-btn">CALL TO BOOK</button>
        </div>
    )
}