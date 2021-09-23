//import { reject, resolve } from "core-js/fn/promise";
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
    static load() {

        return new Promise((resolve, reject) => {

            read().then((data) => {
                json(data).then((value) => {
                    // let obj = JSON.parse(value)
                    // const obj = value.replace('\\/', '');

                    resolve(value);
                })
            });

        });
    }


}