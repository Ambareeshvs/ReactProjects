import { useState } from "react";

function Card({name, img, options})
{
    const[show,setShow] = useState(false);
    
    return(
        <div onClick={() => setShow(!show)}>
            {!show ?
                <div className="p-2 mt-2 mb-2">
                    <figure className="rounded-xl p-3 bg-white h-48">
                        <img className="w-28 h-28 rounded-full mx-auto" src={img} alt="Language logo"/>
                        <div className="pt-3 space-y-4">
                            <figcaption className="font-medium">
                                <div className="text-center text-stone-900">
                                    {name}
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                </div>
            :
                <div className="p-2 mt-2 mb-2">
                    <figure className="rounded-xl p-3 bg-cyan-500 h-48">
                        <div className="pt-3 space-y-4 font-medium align-center">
                            <ul className="text-center">
                                {options.map((opt) => (<li>{opt}</li>))}
                            </ul>
                        </div>
                    </figure>
                </div>
            }
        </div>
    )
}

export default Card;