import { FilterProps, StudentProps as Student } from "./types";

export default function StudentsFilter(props: FilterProps<Student>) {
	const filterValues = [...new Set(props.data.map((student: Student) => student.name.slice(0, 1).toUpperCase()))];
	return (
		<select
			name="studentsFilter"
			id="studentsFilter"
			defaultValue="No filter"
			onChange={(event) => props.onFilterChange(event)}
		>
			<option>No filter</option>
			{filterValues.map((initial) => (
				<option value={initial}>{initial}</option>
			))}
		</select>
	);
}
