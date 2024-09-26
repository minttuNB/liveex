type StudentProps = {
	id: string;
	name: string;
};
type AvatarProps = {
	name: string;
};
type GridProps = {
	elements: StudentProps[];
	onRemoveStudent: (id: string) => void;
};
type StudentCreationFormProps = {
	onAddStudent: (event: React.FormEvent<HTMLFormElement>) => void;
};
type TotalProps = {
	total: Readonly<number>;
};
export type { StudentProps, AvatarProps, GridProps, StudentCreationFormProps, TotalProps };
