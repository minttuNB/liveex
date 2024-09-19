import { AvatarProps } from "./types";

function Avatar(props: AvatarProps) {
	return (
		<>
			<span>
				{props.name
					.split(" ")
					.map((name) => name.slice(0, 1))
					.join("")
					.toUpperCase()}
			</span>
		</>
	);
}

export default Avatar;
