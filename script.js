const menuButton = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
	const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
	menuButton.setAttribute('aria-expanded', String(!isOpen));
	menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
	menu.classList.toggle('is-open', !isOpen);
});

menu.addEventListener('click', (event) => {
	if (event.target instanceof HTMLAnchorElement) {
		menuButton.setAttribute('aria-expanded', 'false');
		menuButton.setAttribute('aria-label', 'Open navigation');
		menu.classList.remove('is-open');
	}
});

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach((button) => {
	button.addEventListener('click', () => {
		const filter = button.dataset.filter;

		filterButtons.forEach((item) => {
			const isActive = item === button;
			item.classList.toggle('is-active', isActive);
			item.setAttribute('aria-pressed', String(isActive));
		});

		projectCards.forEach((card) => {
			card.hidden = filter !== 'all' && card.dataset.category !== filter;
		});
	});
});
