import para from "../utils/data";
const Paras = ({data}) => {
    const paragraphs = para.slice(0,data).map((para,index) => (
        <div key = {index} className="w-[100%] p-4 text-justify font-mono text-gray-900 shadow-xl rounded-lg bg-slate-200 bg-opacity-90 hover:cursor-pointer hover:scale-110 transition-all delay-100 ease-in-out " style={{ backdropFilter: 'blur(12px)' }}>
               <span className="text-xl">{index+1}.</span>  {para}
        </div>
    ))
    return (
        <>
            {paragraphs}
        </>
    )
}
export default Paras;