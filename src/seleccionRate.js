import mostrarTotales from './mostrarTotales';

const selectorRate = document.getElementById('selector_tip');
const formulario = document.getElementById('formulario');
let rate = 0;
const seleccionarRate = selectorRate.addEventListener('click', (e) => {
	e.preventDefault();
	const BotonActivo = e.target.closest('[data-rate]');
	if (selectorRate.querySelector('.btn-activo')) {
		console.log(selectorRate.querySelector('.btn-activo'));
		selectorRate.querySelector('.btn-activo').classList.remove('btn-activo');
	}
	if (e.target.closest('[data-rate]')) {
		if (e.target.closest('[data-rate]').dataset.rate == 'custom') {
			addEventListener('keyup', () => {
				rate = parseFloat(formulario.custom_rate.value);
				selectorRate.dataset.id = rate;
				if (formulario.custom_rate.value == '') {
					rate = 0;
					selectorRate.dataset.id = rate;
				}
				mostrarTotales();
			});
		} else {
			BotonActivo.classList.add('btn-activo');
			rate = parseFloat(e.target.closest('[data-rate]').dataset.rate);
			selectorRate.dataset.id = rate;
		}
		mostrarTotales();
	}
});
export function obtenerRate() {
	return rate;
}
