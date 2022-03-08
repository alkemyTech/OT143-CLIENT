import Swal from 'sweetalert2';

export const successMsg = text => {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top',
		showConfirmButton: false,
		timer: 2000,
	});

	Toast.fire({
		icon: 'success',
		title: `${text}`,
	});
};

export const warningMsg = text => {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top',
		showConfirmButton: false,
		timer: 2000,
	});

	Toast.fire({
		icon: 'error',
		title: `${text}`,
	});
};
