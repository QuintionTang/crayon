/**
 * 菜单数据
 *
 * 管理系统菜单数据
 * TODO：需要优化，暂对更深一层的菜单结构支持不好
 */
const MenusData = [
    {
        title: "仪表盘",
        icon: "feather icon-home",
        key: "dashboard",
        children: [
            {
                title: "默认",
                key: "dashboardDefault",
                parentKey: "dashboard",
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
                parentKey: "tablesType",
                url: "/tables/antd",
            },
        ],
    },
    {
        category: true,
        title: "应用模块",
        key: "apps",
    },
    {
        title: "商城",
        icon: "feather icon-shopping-cart",
        key: "ecommerce",
        children: [
            {
                title: "商品列表",
                key: "ecommerceProducts",
                parentKey: "ecommerce",
                url: "/ecommerce/products",
            },
        ],
    },
];
export default MenusData;
