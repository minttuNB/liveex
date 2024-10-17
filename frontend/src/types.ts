type SuccessResponse = {
	success: true;
	data: object;
};
type FailureResponse = {
	success: false;
	error: Error;
};
export type { SuccessResponse, FailureResponse };
