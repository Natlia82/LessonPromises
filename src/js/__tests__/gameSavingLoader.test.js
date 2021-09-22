//import { TestScheduler } from '@jest/core';
import GameSavingLoader from '../gameSavingLoader';

test('should work with promise and async/await', async() => {
    //GameSavingLoader.load()
    const data = await GameSavingLoader.load();
    expect(data).toEqual({
        "id": 9, // id сохранения
        "created": 1546300800, // timestamp создания
        "userInfo": {
            "id": 1, // user id
            "name": "Hitman", // user name
            "level": 10, // user level
            "points": 2000 // user points
        }
    });
});