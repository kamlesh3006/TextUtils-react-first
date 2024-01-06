import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled!", "success");
    }
  }
  return (
    <>
      
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} text="about TextUtils" />
<Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About showAlert={showAlert} mode={mode} />} /> */}
          {/* <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />} /> */}
          <TextForm showAlert={showAlert} heading="Enter Text to Analyze" mode={mode} />
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
