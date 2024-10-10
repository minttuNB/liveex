import { FilterProps } from "./types";

export default function Filter(props: FilterProps) {
	return (
		<select name="filter" id="filter" defaultValue="No filter" onChange={(event) => props.onFilterChange(event)}>
			<option>No filter</option>
			{props.options.map((filterValue) => (
				<option key={filterValue} value={filterValue}>
					{filterValue}
				</option>
			))}
		</select>
	);
}
