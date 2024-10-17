type SuccessResponse = {
	success: true;
	data: string | object;
};
type FailureResponse = {
	success: false;
	error: Error;
};
export type { SuccessResponse, FailureResponse };
