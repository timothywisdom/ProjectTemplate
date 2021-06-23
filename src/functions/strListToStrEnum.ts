/**
 * Create String ENUMs from an array of strings.
 * credit: https://basarat.gitbooks.io/typescript/docs/types/literal-types.html
 */

export default function strListToStrEnum<T extends string>(o: T[]): { [K in T]: K } {
	return o.reduce((res, key) => {
		res[key] = key;
		return res;
	}, Object.create(null));
}
