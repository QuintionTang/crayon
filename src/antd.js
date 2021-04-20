import {
    Layout,
    Row,
    Col,
    Breadcrumb,
    Input,
    Button,
    Form,
    Card,
    Alert,
    Dropdown,
    Menu,
    Table,
    Statistic,
} from "ant-design-vue";

const usedComponents = [
    Layout,
    Table,
    Row,
    Col,
    Dropdown,
    Menu,
    Form,
    Alert,
    Breadcrumb,
    Input,
    Button,
    Card,
    Statistic,
];
const antd = (app) => {
    for (const antComponent of usedComponents) {
        app.use(antComponent);
    }
};
export default antd;
