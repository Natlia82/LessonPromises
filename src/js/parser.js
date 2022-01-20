import GameSaving from './gameSaving';
export default function json(data) {
    return new Promise((resolve, reject) => {
        // эмуляция обработки ArrayBuffer
        setTimeout(() => {
            const rez = GameSaving.convertor(String.fromCharCode.apply(null, new Uint16Array(data)));
            resolve(rez);
        }, 500);
    });
}