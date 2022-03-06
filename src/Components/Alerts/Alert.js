import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const Alert = ({ alert, text }) => {
	useEffect(() => {
		const Toast = Swal.mixin({
			toast: true,
			position: 'top',
			showConfirmButton: false,
			timer: 2000,
		});

		if (alert === true && text !== undefined) {
			setTimeout(() => {
				Toast.fire({
					icon: 'warning',
					title: `${text}`,
				});
			}, 250);
		} else {
			return null;
		}
	}, [text, alert]);

	return <></>;
};

export default Alert;
