import getData from '../utils/getData';

const Home =  async () => {

    const characters = await getData();

    const view =  `
        <div class="Characters">
        ${characters.results.map(character => `
            <article class="Character-item">
                <a href="#/${character.id}">
                    <img src="${character.image}" alt="${character.name}">
                    <h2>${character.name}</h2>
                </a>
            </article>
        `).join('') }
       `
    return view;
}

export default Home;


// import getData from '../utils/getData';

// const Home = async () => {
//     const data = await getData();
    
//     const rocketsArray = data.rockets || []; 

//     const view = `
//         <div class="Rockets">
//         ${rocketsArray.map(rocket => `
//             <article class="Rocket-item">
//                 <a href="#/${rocket.id}">
//                     <img src="${rocket.links.patch.small}" alt="${rocket.name}">
//                     <h2>${rocket.name}</h2>
//                 </a>
//             </article>
//         `).join('')}
//        </div>
//     `;

//     return view;
// }

// export default Home;
