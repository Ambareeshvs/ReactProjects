import Card from "./Card";
import { data } from "../data/data";

function Main()
{
    return(
        <div className="sm:grid grid-cols-4">
            {data.map((langCard,index) => (<Card {...langCard} key = {index}/>))}
        </div>
    )
}

export default Main;