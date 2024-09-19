import { AvatarProps } from "./types";

function Avatar(props: AvatarProps) {
	return (
		<>
			<span>{props.name[0].toUpperCase()}</span>
		</>
	);
}

export default Avatar;
