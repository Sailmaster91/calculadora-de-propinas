const calcularTotal = (bill, person, rate) => {
	const amountPersons = bill / person;

	const tipTotalPersons = (bill * rate) / 100 / person;

	const totalXperson = tipTotalPersons + amountPersons;
	return [tipTotalPersons, totalXperson];
};

export default calcularTotal;
