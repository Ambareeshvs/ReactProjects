function Footer({items})
{
    const totalItem = items.length;
    const itemRemaining = items.filter((item) => !item.packed).length;
    let shoppingPercentage;
    (totalItem - itemRemaining) == 0 ? shoppingPercentage = 0 : shoppingPercentage = (((totalItem - itemRemaining)/totalItem)*100).toFixed(2);

    return(
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 justify-center text-center">Wrap Up</h3>
                    <div className="grid grid-cols-3 text-center gap-1">
                        <div className="ml-2 flex gap-1">
                            <p className="text-gray-400">
                                Total Number of Items : 
                            </p>
                            <span className="font-bold">{totalItem}</span>
                        </div>
                        <div className="ml-2 flex gap-1">
                            <p className="text-gray-400">
                                Items Remaining : 
                            </p>
                            <span className="font-bold">{itemRemaining}</span>
                        </div>
                        <div className="ml-2 flex gap-1">
                            <p className="text-gray-400">
                                Shopping Percentage : 
                            </p>
                            <span className="font-bold">{shoppingPercentage}%</span>
                        </div>
                    </div>
                </div>
                
                </div>
                <div className="mt-8 text-center text-gray-500">
                    Thank You..! Shop Again.
                </div>
            </div>
        </footer>
    )
}

export default Footer;