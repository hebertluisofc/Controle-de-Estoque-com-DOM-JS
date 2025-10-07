const produtos = document.querySelectorAll('.produto');
const totalElement = document.getElementById('total');

function atualizarTotal() {
    let total = 0;
    produtos.forEach(produto => {
        const precoTexto = produto.querySelector('.price').textContent.replace('R$', '').trim();
        const preco = parseFloat(precoTexto);
        const quantidade = parseInt(produto.querySelector('.quantity').value) || 0;
        total += preco * quantidade;
    });
    totalElement.textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

document.querySelectorAll('.quantity').forEach(input => {
    input.addEventListener('input', atualizarTotal);
});

atualizarTotal();
