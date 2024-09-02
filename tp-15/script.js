let offset = 1; 

const fetchPokemonData = async (startId, limit) => {
    const pokemonData = [];

    for (let i = startId; i < startId + limit; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`);
        if (!response.ok) {
            // Manejo de errores si no se encuentra el Pokémon
            console.error(`No se pudo cargar el Pokémon con ID ${i}`);
            continue;
        }
        const data = await response.json();
        pokemonData.push({
            nombre: data.name,
            id: data.id,
            habilidad: data.abilities[0].ability.name,
            movimientos: data.moves.slice(0, 4).map(moveInfo => moveInfo.move.name).join(', '),
            foto: data.sprites.front_shiny,
            tipos: data.types.map(typeInfo => typeInfo.type.name).join(', ')
        });
    }

    displayPokemonData(pokemonData);
};

const displayPokemonData = (pokemonData) => {
    const grid = document.getElementById('pokemon-grid');
    pokemonData.forEach(pokemon => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-4');

        card.innerHTML = `
            <div class="card">
                <img src="${pokemon.foto}" class="card-img-top card-img" alt="${pokemon.nombre}">
                <div class="card-body">
                    <h5 class="card-title">${pokemon.nombre}</h5>
                    <p class="card-text"><strong>Tipos:</strong> ${pokemon.tipos}</p>
                    <p class="card-text"><strong>Habilidad:</strong> ${pokemon.habilidad}</p>
                    <p class="card-text"><strong>Movimientos:</strong> ${pokemon.movimientos}</p>
                    <a href="#" class="btn btn-primary">Más información</a>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
};

const loadMoreButton = () => {
    const button = document.createElement('button');
    button.textContent = 'Cargar más Pokémon';
    button.classList.add('btn', 'btn-primary', 'mt-4');
    button.addEventListener('click', () => {
        offset += 10; // Incrementa el offset para la próxima carga
        fetchPokemonData(offset, 10); // Carga los próximos 10 Pokémon
    });

    const container = document.getElementById('load-more-container');
    container.innerHTML = ''; // Limpia el contenedor antes de agregar el nuevo botón
    container.appendChild(button);
};

// Inicialmente cargamos los primeros 10 Pokémon
fetchPokemonData(offset, 10).then(() => {
    loadMoreButton(); // Agrega el botón después de la primera carga
});
