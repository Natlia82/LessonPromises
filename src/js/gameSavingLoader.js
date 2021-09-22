//import { reject, resolve } from "core-js/fn/promise";
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
    static load() {

        return new Promise((resolve, reject) => {

            read().then((data) => {
                json(data).then((value) => {

                    resolve(new String(value));
                })
            });

        });
    }


}