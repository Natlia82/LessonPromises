export default class GameSaving {
    /*  constructor(data) {
          const json = String(String.fromCharCode.apply(null, new Uint16Array(data)));
          const obj = JSON.parse(json);
      }*/
    static convertor(data) {
        const json = String(data);
        const obj = JSON.parse(json);
        return obj;

    }
}