import React from "react";
import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
    return (
        <section className="max-container">
            <h3 className="font-bold font-montserrat text-4xl text-center">
                What are <span className="text-coral-red">Customers</span> say?
            </h3>
            <p className="info-text m-auto mt-4 text-center max-w-lg">
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>
            <div className="flex flex-1 justify-evenly mt-24 items-center max-lg:flex-col gap-14">
                {reviews.map((review) => (
                    <ReviewCard key={review.customerName} {...review}/>
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;
