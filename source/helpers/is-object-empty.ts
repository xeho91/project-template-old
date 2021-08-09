/* eslint-disable-next-line @typescript-eslint/ban-types */
export function isObjectEmpty(object: {}): boolean {
	if (object.constructor !== Object) {
		throw new Error("The passed argument is not an object!");
	} else {
		return Object.entries(object).length === 0;
	}
}
