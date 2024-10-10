import { PropsWithChildren } from "react";
import { GridProps } from "./types";
function Grid(props: Readonly<PropsWithChildren<GridProps>>) {
	return (
		<>
			<section className="grid">{props.children}</section>
		</>
	);
}

export default Grid;
