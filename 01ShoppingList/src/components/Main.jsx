import List from "./List";
import shoppingList from "../data/data";
import Form from "./Form";


function Main()
{
    return(
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className="container mx-auto p-4">
                    <div className="overflow-x-auto">
                        <div className="min-w-full">
                            <Form />
                        </div>
                        <table className="min-w-full bg-black border border-black-300 mt-2">
                            <thead className="bg-gray-200">
                                <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">#</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Product Name</th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Product Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    shoppingList.map((item) => (<List item = {item} key = {item.id}/>))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
        
    )
}

export default Main;