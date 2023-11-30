import './seleccionRate.js';
import calcularTotal from './funcionCalcularTotal.js';
import { obtenerRate } from './seleccionRate.js';
import mostrarTotales from './mostrarTotales.js';
import validarBill from './validations/validarBill.js';
import validarPersonas from './validations/validarPersonas.js';

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
