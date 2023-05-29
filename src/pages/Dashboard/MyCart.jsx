import useCart from "../../Hooks/useCart"
import { BsFillTrashFill } from "react-icons/bs"
import PageTitle from "../../components/PageTitle/PageTitle"
import Swal from "sweetalert2"

const MyCart = () => {
  const [refetch, cart] = useCart()
  console.log(cart)
  const total = cart.reduce((sum, item) => item.price + sum, 0)

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/carts/${id}`,{
            method:"DELETE",
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                refetch()
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
            }
        })

      }
    })
  }
  return (
    <>
      <PageTitle className="invisible" title={"My Cart"}></PageTitle>
      <div className="w-full">
        <div className="uppercase  flex justify-evenly items-center h-10 font-bold">
          <h1>Total item: {cart.length}</h1>
          <h1>Total price : ${total}</h1>
          <button className="btn btn-warning btn-sm">Pay</button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {cart.map((row, index) => (
                <tr key={row._id}>
                  <td>
                    <h1>{index + 1}</h1>
                  </td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={row.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {row.name}
                    <br />
                  </td>
                  <td className="text-end">${row.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(row._id)}
                      className="btn btn-ghost bg-red-400  text-white "
                    >
                      <BsFillTrashFill size={20}></BsFillTrashFill>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default MyCart
