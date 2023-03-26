import "./button.css"
const Button =({children,onClick}:{children:React.ReactNode, onClick:()=> void})=>{
    return(
        <button className="submit-btn" onClick={onClick}>
            {children}
        </button>
    )
}
export {Button}