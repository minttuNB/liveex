import { useState } from "react";
import { StudentCreationFormProps } from "./types";

function StudentCreationForm(props: StudentCreationFormProps) {
	const [name, setName] = useState("");
	return (
		<form className="studentCreationForm" onSubmit={props.onAddStudent}>
			<h1>Legg til student</h1>
			<input
				type="text"
				name="studentName"
				id="studentName"
				placeholder="Navn på studenten"
				value={name}
				onChange={(event) => setName(event.target.value)}
			/>
			<input type="submit" value="Legg til" />
		</form>
	);
}

export default StudentCreationForm;
