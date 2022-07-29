export const checkString = (stringToCheck: string) => {
	const format = /[ `!@#$%^&*()_+=[\]{};':"\\|,.<>/?~]/

	return format.test(stringToCheck)
}
