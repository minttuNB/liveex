type StudentProps = {
	id: string;
	name: string;
};
type AvatarProps = {
	name: string;
};
type GridProps = object;
type StudentCreationFormProps = {
	onAddStudent: (event: React.FormEvent<HTMLFormElement>) => void;
};
type TotalProps = {
	total: Readonly<number>;
};
type FilterProps<T> = {
	data: T[];
	onFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
export type { StudentProps, AvatarProps, GridProps, StudentCreationFormProps, TotalProps, FilterProps };
