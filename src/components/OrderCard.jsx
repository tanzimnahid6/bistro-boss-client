const OrderCard = ({item}) => {
    const {name,image,price,recipe} = item
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <p className="bg-slate-500 text-white p-1 absolute right-0 top-0 m-2 rounded">{price}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline bg-slate-100 text-orange-500 border-0 border-b-4 mt-4">Add To card</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderCard
