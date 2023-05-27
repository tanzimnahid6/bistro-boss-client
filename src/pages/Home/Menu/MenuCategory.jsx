import { Link } from "react-router-dom"
import Cover from "../../Shared/Cover"
import MenuItemCard from "../../Shared/MenuItem/MenuItemCard"

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <>
      {title && <Cover title={title} img={coverImg}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {items.map((item) => (
          <MenuItemCard item={item} key={item._id}></MenuItemCard>
        ))}
      </div>
      <div className="text-center m-8">
      {
        title &&   <Link to={`/order/${title}`}>
          <div className="btn btn-outline border-0 border-b-4 mt-4">
            Order Now
          </div>
        </Link>
      }
      </div>
    </>
  )
}

export default MenuCategory
