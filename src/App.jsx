import "./App.css";
import { useState, useEffect} from "react";

const MouseTracker = ({render}) => {

  const[mousePointer, setMousePointer] = useState({
    x:0,
    x:0,
  })

  const handleMouseTracker = (e) => {
     setMousePointer({
      x: e.clientX,
      y:e.clientY,
     })
  };

  useEffect(() => {
    window.addEventListener("mousemove",handleMouseTracker);

    return () => {
      window.removeEventListener("mousemove", handleMouseTracker);
    }
  }, []);

  return render({mousePointer});
}

const PanelMouseLogger = () => {
  return (
    <div className="main-container">
      <MouseTracker render ={({mousePointer}) => (
        <div className="row">
          <span>x:{mousePointer.x}</span>
          <span>y:{mousePointer.y}</span>
        </div>
      )}>
      </MouseTracker>

    </div>
  )
}

const PointMouseLogger = () => {
  return (
      <MouseTracker render ={({mousePointer}) => (
        <p>(x:{mousePointer.x}, y:{mousePointer.y})</p>
      )}>
      </MouseTracker>
  )
}
function App() {
  return (
    <div className="card">
      <p className="header">Mouse Tracker Project</p>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;