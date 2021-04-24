const MenusData = [
    {
        title: "仪表盘",
        icon: "feather icon-home",
        key: "dashboard",
        children: [
            {
                title: "默认",
                key: "dashboardDefault",
                url: "/dashboard/default",
            },
        ],
    },
    {
        category: true,
        title: "表格 & 表单",
        key: "tables",
    },
    {
        title: "表格",
        icon: "feather icon-grid",
        key: "tablesType",
        children: [
            {
                title: "Antd表格",
                key: "antdTables",
                url: "/tables/antd",
            },
        ],
    },
];
export default MenusData;
