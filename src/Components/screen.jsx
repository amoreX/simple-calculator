
import {motion} from "framer-motion";
import {useEffect} from 'react';
export default function screen(props){
    let pp=1;
    useEffect(() =>{
       const c= document.getElementById("screenfont");
       const p=props.children[1].length;
    //    console.log(p);
       console.log(props.children[1]);
       if(props.children[1]==" ฅ^•ﻌ•^ฅ " && window.innerWidth>1100){

           c.style.justifyContent="center";
           c.style.fontSize="4rem";
        }
        else if (props.children[1]==" ฅ^•ﻌ•^ฅ " && window.innerWidth<1100)
        {
            c.style.justifyContent="flex-start";
            c.style.fontSize="5rem";
        }
        else{
           c.style.justifyContent="flex-end";
           c.style.fontSize=`${Math.max(10, 45 - p)}px`;
       }
       
    
       
       

    },[props]);
    
    return(
        <motion.div initial={{ scale: 0}} animate={{ scale: 1}} transition={{delay: 0.27 }} className="screen">
            <p id="screenfont">{props.children}</p>
        </motion.div>
    )
}