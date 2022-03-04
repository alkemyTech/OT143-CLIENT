import React from 'react';
import Swal from 'sweetalert2';

const Alert = ({ alert, text }) => {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top',
		showConfirmButton: false,
		timer: 2000,
		// willOpen: toast => {
		// 	toast;
		// },
	});
	{
		alert &&
			text &&
			Toast.fire({
				icon: 'warning',
				title: `${text}`,
			});
	}

	return <></>;
};

export default Alert;
