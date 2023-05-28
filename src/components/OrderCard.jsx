import { useContext } from "react"
import { AuthContext } from "../providers/AuthProvide"
import Swal from "sweetalert2"
import { useLocation, useNavigate } from "react-router-dom"
import useCart from "../Hooks/useCart"

const OrderCard = ({ item }) => {
  const [ refetch ] = useCart()

  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useContext(AuthContext)
  const { name, image, price, recipe, _id } = item
  // console.log(item);
  const handleAddToCart = (clickedItem) => {
    console.log("cliked item", clickedItem)

    if (user && user.email) {
      const orderItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      }
      console.log(orderItem)
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)

          if (data.insertedId) {
          refetch()
            Swal.fire("Food added  to the cart")
          }
        })
    } else {
      Swal.fire({
        title: "You have to login first",
        text: "Without login you can not add to cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Login!", "success")
          navigate("/login", { state: { from: location } })
        }
      })
    }
  }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p className="bg-slate-500 text-white p-1 absolute right-0 top-0 m-2 rounded">
            {price}
          </p>
          <div className="card-actions justify-center">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-outline bg-slate-100 text-orange-500 border-0 border-b-4 mt-4"
            >
              Add To card
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
