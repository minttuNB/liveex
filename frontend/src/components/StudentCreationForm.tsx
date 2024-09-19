import { StudentCreationFormProps } from "./types";

function StudentCreationForm(props: StudentCreationFormProps) {
	return (
		<form className="studentCreationForm" onSubmit={props.onAddStudent}>
			<h1>Legg til student</h1>
			<input
				type="text"
				name="studentName"
				id="studentName"
				placeholder="Navn på studenten"
			/>
			<input type="submit" value="Legg til" />
		</form>
	);
}

export default StudentCreationForm;
