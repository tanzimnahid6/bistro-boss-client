import { useParams } from "react-router-dom"
import orderCover from "../../../src/assets/shop/banner2.jpg"
import useMenu from "../../Hooks/useMenu"
import OrderCard from "../../components/OrderCard"
import Cover from "../Shared/Cover"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import { useState } from "react"
import PageTitle from "../../components/PageTitle/PageTitle"

const Order = () => {
  const [menu] = useMenu()
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex);
 
  const dessert = menu.filter((item) => item.category === "dessert")
  const pizza = menu.filter((item) => item.category === "pizza")
  const soup = menu.filter((item) => item.category === "soup")
  const salad = menu.filter((item) => item.category === "salad")

  return (
    <div>
    <PageTitle title={"Order Food"}></PageTitle>
      <Cover img={orderCover} title={"Order Food"}></Cover>
      <div className="text-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUP</Tab>
            <Tab>DESSERT</Tab>
          </TabList>

          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
              {salad.map((item) => (
                <OrderCard key={item._id} item={item}></OrderCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
              {pizza.map((item) => (
                <OrderCard key={item._id} item={item}></OrderCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
              {soup.map((item) => (
                <OrderCard key={item._id} item={item}></OrderCard>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid md:grid-cols-3 gap-10">
              {dessert.map((item) => (
                <OrderCard key={item._id} item={item}></OrderCard>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  )
}

export default Order
