

const FoodCard = ({title}) => {
    return (
        <div className="bg-[url('../../src/assets/home/chef-service.jpg')] h-[570px]   flex items-center mt-12">
            <div className="text-center bg-white w-[986px] mx-auto   p-16 rounded ">
                <h1 className="text-4xl">{title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default FoodCard;