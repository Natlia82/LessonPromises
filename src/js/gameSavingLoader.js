//import { reject, resolve } from "core-js/fn/promise";
import read from './reader';
import json from './parser';


export default class GameSavingLoader {
    static load() {

        return read().then(data => json(data));
        // return read().then(data => json(data).then((data) => console.log("data")));
    }


}