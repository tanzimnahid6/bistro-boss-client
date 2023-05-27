import Cover from "../../Shared/Cover"
import PageTitle from "../../../components/PageTitle/PageTitle"
import menuImg from "../../../assets/menu/banner3.jpg"

import useMenu from "../../../Hooks/useMenu"
import SectionTitle from "../../../components/SectionTitle"
import MenuCategory from "./MenuCategory"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"


const Menu = () => {
  const [menu] = useMenu([])


  const dessert = menu.filter((item) => item.category === "dessert")
  const pizza = menu.filter((item) => item.category === "pizza")
  const salad = menu.filter((item) => item.category === "salad")
  const offered = menu.filter((item) => item.category === "offered")

  return (
    <div>
      <PageTitle title={"Menu"}></PageTitle>
      <Cover title={"our menu"} img={menuImg}></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading={"Don't miss out"}
        heading={"Today's offer"}
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCategory  items={offered}></MenuCategory>
      {/* dessert menu item */}
      <MenuCategory
        items={dessert}
        title={"desert"}
        coverImg={dessertImg}
      ></MenuCategory>
      {/* Pizza menu item */}
      <MenuCategory
        items={pizza}
        title={"pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>
         {/* salad menu item */}
         <MenuCategory
        items={salad}
        title={"salad"}
        coverImg={saladImg}
      ></MenuCategory>
    </div>
  )
}

export default Menu
