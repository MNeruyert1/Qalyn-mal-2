const handler = () => {

    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let letter = document.getElementById('letter').value;

    if (name != "" && price != "") {

        price = parseInt(price);

        const education = document.getElementById('education').value;

        if (education == 'undergraduate') {
            price *= 1.5;
        } else if (education == 'college') {
            price *= 1.2;
        } else if (education == 'high-school') {
            price *= 1.05;
        } else {
            price *= 0.9;
        }

        const netWorth = document.getElementById('net-worth').value;

        if (netWorth == 'upper-class') {
            price *= 2;
        } else if (netWorth == 'middle-class') {
            price *= 1.5;
        } else {
            price *= 1.2;
        }

        const skills = document.getElementsByName('skills');

        const calculateSkills = (node_list, price) => {
            node_list.forEach(item => {
                if (item.checked) {
                    price += Number(item.value);
                }
            })
            return price;
        }

        price = calculateSkills(skills, price);

        const ages = document.getElementsByName('age');

        const calculateAge = (node_list, price) => {
            node_list.forEach(item => {
                if (item.checked) {
                    price *= Number(item.value);
                }
            })
            return price;
        }

        price = calculateAge(ages, price);

        const gossips = document.getElementsByName('gossips');

        for (var i = 0; i < gossips.length; i++) {
            if (gossips[i].value == 'attitude' && gossips[i].checked) {
                price *= 0.85;;
            } else if (gossips[i].value == 'character' && gossips[i].checked) {
                price *= 0.9;
            } else if (gossips[i].value == 'person' && gossips[i].checked) {
                price -= 200;
            }
        }

        let person = {

            bride_name: name,

            bride_price: price,

            letter_to_bride: letter

        }

        alert(`The price for your bride ${person.bride_name} is ${person.bride_price}. Your love letter is "${person.letter_to_bride}"`);

    } else {

        alert('Error! Enter Your Name and Your Age!');
    }
}

let button = document.getElementById('submit');
button.addEventListener('click', handler);
