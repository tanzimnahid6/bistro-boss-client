
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";

import MenuCategory from "../Menu/MenuCategory";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item=>item.category==='popular')
 

    return (
        <section className="mb-12">
            <SectionTitle heading="From our Menu" subHeading="Popular Items"></SectionTitle>
            <MenuCategory items={popular}></MenuCategory>
        </section>
    );
};

export default PopularMenu;