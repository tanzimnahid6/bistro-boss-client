

const MenuItemCard = ({item}) => {
    const {image,name,price,recipe} = item
    return (
        <div className="flex space-x-4">
            <img style={{borderRadius:"5px 200px 200px 200px"}} className="uppercase w-[80px] h-[80px] m-2" src={image} alt="" />
            <div>
                <h3>{name}-------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItemCard;