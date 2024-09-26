type StudentProps = {
	id: string;
	name: string;
	onRemoveStudent?: (id: string) => void;
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
	total: number;
};
export type { StudentProps, AvatarProps, GridProps, StudentCreationFormProps, TotalProps };
