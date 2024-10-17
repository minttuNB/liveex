const validateName = (name: string) => {
	name = name.trim();
	return name.length > 4 && name.includes(" ") && name[name.length - 1] === "!";
};
export { validateName };
