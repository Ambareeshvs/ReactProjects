import { useState } from "react";
import PropTypes from "prop-types";

function Form({handleAddShoppingItem})
{
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState("");

    const submitForm = (e) => {
        e.preventDefault();

        if(product.trim())
        {
            const newShopList = {
                id: Date.now(), 
                product: product.trim(),
                quantity: quantity, 
                packed: false
            }
            handleAddShoppingItem(newShopList);
            setProduct("");
            setQuantity(1);
        }
    };

    return(
        <form className="bg-white rounded-lg shadow-md p-6 gap-1 flex justify-end" onSubmit={submitForm}>   
            <select className="p-1 ring-1 mr-1" value={quantity} onChange={(e) => {setQuantity(Number(e.target.value))}}>
                {
                    [...Array(25)].map((_,index) => (<option value={index + 1} key={index + 1}> {index + 1} </option>))
                }
            </select>
            <input type="text" 
                placeholder="Enter the product" 
                className="p-1 rounded-md ring mr-1" 
                value={product} 
                onChange={(e) => {setProduct(e.target.value)}}/>
            <button className="rounded-md px-2 py-1 text-base font-medium text-green-300 bg-green-700 hover:text-white">Add</button>
        </form>
    );
}

Form.propTypes = {
    handleAddShoppingItem : PropTypes.shape({
        id : PropTypes.number.isRequired,
        product : PropTypes.string.isRequired,
        quantity : PropTypes.number.isRequired,
        packed : PropTypes.bool.isRequired
    }).isRequired
};

export default Form;