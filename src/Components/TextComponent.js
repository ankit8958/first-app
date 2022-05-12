import React from "react";
import { useState } from "react";
const TextComponent = ()=>{

        const [text,setText] = useState('');
        const upperCase = ()=>{
            setText(text.toUpperCase());
        }
        const handleEvent = (e)=>{
            
            setText(e.target.value);
        }
        const handleCopy = ()=>{
            var text = document.getElementById('text-area');
            text.select();
            navigator.clipboard.writeText(text.value);
        }
        const handleExtraSpaces = ()=>{
            let newtext = text.split(/[ ]+/);
            setText(newtext.join(" "));
        }
        const clear =()=>{
            setText('');
        }

        return(
            <>
            <div className="container my-2">
                <h2 className="my-4">Enter Your Text</h2>
            <textarea className="form-control" value={text} onChange={handleEvent} placeholder="Leave a comment here" id="text-area"></textarea>
            <button className="btn btn-primary mx-1 my-3" onClick={upperCase}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-1 my-3" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-3" onClick={clear}>Clear</button>
            </div>
            <div className="container my-2">
                <h2>Your Text Summary</h2>
                <p>Word Count : {text.split(" ").filter((element)=>{ return element.length !==0}).length} ,Character Length : {text.length}</p>
                <p>Minues Read Time : {0.008 * text.split(" ").filter((element)=>{return element.length !==0}).length}</p>
                
            </div>
            </>
        );
}

export default TextComponent;