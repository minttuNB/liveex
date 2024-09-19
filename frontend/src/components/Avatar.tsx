type AvatarProps = {
	name: string;
};
function Avatar(props: AvatarProps) {
	return (
		<>
			<p>{props.name[0].toUpperCase()}</p>
		</>
	);
}

export default Avatar;
