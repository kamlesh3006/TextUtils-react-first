import React, { useState } from 'react'

export default function TextForm(props) {
  
    const [text, setText] = useState("Enter your text");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text Converted to UPPERCASE", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text Converted to lowercase", "success");
    }

    const handleExClick = () => {
        let newText = text.replace(/\s{2,}/g, ' ').trim() ;
        setText(newText);
        props.showAlert("Extra spaces Removed!", "success");
    }

    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Text Copied!", "success");
    }
    
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    return (
    <>
    <div className="container my-4" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
<div class="mb-3">
    <h1>{props.heading}</h1>
  <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="3"></textarea>
</div>
<button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UPPERCASE</button>
<button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to lowercase</button>
<button className='btn btn-primary mx-1' onClick={handleExClick}>Remove Extra Spaces</button>
<button className='btn btn-primary mx-1' onClick={handleCopy}>Copy to Clipboard</button>
<button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
</div>
<div className="container my-4" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
    <h2>Your Text Summary</h2>
    <p>{text.replace(/\s{2,}/g, ' ').trim().split(" ").length} words and {text.replace(/\s+/g,'').length} characters.</p>
    <p>Average read time : {0.008 * text.split(" ").length} minutes</p>
</div>
<div className="container my-4" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
    <h2>Preview</h2>
    <p>{text.length > 0 ? text : "Enter something to preview it."}</p>
</div>
    </>
  )
}
