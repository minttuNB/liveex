import { UUID } from "crypto";

type SuccessResponse = {
	success: true;
	data: string | object;
};
type FailureResponse = {
	success: false;
	error: Error;
};
type Student = {
	id: UUID;
	name: string;
};
export type { SuccessResponse, FailureResponse, Student };
