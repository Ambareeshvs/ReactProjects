import List from "./List";
import Form from "./Form";
import PropTypes from 'prop-types';

function Main({items, handleAddShoppingItem, handleDltShoppingItem})
{
    return(
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className="container mx-auto p-4">
                    <div className="overflow-x-auto">
                        <div className="min-w-full">
                            <Form handleAddShoppingItem = {handleAddShoppingItem}/>
                        </div>
                        <table className="min-w-full bg-black border border-black-300 mt-2">
                            <thead className="bg-gray-200">
                                <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">#ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Product Name</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Product Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    items.map((items) => (<List item = {items} key = {items.id} handleDltShoppingItem = {handleDltShoppingItem}/>))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

Main.propTypes = {
    items : PropTypes.shape({
        id : PropTypes.number.isRequired,
        product : PropTypes.string.isRequired,
        quantity : PropTypes.number.isRequired,
        packed : PropTypes.bool.isRequired
    }).isRequired,
    handleAddShoppingItem : PropTypes.shape({
        id : PropTypes.number.isRequired,
        product : PropTypes.string.isRequired,
        quantity : PropTypes.number.isRequired,
        packed : PropTypes.bool.isRequired
    }).isRequired
};

export default Main;