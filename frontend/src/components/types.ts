import { FormEventHandler } from "react";

type StudentProps = {
	id?: number;
	name: string;
};
type AvatarProps = {
	name: string;
};
type GridProps = {
	elements: StudentProps[];
};
type StudentCreationFormProps = {
	onAddStudent: FormEventHandler<HTMLFormElement>;
};
export type { StudentProps, AvatarProps, GridProps, StudentCreationFormProps };
