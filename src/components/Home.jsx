import { useState } from "react";
import Paras from "./Paras";
const Load = () => {
    const [paras , setParas] = useState(0);
    const [count, setCount] = useState(0);
    const generatePara = () => {
        if (paras > 10) {
            alert("Please generate between 1-10");
            return;
        }
        else if(paras < 1){
            alert("Please select a range first!");
            return;
        }
        setCount(paras);
    }
    return (
        <>
            <div className="w-[60%] items-center justify-center flex flex-col gap-4">
                <p className="text-3xl font-semibold text-white">Tired of Boring Lorem Ipsums?</p>
                <div className="w-full flex gap-2 items-center justify-center">
                    <input type = "number" min={0} max={10} value={paras} placeholder="please enter the Paragraphs" className="w-[30%] h-4 p-5 rounded-lg" onChange={(e) => setParas(e.target.value)}/>
                    <button className="p-2 bg-rose-400 text-white rounded-lg hover:bg-rose-600" onClick={generatePara}>Generate</button>
                </div>
                {
                    <Paras data={count}/>
                }
            </div>
        </>
    )
}
export {Load};