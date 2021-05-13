import { deepCopy } from "@/helper/index";
class collectionHelper {
    constructor(data) {
        this._collection = deepCopy(data);
    }
    list(params) {
        const { offset, limit, orderby, sort } = params;
        const result = this._collection;

        return {
            data: result.slice(offset, limit),
            total: result.length,
        };
    }
}
export default collectionHelper;
