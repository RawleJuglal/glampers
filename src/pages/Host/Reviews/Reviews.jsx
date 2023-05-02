import React from "react"
import ReviewGraph from '../../../assets/images/ratings-graph.png'
import { BsStarFill } from "react-icons/bs"
import './Reviews.css'

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    
    return (
        <section className="--reviews-page-container limit-width">
            <div className="--reviews-top-text flex flex-wrap flex-align-center">
                <h2 className="XXXIIpt bold black">Your reviews</h2>
                <p className="grey">
                    Last <span className="underline medium">30 days</span>
                </p>
            </div>
            <img
                className="--reviews-graph"
                src={ReviewGraph}
                alt="Review graph"
            />
            <h3 className="XVIIIpt bold black">Reviews (2)</h3>
            {reviewsData.map((review) => (
                <div key={review.id} className="--reviews-testimony-container">
                    <div className="review">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="review-star" key={i} />
                        ))}
                        <div className="--reviews-info flex flex-align-center">
                            <p className="name semi-bold">{review.name}</p>
                            <p className="date grey">{review.date}</p>
                        </div>
                        <p className="--reviews-testimony medium black">{review.text}</p>
                    </div>
                    <hr />
                </div>
            ))}
        </section>
    )
}