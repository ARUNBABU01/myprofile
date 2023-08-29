import React, { useEffect, useRef, useState } from "react";
import VANTA_BG from "vanta/dist/vanta.clouds.min";

export default function VantaBG({children}){



const [vantaEffect, setVantaEffect] = useState(null);
const myRef = useRef(null);
useEffect(() => {
  if (!vantaEffect) {
    try {
    setVantaEffect(VANTA_BG({
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 600,
      minWidth: 600,
    })
    );
    } catch (error) {
      console.log('Vanta error: ', error);
    }
    
  }
  return () => {
    if (vantaEffect) vantaEffect.destroy();
  };
}, [vantaEffect]);


return (
  <div ref={myRef} style={{ margin: 0, padding: 0,height:"100vh", width:"100vw" }}>
    {children}
  </div>
)

}