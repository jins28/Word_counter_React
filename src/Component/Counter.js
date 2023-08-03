import React,{useState} from 'react'

export default function Counter() {
  const[text,setText] = useState('');
  const[word,setWord] = useState('');
  const upperCase = () =>{
    setText(text.toLocaleUpperCase());
  }
  const lowerCase = () =>{
    setText(text.toLowerCase());
  }
  return (
    <div className='counter-container'>
      <div className="numbers-holder">
        <div className="counter-box">
            <p>📝Words</p>
            <p className="count">{text.length>0 ? text.split(' ').length : null}</p>
        </div>
        <div className="counter-box">
            <p>✍️Letter</p>
            <p className="count">{text.length > 0 ? text.split(' ').join('').length : null}</p>
        </div>
        <div className="counter-box">
            <p>📜Paragraph</p>
            <p className="count">{text.length > 0 ? text.split(/\r\n|\r|\n/).length : ' '}</p>
        </div>
      </div>
      <div className="text-box">
        <textarea
            className= 'textarea'
            placeholder='Enter/Paste Your Text Here'
            value={text} 
            onChange={(e)=>setText(e.target.value)}
        />
      </div>
      <div className='button-box'>
        <button onClick={upperCase}>Click to Uppercase</button>
        <button onClick={lowerCase}>Click to Lowercase</button>
      </div>
     
    </div>
  )
}


