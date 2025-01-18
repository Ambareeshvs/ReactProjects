import reactLogo from "../assets/react.svg"

function Header()
{
    return(
        <div className="align-middle flex justify-center h-36">
            <img src={reactLogo} alt="React Logo" className="p-3 mt-1 mb-1"/>
        </div>
    )
}

export default Header;