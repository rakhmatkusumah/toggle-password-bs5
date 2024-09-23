document.addEventListener("DOMContentLoaded", () => {
	'use strict';

	// Membuat elemen SVG secara dinamis untuk icon mata dan mata tertutup
	const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
	svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
	svgElement.setAttribute("style", "display: none !important;");

	// Membuat simbol untuk icon mata (bi-eye)
	const symbolEye = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	symbolEye.setAttribute("id", "bi-eye");
	symbolEye.setAttribute("fill", "currentColor");
	symbolEye.setAttribute("viewBox", "0 0 16 16");

	const pathEye1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pathEye1.setAttribute("d", "M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z");
	const pathEye2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pathEye2.setAttribute("d", "M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0");

	symbolEye.appendChild(pathEye1);
	symbolEye.appendChild(pathEye2);

	// Membuat simbol untuk icon mata tertutup (bi-eye-slash)
	const symbolEyeSlash = document.createElementNS("http://www.w3.org/2000/svg", "symbol");
	symbolEyeSlash.setAttribute("id", "bi-eye-slash");
	symbolEyeSlash.setAttribute("fill", "currentColor");
	symbolEyeSlash.setAttribute("viewBox", "0 0 16 16");

	const pathEyeSlash1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pathEyeSlash1.setAttribute("d", "M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z");
	const pathEyeSlash2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pathEyeSlash2.setAttribute("d", "M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829");
	const pathEyeSlash3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
	pathEyeSlash3.setAttribute("d", "M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z");

	symbolEyeSlash.appendChild(pathEyeSlash1);
	symbolEyeSlash.appendChild(pathEyeSlash2);
	symbolEyeSlash.appendChild(pathEyeSlash3);

	// Menambahkan simbol icon ke dalam SVG dan meletakkan SVG di awal body
	svgElement.appendChild(symbolEye);
	svgElement.appendChild(symbolEyeSlash);
	document.body.prepend(svgElement);

	// Pilih semua tombol toggle password yang memiliki atribut data-action="toggle-password"
	const togglePasswordButtons = document.querySelectorAll('[data-action="toggle-password"]');
	const eyeIcon = '#bi-eye';           // Icon mata
	const eyeSlashIcon = '#bi-eye-slash'; // Icon mata tertutup

	// Tambahkan event listener ke setiap tombol toggle
	togglePasswordButtons.forEach(button => {
		try {
			// Membuat elemen SVG untuk icon mata dan menambahkannya ke tombol
			const buttonSvgElem = document.createElementNS("http://www.w3.org/2000/svg", "svg");
			buttonSvgElem.setAttribute("width", "1rem");
			buttonSvgElem.setAttribute("height", "1rem");

			const useElement = document.createElementNS("http://www.w3.org/2000/svg", "use");
			useElement.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", eyeIcon);

			buttonSvgElem.appendChild(useElement);
			button.appendChild(buttonSvgElem);

			// Event listener untuk menangani klik pada tombol
			button.addEventListener('click', event => {
				event.preventDefault();  // Mencegah perilaku default tombol
				event.stopPropagation(); // Menghentikan propagasi event

				// Mendapatkan selector input target dari atribut data-target
				const inputSelector = button.dataset.target || button.getAttribute('data-target');

				// Error handling jika inputSelector tidak ditemukan
				if (!inputSelector) {
					console.error('Input selector tidak ditemukan pada button dengan data-action="toggle-password".');
					return;
				}

				const passwordInput = document.querySelector(inputSelector); // Elemen input password

				// Error handling jika elemen password input tidak ditemukan
				if (!passwordInput) {
					console.error(`Input dengan selector "${inputSelector}" tidak ditemukan.`);
					return;
				}

				const currentType = passwordInput.getAttribute('type');     // Mendapatkan tipe input saat ini (password atau text)
				const svg = button.querySelector('svg');                    // Mengambil elemen SVG dalam tombol
				const icon = svg.querySelector('use');                      // Mengambil elemen <use> yang merujuk ke simbol icon

				// Toggle tipe input antara 'password' dan 'text'
				const newType = currentType === 'password' ? 'text' : 'password';
				const newIconHref = newType === 'text' ? eyeSlashIcon : eyeIcon;

				// Mengubah tipe input dan icon yang ditampilkan
				passwordInput.setAttribute('type', newType);
				icon.setAttributeNS('http://www.w3.org/1999/xlink', 'href', newIconHref);
			});
		} catch (error) {
			console.error('Terjadi kesalahan saat mencoba menginisialisasi tombol toggle password:', error);
		}
	});
});