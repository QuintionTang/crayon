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
} from "ant-design-vue";

const antd = (app) => {
    app.use(Layout);
    app.use(Row);
    app.use(Col);
    app.use(Dropdown);
    app.use(Form);
    app.use(Alert);
    app.use(Breadcrumb);
    app.use(Input);
    app.use(Button);
    app.use(Card);
};
export default antd;
