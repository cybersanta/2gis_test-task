export default class BookStoreService {

    _bookListURL = 'https://raw.githubusercontent.com/lastw/test-task/master/data/10-items.json'

    getBooks = async () => {
        const res = await fetch(this._bookListURL);

        if (!res.ok) {
            throw new Error(`Could not fetch ${this._bookListURL}`)
        } 

        const data = await res.json();
        
        data.items.forEach(element => {
            element.status = "toRead"
        });

        return data.items
    }
}