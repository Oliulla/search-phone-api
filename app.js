const loadPhones = async (searchText) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhones(data.data);
}

const displayPhones = (phones) => {
    // console.log(phones)

    const phoneContainer = document.getElementById('phones-container');
    phones.forEach(phone => {
        const {image, phone_name} = phone;

        const phoneCard = document.createElement('div');
        phoneCard.classList.add('col');
        
        phoneCard.innerHTML = `
        <div class="card p-4">
            <img src="${image}" class="card-img-top" >
            <div class="card-body">
                <h5 class="card-title">${phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `
        phoneContainer.appendChild(phoneCard);
    })
}

const searchText = () => {
    const searchText = document.getElementById('search-field').value;
    loadPhones(searchText)
}

// add event listener on search button
document.getElementById('search-btn').addEventListener('click', btn => {
    searchText()
})

// press enter button for search
document.getElementById('search-field').addEventListener('keypress', event => {
    event.key === 'Enter' ? searchText() : false;
})

// loadPhones()