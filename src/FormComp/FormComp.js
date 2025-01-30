import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from "react-router-dom";
import './FormComp.css'
import { useContext, useEffect, useState } from 'react';
import { foodCoutrts } from '../foodcourts';
import { FoodCourtContext } from '../FoodCourtContext';

const FromComp = () =>{
  const [shopName, setShopName ] = useState("");
  const [shopImage, setShopImage] = useState(null);
  const [description, setDescription] = useState("");
  const [menu, setMenu] = useState("");
  const [shop, setShop] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const {foodCourt, setFoodCourt} = useContext(FoodCourtContext);
  const selectedShop = params.id !== undefined? foodCourt.find((item) => item.id.toString() === params.id): {};


  useEffect(()=>{
    if(params.id!==undefined){
    setShopName(selectedShop.foodCourtName);
    setShopImage(selectedShop.foodImage);
    setDescription(selectedShop.description);
    setMenu(selectedShop.menu.join(','));
    }
  },[])


  const handleMenu = () =>{
    let values = menu;
    console.log(menu)
    const menulist = values?.split(",").map((item) => item.trim());
    let shopvalue = {id: foodCoutrts.length+11,
      foodCourtName: shopName,
      foodImage : shopImage,
      description : description,
      menu:menulist
    }
    foodCoutrts.push(shopvalue);
    navigateToMenu();
  }

  const updateShop = () =>{
    let values = menu;
    const menulist = values?.split(",").map((item) => item.trim());
    let shopvalue = {id: foodCoutrts.length+11,
      foodCourtName: shopName,
      foodImage : shopImage,
      description : description,
      menu:menulist
    }
    let updated = foodCourt.filter((shop)=>shop.id.toString()!==params.id)
    setFoodCourt([...updated,shopvalue]);
    navigateToMenu();
  }

  
  const navigateToMenu = ()=>{
    navigate(`/Menu`)
  }


    return(<>
    <div className='FormComp'>
    <h2> Welcome to Maha's Food Court</h2>
    <h4>Join your business to our community</h4>
     <Form className='FoodCourtForm'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Shop Name</Form.Label>
        <Form.Control type="text"  value={shopName} onChange={(e)=>setShopName(e.target.value)} placeholder="Shop Name" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Shop Image </Form.Label>
        <Form.Control type="text" value={shopImage}onChange={(e)=>setShopImage(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description about the shop</Form.Label>
        <Form.Control as="textarea" value={description} onChange={(e)=>setDescription(e.target.value)} rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Add Menu</Form.Label>
        <Form.Control type="text" value={menu} onChange={(e)=>setMenu(e.target.value)} placeholder="e.g., apple, banana, cherry" />
      </Form.Group>
    </Form>
    {params.id===undefined?
    <Button variant="Success" onClick={()=>handleMenu()}>Add Shop </Button>:
    <Button variant="Success" onClick={()=>updateShop()}>Update Shop </Button>}
    </div>
    </>)
}

export default FromComp;