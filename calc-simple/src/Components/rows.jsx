import {motion} from "framer-motion";
export default function row(props){
	return(
		<div  className="row">
            {props.children}
        </div>
	)
}