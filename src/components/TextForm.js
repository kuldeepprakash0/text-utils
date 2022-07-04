import React,{useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter your text here');
    // text = "new text"; wrong way to change the state
    // setText("New text"); // Right way to change the state
    const handleUpClick = ()=>{
       // console.log('upper case was clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase!","success");
    }
    const handleLoClick = ()=>{
       // console.log('lower case was clicked ' + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase!","success");
    }
    const handleClsClick = ()=>{
       // console.log('lower case was clicked ' + text);
        let newText ='';
        setText(newText);
        props.showAlert("Text has been cleared!","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);  // using rejex
        setText(newText.join(" "))
        props.showAlert("removed extra spaces!","success");
    }
    const handleCopy = ()=>{
        let text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text has been copied to clipboard!","success");
    }
    const handleOnChange = (event)=>{
       // console.log("onchange");
        setText(event.target.value);
    }
  return (
    <>  
    <div className="container my-4">
        <div style={{color: props.mode==='dark'?'white':'black'}}>
            <h1 className='text-center' style={{color: props.mode==='dark'?'white':'green'}}>{props.heading}</h1>
            <div className="mb-3 border border-primary rounded p-3">
                <label htmlFor="mybox" className="form-label" style={{color: props.mode==='dark'?'white':'black'}}>Text area</label>
                <textarea className="form-control" id="mybox" rows="5" value={text} onChange={handleOnChange} style={{background: props.mode==='dark'?'black':'white',color: props.mode==='dark'?'white':'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClsClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>to uppeCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>to lowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy text</button>
        </div>
        <div className="container my-3 border border-success rounded" style={{color: props.mode==='dark'?'white':'black'}}>
            <h4 style={{color: props.mode==='dark'?'white':'green'}}>Text Summery</h4>
            <p ><span className="badge text-bg-info">{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</span> words and <span className="badge text-bg-info">{text.length}</span> characters</p>
            <p><span className="badge text-bg-info">{0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</span> Minutes to read</p>
            <div className="container my-3 border border-success rounded">
            <h3><span className='badge text-bg-success'>Preview</span></h3>
            <p>{text.length>0 ? text :'Nothing to preview!'}</p>
            </div>
        </div>
    </div>
    </>
  )
}
