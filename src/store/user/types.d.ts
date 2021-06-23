export type AuthenticatedState =
	| "Authenticated"
	| "Unauthenticated"
	| "Unknown";

export interface UserState {
	authenticatedState: AuthenticatedState;
	jwt: string;
}
