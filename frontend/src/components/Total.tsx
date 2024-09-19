import { TotalProps } from "./types";

function Total(props: TotalProps){
	return (
		<h2>Antall studenter: {props.total}</h2>
	);
}
export default Total;