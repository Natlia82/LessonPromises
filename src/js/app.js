// TODO: write your code here
import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
    const rez = saving;
    console.log(saving);
}, (error) => {
    console.log('ошибка');
});