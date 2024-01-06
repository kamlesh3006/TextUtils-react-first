import React, { useState } from 'react'
export default function About(props) {
    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
    })

    const toggleStyle = () => {
        if(myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
        } else {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
        }
    }
  return (
    <div>
      <div className="card" style={{backgroundColor: props.mode === 'light' ? 'white' : 'grey', color: props.mode === 'light' ? 'black' : 'white'}}>
  <div className="card-header" style={{backgroundColor: props.mode === 'light' ? '#F8F9FA' : '#212529', color: props.mode === 'light' ? 'black' : 'white'}}>
    About
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>TextUtils is an pp to modify your text. I made this project for learning ReactJs hands-on.</p>
      <footer className="blockquote-footer" style={{color: props.mode === 'light' ? 'grey' : '#212529'}}>Developer <cite title="Source Title">Kamlesh Khatod</cite></footer>
    </blockquote>
  </div>
</div>
    </div>
  )
}
