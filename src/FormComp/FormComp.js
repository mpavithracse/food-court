import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Header from '../HeaderComp/Header';
import './FormComp.css'
import { use, useState } from 'react';
import { foodCoutrts } from '../foodcourts';

const FromComp = () =>{
  const [shopName, setShopName ] = useState("");
  const [shopImage, setShopImage] = useState(null);
  const [description, setDescription] = useState("");
  const [menu, setMenu] = useState("");
  const [shop, setShop] = useState();

  const handleMenu = () =>{
    let values = menu;
    const menulist = values?.split(",").map((item) => item.trim());
    let shopvalue = {id: foodCoutrts.length+11,
      foodCourtName: shopName,
      foodImage : shopImage,
      description : description,
      menu:menulist
    }
     
    foodCoutrts.push(shopvalue);

    console.log("foodCoutrts", foodCoutrts)

  }






    return(<>
    <Header/>
    <div className='FormComp'>
    <h2> Welcome to Maha's Food Court</h2>
    <h4>Join your business to our community</h4>
     <Form className='FoodCourtForm'>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Shop Name</Form.Label>
        <Form.Control type="text"  onChange={(e)=>setShopName(e.target.value)} placeholder="Shop Name" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Shop Image </Form.Label>
        <Form.Control type="text" onChange={(e)=>setShopImage(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description about the shop</Form.Label>
        <Form.Control as="textarea" onChange={(e)=>setDescription(e.target.value)} rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Add Menu</Form.Label>
        <Form.Control type="text" onChange={(e)=>setMenu(e.target.value)} placeholder="e.g., apple, banana, cherry" />
      </Form.Group>
    </Form>
    <Button variant="Success" onClick={()=>handleMenu()}> Add Shop</Button>
    </div>
    </>)
}

export default FromComp;