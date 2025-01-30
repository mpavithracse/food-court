import "./BodyComp.css";
import { foodCoutrts } from "../foodcourts";
import { useNavigate } from "react-router-dom";
 

const BodyComp = () => {

  const  navigate = useNavigate()

  const handleExploreClick = (id) =>{
    navigate(`/Menu`)
  }
  const handleAddStore = () =>{
    navigate(`/Form`)
  }

  return (
    <div className="foodCourtBody">
      <div className="foodCourtText">
      <h1>Order Healthy and <br/> Fresh Food Any Time</h1>
      <div className="searchbar">
        <input type="text" placeholder="Search" />
      </div>
      <button className="exploreButton" onClick={handleExploreClick}>Explore</button>
      <button className="exploreButton" onClick={handleAddStore}>Add Store</button>
      </div>
    </div>
  );
};

export default BodyComp;