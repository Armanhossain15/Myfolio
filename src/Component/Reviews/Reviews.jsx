import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('./reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    const settings = {
        infinite: true,
        spaceBetween: 30,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
    };

    return (
        <div className="max-w-6xl mx-auto my-24">
            <div className="slider-container  space-x-3">
                <Slider {...settings}>
                    {
                        reviews.map(review => <div key={review.id} className="bg-white shadow-md p-6 rounded-lg  ">
                            <h3>{review.text}</h3>
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;
