import { foodCoutrts } from "../foodcourts";
import Header from "../HeaderComp/Header";
import MenuComp from "../MenuComp/MenuComp";


const Menu = () =>{

    return(<>
    <Header/>
     <div class="Menus">
          {foodCoutrts.map((shop) => (
              <div class="box">
                <h1>{shop.foodCourtName}</h1>
                <img src={shop.foodImage} width={200} height={200} />
                <p>
                  {shop.description}
                </p>
                <button className = "getMenu">Get Menu</button>
              </div>
            ))
          }
        </div>
    </>)
}

export default Menu;