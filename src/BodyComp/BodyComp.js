import "./BodyComp.css";
import { foodCoutrts } from "../foodcourts";
import { useNavigate } from "react-router-dom";
 

const BodyComp = () => {

  const  navigate = useNavigate()

  const getMenu = (id) =>{
    navigate(`/MenuComp/${id}`)
  }

  return (
    <div class="Menus">
      {foodCoutrts.map((shop) => (
          <div class="box">
            <h1>{shop.foodCourtName}</h1>
            <img src={shop.foodImage} width={200} height={200} />
            <p>
              {shop.description}
            </p>
            <button className = "getMenu" onClick={()=>getMenu(shop.id)}>Get Menu</button>
          </div>
        ))
      }
    </div>
  );
};

export default BodyComp;