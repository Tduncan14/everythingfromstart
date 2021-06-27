import React,{useState,FC} from "react";

interface DisplayTextProps {
    getUserFullname:(username: string) => Promise<string>,
}

const DisplayText:FC<DisplayTextProps> =  ({getUserFullname}) => {


    const [text,setTxt] = useState("")
    const [msg, setMsg] = useState(" ");


    const onChangeTxt = (e:React.ChangeEvent<HTMLInputElement>) => {

        setTxt(e.target.value)




    }


    const onClickShowMsg = async (e:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
        
        e.preventDefault();

        setMsg(`Welcome to React testing,${await getUserFullname(text)}`)}





        return(
            <form>
                 <div>
                     <label>Enter your name</label>
                 </div>

                   <div>
                       <input data-testid ="user-input" value={text} onChange={onChangeTxt} />
                   </div>

                   <div>
                       <button data-testid="input-submit" onClick={onClickShowMsg}>
                           show message
                       </button>
                   </div>
                   <div>
                       <label data-testid="final-msg">
                           {msg}
                       </label>
                   </div>

                   <div>
                       this is just a test entry
                   </div>


            </form>
        )








}

export default  DisplayText;