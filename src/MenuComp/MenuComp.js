import { useParams } from "react-router-dom";
import { foodCoutrts } from "../foodcourts"
import { useEffect } from "react";
import Header from "../HeaderComp/Header";
import Footer from "../FooterComp/Footer";

const MenuComp = () => {

    const params = useParams();

    const shop = foodCoutrts.find((item) => item.id.toString() === params.id)

    useEffect(() => {

    }, [])

    return (
        <>
            <h1>Welcome to Maha's food court</h1>
            <p className="shopDescription">
                  {shop.description}
                </p>
            <h3>Please find the menu for {shop.foodCourtName}</h3>
            

            <ul>
                {shop.menu.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
            <Footer />
        </>
    )
}

export default MenuComp;