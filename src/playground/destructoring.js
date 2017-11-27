/**
 * Created by Mitaka on 18-Nov-17.
 */
// const person = {
//     name: 'Dimitar',
//     age: 39,
//     location: {
//         city: 'Las Vegas',
//         temp: 50
//     }
// };

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);