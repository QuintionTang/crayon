const productsColumns = [
    {
        dataIndex: "title",
        key: "title",
        title: "Product",
        slots: {
            customRender: "name",
        },
    },
    {
        title: "Price",
        dataIndex: "price",
        key: "price",
        slots: {
            customRender: "price",
        },
    },
    {
        title: "Sales",
        dataIndex: "sales",
        key: "sales",
        slots: {
            customRender: "number",
        },
    },
    {
        title: "Views",
        key: "views",
        dataIndex: "views",
        slots: {
            customRender: "number",
        },
    },
    {
        title: "Action",
        key: "action",
        width: 180,
        align: "center",
        slots: {
            customRender: "action",
        },
    },
];

export { productsColumns };
