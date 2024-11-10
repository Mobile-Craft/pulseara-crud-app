import Swal from 'sweetalert2';

const useToast = () => {
	const toastMixin = Swal.mixin({
		toast: true,
		title: 'General Title',
		position: 'top-right',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});

	const successToast = (title?: string, text?: string) => {
		return toastMixin.fire({
			title: title ?? 'Acción Completada',
			text: text ?? '',
			timer: 2000,
			position: 'bottom-right',
			toast: true,
			timerProgressBar: false,
			background: '#306495',
			color: '#fff'
		});
	};

	const warningToast = (title?: string, text?: string) => {
		return toastMixin.fire({
			title: title ?? 'Advertencia',
			text: text ?? '',
			position: 'bottom-right',
			toast: true,
		});
	};

	const errorToast = (title?: string, text?: string) => {
		return toastMixin.fire({
			title: title ?? 'Uy, algo salió mal, intenta de nuevo más tarde',
			text: text ?? '',
			position: 'bottom-right',
			toast: true,
			timerProgressBar: false,
		});
	};

	return {
		successToast,
		warningToast,
		errorToast
	};
};

export default useToast;
