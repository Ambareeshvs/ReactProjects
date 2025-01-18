import PropTypes from 'prop-types';

function List({item, handleDltShoppingItem, handleUpdateShoppingList})
{
    const { id, product, quantity, packed } = item;

    return(
        <tr className="odd:bg-white even:bg-gray-100">
            <td className="px-4 py-2 whitespace-nowrap border-b">{id}</td>
            <td className="px-4 py-2 whitespace-nowrap border-b">{product}</td>
            <td className="px-4 py-2 text-center whitespace-nowrap border-b">{quantity}</td>
            <td className="px-4 py-2 whitespace-nowrap border-b">
                { packed ?
                    <div className="flex gap-1">
                        <button className="rounded-md px-1 py-1 text-base font-medium text-blue-300 bg-blue-700 hover:text-white">Packed Already</button>
                        <button className="rounded-md px-1 py-1 text-base font-medium text-red-300 bg-red-700 hover:text-white" onClick={() => handleDltShoppingItem(item.id)}>Clear</button>
                    </div>
                    :
                    <div className="flex gap-1">
                        <button className="rounded-md px-2 py-1 text-base font-medium text-green-300 bg-green-700 hover:text-white" onClick={() => handleUpdateShoppingList(item.id)}>Done</button>
                        <button className="rounded-md px-2 py-1 text-base font-medium text-red-300 bg-red-700 hover:text-white" onClick={() => handleDltShoppingItem(item.id)}>Clear</button>
                    </div>
                }
            </td>
        </tr>
    )
}

List.propTypes = {
    item : PropTypes.shape({
        id : PropTypes.number.isRequired,
        product : PropTypes.string.isRequired,
        quantity : PropTypes.number.isRequired,
        packed : PropTypes.bool.isRequired
    }).isRequired
};

export default List;