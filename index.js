function toggleMenu() {
	const sidebar = document.querySelector('.sidebar')
	const body = document.body

	// Toggle hidden class for sidebar visibility
	sidebar.classList.toggle('hidden')

	// Toggle menu-open class for icon transformation and content shift
	body.classList.toggle('menu-open')
}

document.addEventListener('DOMContentLoaded', () => {
	const accordionHeaders = document.querySelectorAll(
		'[data-accordion-target]'
	)

	accordionHeaders.forEach(header => {
		header.addEventListener('click', () => {
			const item = header.parentElement
			const isActive = item.classList.contains('active')

			// Закрыть все открытые аккордеоны
			document
				.querySelectorAll('.accordion-item.active')
				.forEach(activeItem => {
					activeItem.classList.remove('active')
				})

			// Открыть или закрыть текущий аккордеон
			if (!isActive) {
				item.classList.add('active')
			}
		})
	})
})
