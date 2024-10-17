import { useState } from "react";
import Avatar from "./Avatar";
import { StudentProps } from "./types";

function Student(
	props: StudentProps & {
		onRemoveStudent?: (id: string) => void;
		onChangeName?: (event: React.FocusEvent<HTMLHeadingElement>, id: string) => void;
	}
) {
	const [hover, setHover] = useState(false);
	let className = "delete";
	if (hover) {
		className = "delete visible";
	}
	return (
		<article className="student" onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
			<Avatar name={props.name} />
			<h2
				contentEditable
				suppressContentEditableWarning={true}
				onBlur={(event) => props.onChangeName!(event, props.id)}
			>
				{props.name}
			</h2>
			<button className={className} onClick={() => props.onRemoveStudent!(props.id)}>
				X
			</button>
		</article>
	);
}

export default Student;
