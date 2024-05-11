export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
];

export const renderToppings = () => {
    const toppingElements = document.querySelectorAll('.topping')
    toppingElements.forEach((element) => element.remove())

    toppings.forEach((topping, index) => {
        const item = document.createElement('div')
        item.innerHTML = `
            <h3>${topping.name}</h3>
            <p>${topping.price}Kč</p>
        `

        item.classList.add('topping')
        if (topping.selected) {
            item.classList.add('topping--selected');
        }

        item.addEventListener('click', () => {
            toggleTopping(index)
        })

        document.getElementById('topping--list').appendChild(item)
    })
}

export const toggleTopping = (index) => {
        toppings[index].selected =!toppings[index].selected
        renderToppings()
    }
