type StudentProps = {
	id?: number;
	name: string;
};
type AvatarProps = {
	name: string;
};
type GridProps = {
	elements: [{ name: string }] | StudentProps[];
};
export type { StudentProps, AvatarProps, GridProps };
