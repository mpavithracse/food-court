import { foodCoutrts } from "../foodcourts";
import Header from "../HeaderComp/Header";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import { useState } from "react";


const Menu = () =>{

  const [shops, setShops] = useState(foodCoutrts)

  const  navigate = useNavigate()
  const getMenu = (id) =>{
    navigate(`/MenuComp/${id}`)
  } 

  const deleteShop = (id) =>{

    const updatedShops = shops.filter(item => item.id !== id)
    setShops(updatedShops);

  }

  const UpdateDate = () => {
    navigate('/Form')
  }
    return(<>
     <div class="Menus">
          {shops.map((shop) => (
              <div class="box">
                <div className="boxHeader">
                <h1>{shop.foodCourtName}</h1>
                <img src ="edit-icon.png" onClick={UpdateDate} width={20} height={20}/>
                </div>
                <img src={shop.foodImage} width={200} height={200} />
                <p>
                  {shop.description}
                </p>
                <div className="boxHeader">
                <button className = "getMenu" onClick={()=>getMenu(shop.id)}>Get Menu</button>
                <img src="delete-icon.jpg"  onClick= {()=>deleteShop(shop.id)}width={20} height={20} />
                </div>
                </div>
            ))
          }
        </div>
    </>)
}

export default Menu;