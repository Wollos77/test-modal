// Счетчик соусов
let counts = {
	ketchup: 0,
	syrny: 0,
	blu: 0,
	barbekyu: 0,
}
// Цена, общая, первый соус
const price = 60
let totalCost = 0
let firstSauceSelected = false
// () уменьшение
function decrement(type) {
	if (counts[type] > 0) {
		counts[type]--
		updateCounts()
	}
}
// () увелечения
function increment(type) {
	if (!firstSauceSelected) {
		counts[type]++
		firstSauceSelected = true
	} else {
		let totalSauces = Object.values(counts).reduce((acc, val) => acc + val, 0)
		if (totalSauces < 10) {
			counts[type]++
		}
	}
	updateCounts()
}
// () обновления счетчиков и стоимости заказа
function updateCounts() {
	let total = 0
	let selectedSauces = []
	let firstSaucePrice = firstSauceSelected ? price : 0

	for (let type in counts) {
		total += counts[type] * price
		document.getElementById(type + 'Count').textContent = counts[type]
		if (counts[type] > 0) {
			selectedSauces.push(type + ': ' + counts[type])
		}
	}

	totalCost = total - firstSaucePrice
	if (totalCost < 0) {
		totalCost = 0
	}
	document.getElementById('totalCost').textContent = totalCost + ` Р`
}
