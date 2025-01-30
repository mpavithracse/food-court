import Header from "../HeaderComp/Header";
import { useNavigate } from "react-router-dom";
import "./Menu.css";
import { useContext, useState } from "react";
import { FoodCourtContext } from "../FoodCourtContext";


const Menu = () =>{

  const {foodCourt, setFoodCourt} = useContext(FoodCourtContext);

  const  navigate = useNavigate()
  const getMenu = (id) =>{
    navigate(`/MenuComp/${id}`)
  } 

  const deleteShop = (id) =>{

    const updatedShops = foodCourt.filter(item => item.id !== id)
    setFoodCourt(updatedShops);

  }

  const UpdateDate = (id) => {
    navigate(`/Form/${id}`)
  }
    return(<>
     <div class="Menus">
          {foodCourt.map((shop) => (
              <div class="box">
                <div className="boxHeader">
                <h1>{shop.foodCourtName}</h1>
                <img src ="edit-icon.png" onClick={()=>UpdateDate(shop.id)} width={20} height={20}/>
                </div>
                <img src={shop.foodImage} width={200} height={200} />
              
                <div className="boxHeader">
                <button className = "getMenuButton" onClick={()=>getMenu(shop.id)}>Get Menu</button>
                <img src="delete-icon.jpg"  onClick= {()=>deleteShop(shop.id)}width={20} height={20} />
                </div>
                </div>
            ))
          }
        </div>
    </>)
}

export default Menu;