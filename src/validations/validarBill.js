const validarBill = (e) => {
	const regex = /^([1-9]\d{0,3}(\.\d{0,2})?|10000(\.00?)?|99000(\.00?)?)$/;
	const billInput = document.querySelector('#bill');
	const padreBill = document.getElementById('padreBill');

	if (!regex.test(e.target.value)) {
		padreBill.querySelector('#error').classList.remove('hidden');
		billInput.classList.add('error-input');
		return false;
	} else {
		padreBill.querySelector('.error').classList.add('hidden');
		billInput.classList.remove('error-input');
		return true;
	}
};

export default validarBill;
