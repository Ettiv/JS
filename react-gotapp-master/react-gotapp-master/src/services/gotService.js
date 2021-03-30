export default class GotService {
    constructor() {
        this._apiBase = "https://anapioficeandfire.com/api";
    }

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not feth ${url}` +
                `, recived ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacter = async () => {
        const res = await this.getResourse(`/characters`);
        return res.map(this._transormCharacter);
    }

    getCharacter = async (id) => {
        const res = await this.getResourse(`/characters/${id}`);
        return this._transormCharacter(res);
    }

    getAllHouses = async () => {
        const res = await this.getResourse(`/houses`);
        return res.map(this._transormHouse);
    }

    getHouse = async (id) => {
        const res = await this.getResourse(`/houses/${id}`);
        return this._transormHouse(res);
    }

    getAllBooks = async () => {
        const res = await this.getResourse(`/books`);
        return res.map(this._transormBook);
    }   

    getBook = async (id) => {
        const res = await this.getResourse(`/books/${id}`);
        return this._transormBook(res);
    }

    _transormCharacter(char) {
        return {
            name: char.name ? char.name : 'no data',
            gender: char.gender ? char.gender : 'no data',
            born: char.born ? char.born : 'no data',
            died: char.died ? char.died : 'no data',
            culture: char.cultures ? char.cultures : 'no data'
        }
    }

    _transormHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.wordsn,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    
    _transormBook(book) {
        return {
            name: book.name,
            numberOfPages: book.numberOfPages,
            publisher: book.publisher,
            released: book.released
        }
    }

}

