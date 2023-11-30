'use strict';

const calcularTotal = (bill, person, rate) => {
	const amountPersons = bill / person;

	const tipTotalPersons = (bill * rate) / 100 / person;

	const totalXperson = tipTotalPersons + amountPersons;
	return [tipTotalPersons, totalXperson];
};

const formulario$2 = document.getElementById('formulario');
document.getElementById('selector_tip');

document.querySelector('#totales');
const sumaryTip = document.querySelector('#total_tip');
const sumaryAmount = document.querySelector('#total_qty');

const formatearMoneda = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});
const mostrarTotales = () => {
	if (formulario$2.bill.value !== '' && obtenerRate !== 0) {
		const bill = parseFloat(formulario$2.bill.value);
		const person = parseFloat(formulario$2.persona.value);
		console.log(bill > 0 || person > 0);
		if (bill === 0 || person === 0) {
			const totalTip = 0;
			const TotalXperson = 0;
			sumaryTip.textContent = formatearMoneda.format(totalTip);
			sumaryAmount.textContent = formatearMoneda.format(TotalXperson);
		} else {
			const [totalTip, TotalXperson] = calcularTotal(bill, person, obtenerRate());
			sumaryTip.textContent = formatearMoneda.format(totalTip);
			sumaryAmount.textContent = formatearMoneda.format(TotalXperson);
		}
	} else {
		const totalTip = 0;
		const TotalXperson = 0;
		sumaryTip.textContent = formatearMoneda.format(totalTip);
		sumaryAmount.textContent = formatearMoneda.format(TotalXperson);
	}
};

const selectorRate$1 = document.getElementById('selector_tip');
const formulario$1 = document.getElementById('formulario');
let rate = 0;
selectorRate$1.addEventListener('click', (e) => {
	e.preventDefault();
	const BotonActivo = e.target.closest('[data-rate]');
	if (selectorRate$1.querySelector('.btn-activo')) {
		console.log(selectorRate$1.querySelector('.btn-activo'));
		selectorRate$1.querySelector('.btn-activo').classList.remove('btn-activo');
	}
	if (e.target.closest('[data-rate]')) {
		if (e.target.closest('[data-rate]').dataset.rate == 'custom') {
			addEventListener('keyup', () => {
				rate = parseFloat(formulario$1.custom_rate.value);
				selectorRate$1.dataset.id = rate;
				if (formulario$1.custom_rate.value == '') {
					rate = 0;
					selectorRate$1.dataset.id = rate;
				}
				mostrarTotales();
			});
		} else {
			BotonActivo.classList.add('btn-activo');
			rate = parseFloat(e.target.closest('[data-rate]').dataset.rate);
			selectorRate$1.dataset.id = rate;
		}
		mostrarTotales();
	}
});
function obtenerRate() {
	return rate;
}

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

const validarPersonas = (e) => {
	const regex = /^[1-9]\d*$/;

	document.getElementById('personas');
	const padrePersonas = document.getElementById('padrePersonas');

	if (!regex.test(e.target.value)) {
		padrePersonas.querySelector('#error').classList.remove('hidden');
		return false;
	} else {
		padrePersonas.querySelector('#error').classList.add('hidden');
		return true;
	}
};

const formulario = document.querySelector('#formulario');
const selectorRate = document.getElementById('selector_tip');

mostrarTotales();

selectorRate.addEventListener('change', (e) => {
	e.preventDefault;
	console.log(obtenerRate());
});

formulario.bill.addEventListener('keyup', (e) => {
	e.preventDefault;
	const validacion = validarBill(e);

	if (validacion) {
		mostrarTotales();
	}
});

formulario.persona.addEventListener('input', (e) => {
	e.preventDefault;
	if (validarPersonas(e)) {
		mostrarTotales();
	}
});
const reiniciarFormulario = () => {
	formulario.bill.value = '';
	formulario.persona.value = 1;
	formulario.custom_rate.value = '';
	if (formulario.bill.classList.contains('error-input')) {
		formulario.bill.classList.remove('error-input');
		formulario.querySelector('.error').classList.add('hidden');
	}
	// document.querySelector('#formulario').reset();
	mostrarTotales();
};
formulario.reset.addEventListener('click', (e) => {
	e.preventDefault();
	reiniciarFormulario();
});
