type StudentProps = {
	id: number;
	name: string;
};
type AvatarProps = {
	name: string;
};
type GridProps = {
	elements: StudentProps[];
};
type StudentCreationFormProps = {
	onAddStudent: (event: React.FormEvent<HTMLFormElement>) => void;
};
type TotalProps = {
	total: number;
};
export type { StudentProps, AvatarProps, GridProps, StudentCreationFormProps, TotalProps };
