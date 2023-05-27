import SectionTitle from "../../../components/SectionTitle"
import featuredImg from "../../../assets/home/featured.jpg"
import './featured.css'
const Featured = () => {
  return (
    <div className="featured-item bg-fixed  text-white pt-8 my-20">
      <SectionTitle
        heading="Featured item"
        subHeading="Check It Out"
      ></SectionTitle>
      <div className="md:flex bg-black bg-opacity-50 justify-center items-center gap-12  pb-20 pt-16 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div>
          <div>
            <p>Aug 20 2029</p>
            <p className="where can i get some?"></p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
              voluptate consectetur eum cumque est similique unde. Laboriosam
              doloribus, dolor voluptatibus facilis cupiditate accusamus eveniet
              possimus laborum facere, veniam error recusandae necessitatibus
              amet? Praesentium eius corporis laboriosam? Repellat, ab hic?
            </p>
            <div className="btn btn-outline border-0 border-b-4 mt-4">Order Now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
