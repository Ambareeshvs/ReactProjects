function Footer()
{
return(
    <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-8">
            <div>
                <h3 className="text-xl font-semibold mb-4 justify-center text-center">Wrap Up</h3>
                <div className="grid grid-cols-3 text-center">
                    <div className="flex justify-end gap-1">
                        <p className="text-gray-400">
                            Item Ordered : 
                        </p>
                        <span className="font-bold">123</span>
                    </div>
                    <div></div>
                    <div className="ml-2 flex gap-1">
                        <p className="text-gray-400">
                            Item Remaining : 
                        </p>
                        <span className="font-bold">123</span>
                    </div>
                </div>
            </div>
            
            </div>
            <div className="mt-8 text-center text-gray-500">
                Thank You.. Shop Again.
            </div>
        </div>
    </footer>                       

)
}

export default Footer;