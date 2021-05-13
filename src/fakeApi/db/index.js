import { users, products } from "./data";
import { deepCopy, findInArray } from "@/helper/index";
import collectionHelper from "./collectionHelper";
class FakeDb {
    constructor() {
        this.users = deepCopy(users);
        this.productsHelper = new collectionHelper(products);
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
    products(params) {
        const result = this.productsHelper.list(params);
        return result;
    }
}

export default new FakeDb();
