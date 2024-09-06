import '../App.css';
import React, { useState } from 'react';


export default function TypeWriter(propsName) {
  const [textAreaVal, setTextAreaVal] = useState("");

  // function handleTextChange(event) {
  //   setTextAreaVal(event.target.value);
  // }
  const handleTextChange = (event) => {
    setTextAreaVal(event.target.value);
  }

  const handleCapitlize = (e) => {
    let textAreaValue = document.querySelector('#typeWriter').value;
    if (textAreaValue !== null && textAreaValue !== '') {
      let newCapiTextValue = textAreaValue.replace(/\b\w/g, (char) => char.toUpperCase());
      setTextAreaVal(newCapiTextValue);

      propsName.showAlertAttr("All Text is capitalize!", "success");
    }

  }
  const handleUpperCase = () => {
    let textAreaValue = document.querySelector('#typeWriter').value.toUpperCase();
    if (textAreaValue !== null && textAreaValue !== '') {
      setTextAreaVal(textAreaValue);

      propsName.showAlertAttr("All Text is converted to Uppercase!", "success");

    }
  }
  const handleLowerCase = () => {
    let textAreaValue = document.querySelector('#typeWriter').value.toLowerCase();
    if (textAreaValue !== null && textAreaValue !== '') {
      setTextAreaVal(textAreaValue);

      propsName.showAlertAttr("All Text is converted to Lowercase!", "success");
    }
  }
  const handleReset = () => {
    let textAreaValue = document.querySelector('#typeWriter').value;
    if (textAreaValue !== null && textAreaValue !== '') {
      setTextAreaVal(textAreaValue = '');

      propsName.showAlertAttr("Cleared all text!", "success");

    } else {
      propsName.showAlertAttr("Nothing to clear!", "warning");
    }
  }
  const handleExtraSpaces = () => {
    let textAreaValue = document.querySelector('#typeWriter').value;
    let textNoSpace = textAreaValue.split(/[ ]+/);
    if (textAreaValue !== null && textAreaValue !== '') {
      setTextAreaVal(textNoSpace.join(' '));

      propsName.showAlertAttr("Removed all extra spaces!", "success");

    }
  }
  const handleLineBreak = () => {
    let textAreaValue = document.querySelector('#typeWriter').value;
    let textNoSpace = textAreaValue.replace(/(\r\n|\n|\r)/gm, " ");
    let completeTextNoSpace = textNoSpace.split(/[ ]+/);
    if (textAreaValue !== null && textAreaValue !== '') {
      setTextAreaVal(completeTextNoSpace.join(' '));

      propsName.showAlertAttr("Removed all linebreaks and extra spaces!", "success");

    }
  }
  const handleCopyTxt = () => {
    let textAreaEle = document.querySelector('#typeWriter');
    let textAreaValue = textAreaEle.value;
    if (textAreaValue.trim() !== '') {
      textAreaEle.select();
      navigator.clipboard.writeText(textAreaEle.value);
      console.log(textAreaValue);

      propsName.showAlertAttr("Text copied to clipboard!", "success");
    }
  }
  const handleMinifyTxt = () => {
    let textAreaValue = document.querySelector('#typeWriter').value;
    let textNoSpace = textAreaValue.replace(/(\r\n|\n|\r)/gm, " ");
    let completeTextNoSpace = textNoSpace.split(/[ ]+/);
    if (textAreaValue !== null && textAreaValue !== '') {
      setTextAreaVal(completeTextNoSpace.join(''));

      propsName.showAlertAttr("Removed all linebreaks and extra spaces!", "success");

    }
  }



  return (
    <>
      <div className='type-writer'>
        <label htmlFor="typeWriter" >Textarea</label>
        <textarea name="typeWriter" id="typeWriter" placeholder='Write here...' value={textAreaVal} onChange={handleTextChange}></textarea>
      </div>
      <div className="change-btns">
        <button className='btn btn-primary mt-3 me-2' onClick={handleCapitlize} >Capitalize</button>
        <button className='btn btn-secondary mt-3 me-2' onClick={handleUpperCase} >Uppercase</button>
        <button className='btn btn-success mt-3 me-2' onClick={handleLowerCase} >Lowercase</button>
        <button className='btn btn-warning mt-3 me-2' onClick={handleExtraSpaces} >Clear Spaces</button>
        <button className='btn btn-dark mt-3 me-2' onClick={handleCopyTxt} >Copy Txt</button>
        <button className='btn btn-info mt-3 me-2' onClick={handleLineBreak} >Remove Linebreak</button>
        <button className='btn btn-outline-dark mt-3 me-2' onClick={handleMinifyTxt} >Minify Text</button>
        <button className='btn btn-danger mt-3 me-2' onClick={handleReset} >Reset</button>
      </div>

      <div className="tally-data mt-2"> 

        <h3 className='text-end'>Yor comment summary</h3>
        <p className='text-end'>{textAreaVal === null || textAreaVal.trim() === '' ? '0' : (textAreaVal.trim().split(/\s+/)).length} words and {textAreaVal.trim().length} characters</p>
        <p className="read-time text-success text-end"><strong>
          <span className='text-danger '> <span className="minute-text font-monospace">{(Math.floor(((textAreaVal.trim().split(/\s+/)).length * 0.005)))}</span>min </span>
          <span className='text-warning '> <span className="second-text font-monospace">{(60 * ((((textAreaVal.trim().split(/\s+/)).length) * 0.005))) > 60 ?  ( ( ( (((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1) / 1 ) - Math.floor( ( (((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1) / 1 ) ) ).toFixed(1) * 60) : (60 * ((((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1)))}</span>sec</span></strong> : Reading time for comment</p>
      </div>
    </>
  )
}


// export default TypeWriter





      // <div className='type-writer'>
      //   <label htmlFor="typeWriter" >Textarea</label>
      //   <textarea name="typeWriter" id="typeWriter" placeholder='Write here...' value={textAreaVal} onChange={handleTextChange}></textarea>
      // </div>
      // <div className="change-btns">
      //   <button className='btn btn-primary mt-3 me-2' onClick={handleCapitlize} >Capitalize</button>
      //   <button className='btn btn-secondary mt-3 me-2' onClick={handleUpperCase} >Uppercase</button>
      //   <button className='btn btn-success mt-3 me-2' onClick={handleLowerCase} >Lowercase</button>
      //   <button className='btn btn-warning mt-3 me-2' onClick={handleExtraSpaces} >Clear Spaces</button>
      //   <button className='btn btn-dark mt-3 me-2' onClick={handleCopyTxt} >Copy Txt</button>
      //   <button className='btn btn-info mt-3 me-2' onClick={handleLineBreak} >Remove Linebreak</button>
      //   <button className='btn btn-danger mt-3 me-2' onClick={handleReset} >Reset</button>
      // </div>

      // <div className="tally-data mt-2">
      //   {/* <h3>Yor comment summary</h3>
      //   <p>{textAreaVal === null || textAreaVal.trim() === '' ? '0' : (textAreaVal.trim().split(/\s+/)).length} words and {textAreaVal.trim().length} characters</p>
      //   <p className="read-time text-success">Reading time for comment: 
      //     <span className='text-danger'> {( Math.floor(((textAreaVal.trim().length) * 0.008).toFixed(1)) )}min </span> 
      //     <span className='text-warning'>
      //       {(60 * (((textAreaVal.trim().length) * 0.008).toFixed(1))) > 60 ? '0' : (60 * (((textAreaVal.trim().length) * 0.008).toFixed(1))) }sec</span></p> */}

      //   {/* {(Math.floor(((textAreaVal.trim().length) * 0.008) * 10) % 10) == 0 ? 0 : (60 * (Math.floor(((textAreaVal.trim().length) * 0.008) * 10) % 10))}sec</span></p> */}

      //   <h3>Yor comment summary</h3>
      //   <p>{textAreaVal === null || textAreaVal.trim() === '' ? '0' : (textAreaVal.trim().split(/\s+/)).length} words and {textAreaVal.trim().length} characters</p>
      //   <p className="read-time text-success">Reading time for comment:
      //     <span className='text-danger'> {(Math.floor(((textAreaVal.trim().split(/\s+/)).length * 0.005)))}min </span>
      //     <span className='text-warning'>
      //       {/* {(60 * ((((textAreaVal.trim().split(/\s+/)).length) * 0.005))) > 60 ?  ( Math.floor(60 * ( (((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1) / 10 )) ) : (60 * ((((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1)))}sec</span></p> */}
      //       {(60 * ((((textAreaVal.trim().split(/\s+/)).length) * 0.005))) > 60 ?  ( ( ( (((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1) / 1 ) - Math.floor( ( (((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1) / 1 ) ) ).toFixed(1) * 60) : (60 * ((((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1)))}sec</span></p>

      //       {/* <span>seconds after 60 Second: { ( Math.floor(60 * ( (((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1) / 10 )) ) } </span> <br />
      //       <span>seconds after 60 Second: { ( ( ( (((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1) / 1 )) ) } </span> <br />
      //       <span>seconds after 60 Second: {  ( ( (((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1) / 1 ) - Math.floor( ( (((textAreaVal.trim().split(/\s+/)).length) * 0.005).toFixed(1) / 1 ) ) ).toFixed(1) * 60 } </span> */}



      // </div>
