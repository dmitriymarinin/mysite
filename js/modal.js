const btns = document.querySelectorAll('.btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const modalClose = document.querySelector('.modal-close');
const body = document.body;

btns.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		body.classList.add('disable-scroll')
		modals.forEach((el) => {
			el.classList.remove('modal-visible');
            modalClose.classList.add('modal-close-active');
			
		});

		document.querySelector(`[data-target="${path}"]`).classList.add('modal-visible');
		document.querySelector(`[data-target="${path}"]`).classList.add('modal-form');
		modalOverlay.classList.add('modal-overlay--visible');
        
	});
});

modalClose.addEventListener('click', (e) => {
	console.log(e.target);
	

	if (e.target == modalClose) {
		modalOverlay.classList.remove('modal-overlay--visible');
		body.classList.remove('disable-scroll')
		modals.forEach((el) => {
			el.classList.remove('modal-visible');
			el.classList.remove('modal-form');
            modalClose.classList.remove('modal-close-active');
		});
	}
});