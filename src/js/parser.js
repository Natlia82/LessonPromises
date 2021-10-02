export default function json(data) {
    return new Promise((resolve, reject) => {
        // эмуляция обработки ArrayBuffer
        setTimeout(() => {
            const json = String(String.fromCharCode.apply(null, new Uint16Array(data)));
            const obj = JSON.parse(json);
            resolve(obj);
        }, 5);
    });
}