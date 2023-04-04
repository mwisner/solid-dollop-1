import {FAKE_DATA} from "./data";

export const fetchAllSneakers = async () => {
    return Promise.resolve(FAKE_DATA).then((FAKE_DATA) => {
        console.log(FAKE_DATA);
        return FAKE_DATA
    });
};

