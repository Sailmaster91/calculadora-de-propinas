import calcularTotal from './funcionCalcularTotal.js';
import { obtenerRate } from './seleccionRate.js';

const formulario = document.getElementById('formulario');
const selectorRate = document.getElementById('selector_tip');

const totales = document.querySelector('#totales');
const sumaryTip = document.querySelector('#total_tip');
const sumaryAmount = document.querySelector('#total_qty');

const formatearMoneda = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});
const mostrarTotales = () => {
	if (formulario.bill.value !== '' && obtenerRate !== 0) {
		const bill = parseFloat(formulario.bill.value);
		const person = parseFloat(formulario.persona.value);
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

export default mostrarTotales;
