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

export const confirmMsg = (text) =>{
	Swal.fire({
		title: 'Esta seguro que quiere eliminar?',
		text: "",
		icon: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Si, Eliminar'
	  }).then((result) => {
		if (result.isConfirmed) {
		  Swal.fire(
			'Eliminado!',
			'Eliminado Correctamente.',
			'success'
		  )
		 
		}
	  });


}
