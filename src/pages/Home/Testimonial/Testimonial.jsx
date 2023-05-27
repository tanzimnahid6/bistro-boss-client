import SectionTitle from "../../../components/SectionTitle"
import { Swiper, SwiperSlide } from "swiper/react"
//rating
import { Rating } from "@smastrom/react-rating"

import "@smastrom/react-rating/style.css"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper"
import { useEffect, useState } from "react"

const Testimonial = () => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }, [])
  return (
    <section className="my-16">
      <SectionTitle
        subHeading={"What out client says..."}
        heading="Testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id} review={review}>
            <div className="my-20 mx-24 flex flex-col items-center text-center">
            <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly 
              />
            
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonial
