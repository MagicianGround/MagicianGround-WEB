import { useState } from 'react';

import ArrowSVG from '../../../assets/Arrow8.svg';


export default function RightBottomArrowComponent(){
   
    const [Hover, setHover] = useState(false);

    return (
        <>
            <button 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            
            style={{
                background: Hover ?"#000":"#648D3A",
                borderRadius : "50px",
                height:"70px",
                width:"50px",
                border:"none",
                position: "fixed",
                zIndex:"100",
                right : "2%",
                bottom : "2%", 
                
                
            }}>
                <img src={ArrowSVG} alt="ArrowSVG" /> 
            </button>
        </>
    )
}


