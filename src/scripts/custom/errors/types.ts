/* eslint-disable @typescript-eslint/no-redeclare */
import strListToStrEnum from "../../../functions/strListToStrEnum";

export const ErrorCategory = strListToStrEnum([
	"General",
	"Server",
	"Unauthorised",
	"Forbidden",
	"NeedsProfile",
	"BadRequest",
	"NotVerified",
	"TooManyRequests",
]);
export type ErrorCategory = keyof typeof ErrorCategory;

export const ErrorDomain = strListToStrEnum([
	"Api",
	"Client",
	"Authentication",
	"Payment",
]);
export type ErrorDomain = keyof typeof ErrorDomain;
