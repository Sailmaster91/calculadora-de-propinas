const validarPersonas = (e) => {
	const regex = /^[1-9]\d*$/;

	const personasInput = document.getElementById('personas');
	const padrePersonas = document.getElementById('padrePersonas');

	if (!regex.test(e.target.value)) {
		padrePersonas.querySelector('#error').classList.remove('hidden');
		return false;
	} else {
		padrePersonas.querySelector('#error').classList.add('hidden');
		return true;
	}
};

export default validarPersonas;
