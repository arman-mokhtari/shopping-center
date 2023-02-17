let span = document.querySelectorAll('.swiper-product-section span');
let product = document.querySelectorAll('.swiper-product-section .product')
let product_page = Math.ceil(product.length / 4);
let l = 0;
let movePer = 23.55;
let maxMove = 78;
// mobile_view	
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
	movePer = 50.80;
	maxMove = 530;
}

let right_mover = () => {
	l = l + movePer;
	if (product == 1) { l = 0; }
	for (const i of product) {
		if (l > maxMove) { l = l - movePer; }
		i.style.right = '-' + l + '%';
	}

}
let left_mover = () => {
	l = l - movePer;
	if (l <= 0) { l = 0; }
	for (const i of product) {
		if (product_page > 1) {
			i.style.right = '-' + l + '%';
		}
	}
}
span[0].onclick = () => { right_mover(); }
span[1].onclick = () => { left_mover(); }
