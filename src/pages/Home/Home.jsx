import FoodCard from "../../components/FoodCard"
import PageTitle from "../../components/PageTitle/PageTitle"
import Banner from "./Banner"
import Featured from "./Featured/Featured"
import PopularMenu from "./PopularMenu/PopularMenu"
import Testimonial from "./Testimonial/Testimonial"
import Category from "./category/Category"

const Home = () => {
  return (
    <div>
    <PageTitle title={"Home"}></PageTitle>
      <Banner></Banner>
    
      <Category></Category>
      <FoodCard title={'BISTRO BOSS'}></FoodCard>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  )
}

export default Home
