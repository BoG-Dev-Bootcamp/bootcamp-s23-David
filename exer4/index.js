import figlet from "figlet";
import axios from "axios";
const { textSync } = figlet;

const endpoint = 'https://pokeapi.co/api/v2/pokemon/' + String(Math.floor(Math.random() * 1009));

async function getPoke() {
    
    try {
        const response = await axios.get(endpoint);
        const name = response.data.name;

        console.log(figlet.textSync(name, {
            font: 'broadway',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }));
    } catch (error) {
        console.log('No pokemon found.');
    };
}
getPoke();
