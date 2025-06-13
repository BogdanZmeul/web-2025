document.addEventListener('DOMContentLoaded', function() {
    const toggleCartButton = document.getElementById('toggleCartButton');
    const cartAside = document.getElementById('cartAside');

    // Перемикання видимості aside при натисканні на кнопку
    toggleCartButton.addEventListener('click', function() {
        cartAside.classList.toggle('active'); // Додаємо/видаляємо клас 'active'
        const isExpanded = cartAside.classList.contains('active');
        toggleCartButton.setAttribute('aria-expanded', isExpanded); // Оновлюємо атрибут доступності
    });

    // Додатково: Закриття aside при кліку поза ним
    document.addEventListener('click', function(event) {
        // Перевіряємо, чи клік був поза aside та поза кнопкою toggleCartButton
        if (cartAside.classList.contains('active') &&
            !cartAside.contains(event.target) &&
            !toggleCartButton.contains(event.target)) {
            cartAside.classList.remove('active');
            toggleCartButton.setAttribute('aria-expanded', 'false');
        }
    });
});