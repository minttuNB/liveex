import { FilterProps } from "./types";

export default function Filter(props: FilterProps) {
	const filterValues = props.options;
	return (
		<select name="filter" id="filter" defaultValue="No filter" onChange={(event) => props.onFilterChange(event)}>
			<option>No filter</option>
			{filterValues.map((filterValue) => (
				<option key={filterValue} value={filterValue}>
					{filterValue}
				</option>
			))}
		</select>
	);
}
