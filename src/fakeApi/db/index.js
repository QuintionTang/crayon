import { users } from "./data";
import { deepCopy, findInArray } from "@/helper/index";

class FakeDb {
    constructor() {
        this.users = deepCopy(users);
    }
    checkAuth(username, password) {
        const { users } = this;
        if (username && password) {
            const findUser = findInArray(
                users,
                (item) =>
                    item.username === username && item.password === password
            );
            if (findUser) {
                delete findUser.password;
                findUser.authorized = true;
            }
            return findUser;
        } else {
            return false;
        }
    }
}

export default new FakeDb();
