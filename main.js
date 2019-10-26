
const annoyance = {
	"email": {"description": "Requires filling an online form or writing an email"},
	"paper": {"description": "Requires posting a signed paper letter"}
}



const products = {
	"Magazines": [
		{"name": "Harvard Business Review", "url": "hbr.org", "annoyance": "email", "description": "You need to register to `subscription.co.uk` and fill in a support request form."}
	]
}

document.addEventListener('DOMContentLoaded', function(){
	for (const category of Object.keys(products)) {
		const categoryListElement = document.createElement('ul')
		const categoryNameElement = document.createElement('p')
		categoryNameElement.innerHTML = category

		for (const product of products[category]) {
			const productItemElement = document.createElement('li')
			productItemElement.innerHTML = product.name
			categoryListElement.appendChild(productItemElement)
		}
		document.getElementById('list').appendChild(categoryNameElement)
		document.getElementById('list').appendChild(categoryListElement)
	}
});
