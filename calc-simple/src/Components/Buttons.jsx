import {motion } from "framer-motion";
export default function button(props){
    console.log(props.indx)
    const handleClick = () => {
        sound();  // Call the sound function
        props.onClick();  // Call the onClick function passed as a prop
      };
    return (
        <motion.div  className={`button ${props.id}`} onClick={handleClick}>
            <motion.p initial={{ scale: 0, y: 20}} animate={{ scale: 1, y:0}} transition={{delay: 0.7 + (0.1 * props.indx)}}  id="but">{props.children}</motion.p>
        </motion.div>
    )
}

function sound(){
    var audio = new Audio();
    audio.src = document.getElementById("clickbutton").src;
    audio.play();
}