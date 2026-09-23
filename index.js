const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const themeToggle = document.querySelector('.theme-toggle');
const spans = themeToggle.querySelectorAll('span');
const today = new Date().toISOString().split('T')[0];

document.getElementById('date-area').value = today;


menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
});

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    spans.forEach(span => span.classList.toggle('active'));
});

Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productCode}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping === 'Recusado' ? 'danger' : order.shipping === 'Pendente' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td class="primary"><a href="#">Detalhes</a></td>
                        `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});