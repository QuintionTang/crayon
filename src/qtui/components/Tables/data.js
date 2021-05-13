const baseColumns = [
    {
        dataIndex: "name",
        key: "name",
        slots: {
            title: "customTitle",
            customRender: "name",
        },
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        slots: {
            customRender: "tags",
        },
    },
    {
        title: "Action",
        key: "action",
        width: 180,
        slots: {
            customRender: "action",
        },
    },
];
const sortColumns = [
    {
        dataIndex: "name",
        key: "name",
        sorter: true,
        slots: {
            title: "customTitle",
            customRender: "name",
        },
    },
    {
        title: "Age",
        dataIndex: "age",
        sorter: true,
        key: "age",
    },
    {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        filters: [
            {
                text: "Male",
                value: "male",
            },
            {
                text: "Female",
                value: "female",
            },
        ],
    },
    {
        title: "Tags",
        key: "tags",
        dataIndex: "tags",
        slots: {
            customRender: "tags",
        },
    },
    {
        title: "Action",
        key: "action",
        slots: {
            customRender: "action",
        },
    },
];
const dataSource = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        gender: "female",
        tags: ["nice", "developer"],
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        gender: "female",
        tags: ["loser"],
    },
    {
        key: "3",
        name: "Harper Ballard",
        age: 32,
        gender: "male",
        tags: ["cool", "teacher"],
    },
    {
        key: "4",
        name: "Jefferson Rowe",
        age: 34,
        gender: "male",
        tags: ["cool", "teacher"],
    },
    {
        key: "5",
        name: "Frank Robbins",
        age: 28,
        gender: "male",
        tags: ["cool", "teacher"],
    },
    {
        key: "6",
        name: "Joe Black",
        age: 24,
        gender: "male",
        tags: ["cool", "teacher"],
    },
    {
        key: "7",
        name: "Pearlie Lowe",
        age: 32,
        gender: "male",
        tags: ["cool", "teacher"],
    },
    {
        key: "8",
        name: "Nora Morales",
        age: 33,
        gender: "male",
        tags: ["cool", "teacher"],
    },
    {
        key: "9",
        name: "Howe England",
        age: 30,
        gender: "male",
        tags: ["designer"],
    },
    {
        key: "10",
        name: "Goodman Blair",
        age: 29,
        gender: "male",
        tags: ["engineer"],
    },
];
export { baseColumns, sortColumns, dataSource };
