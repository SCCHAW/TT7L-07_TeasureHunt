import axios from "axios";
import React , {useState} from "react";
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import DialogBoxSuccess from "../dialogbox/dialogSuccess";
import DoubleDialogBox from "../dialogbox/doubleDiologBox";
import DialogBoxYesNo from "../dialogbox/dialogBoxYesNo";



const AdminProductDetail =() => {

    const location = useLocation();
    const { product } = location.state || {};
    console.log("check", product)
    const navigate = useNavigate();

    const [isSuccessMessage, setIsSuccessMessage] = useState("");
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);


    const handleCancel =() => {
        navigate("/adminViewProduct")
    }

    const handleDelete = async () =>{
        try {
          setIsFirstModalOpen(true)

        } catch (error) {
            
        }
    }
      
    
    
    const deleteProduct = async ()=> {
      try {
                     const response = await axios.delete(`http://localhost:3000/api/products/${product.id}`)
             if (response.data){
                 setIsSuccessMessage(response.data.message)
             
             }
      } catch (error) {
        console.log(error.message) 
      }
    }




      const handleCloseSecondModal =() => {
        setIsSecondModalOpen(false);
       handleCancel()
      }



      const handleFirstClick =()=> {
        setIsFirstModalOpen(false)
        deleteProduct()
        setIsSecondModalOpen(true)
      }

      const handleSecondClick =()=> {
        setIsFirstModalOpen(false)
      }


    return (
        <div>
<div>
<ul className="nav nav-pills justify-content-center">
  <li className="nav-item">
    <a className="nav-link active nav-link disabled" aria-disabled="true" style={{ margin:20, textAlign:"center", height:70, fontSize:30}} >{product.productName}</a>
  </li></ul>
      {product ? (
        
        <div className="card mb-3" style={{ maxWidth: "50%", margin: "auto" }}>
    <img style={{ width: "100%", margin: "auto" }} src={product.productImage} className="card-img-top" alt="Product Image" />
    <div className="card-body">
        <h5 className="card-title">{product.productName}</h5>
        <p className="card-text">{product.productDescription}</p>
        <h6 >Price: RM {product.productPrice} : 00 </h6>
            <h6 style={{marginBottom: 10}}>Year: {product.productYear}</h6>

        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        <div className="d-flex justify-content-between">
            <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button>
            <div>
                <button type="button" className="btn btn-primary me-2">Update</button>
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    </div>
</div>
      
      ) : (
        <p>No product details available.</p>
      )}
    </div>

    <DialogBoxSuccess
        dialogTitle={"Success"}
        dialogMessage={isSuccessMessage.message || isSuccessMessage}
        isModalOpen={isSecondModalOpen}
        handleCloseModal={handleCloseSecondModal}
      />

      <DialogBoxYesNo 
      modalTitle={"Info"}
      description={"Do you wish to delete this product?"}
      firstButtonText={"Yes"}
      secondtButtonText={"No"}
      handleFirstClick={handleFirstClick}
      handleSecondClick={handleSecondClick}
      isDialogOpenYesNo={isFirstModalOpen}

      />

{/* <DoubleDialogBox firstTittle={"Delete product"} firstDescription={"Do you wish to delete this product?"} firstButtonText={"Yes"} secondButtonText={"No"} 
isModalOpen={isModalOpen} handleCloseFirstModal={handleCloseFirstModal} handleDeleteModal={handleDelete}
/> */}


        </div>
    )
}

export default AdminProductDetail 