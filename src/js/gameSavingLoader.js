//import { reject, resolve } from "core-js/fn/promise";
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
    static load() {

        return read().then(data => json(data));

    }

    static convertor(str) {
        const json = String(str);
        const obj = JSON.parse(json);
        return obj;

    }


}