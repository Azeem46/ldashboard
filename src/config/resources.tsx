import { DashboardOutlined, ShopOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";
//we can do crud operation for specific link with help of refine link
export const resourses: IResourceItem[] = [
{
    name: 'dashboard',
    list: '/',
    meta: {
        label: 'Dashboard',
        icon: <DashboardOutlined />
    }
},
{
    name: 'companies',
    list: '/companies',
    show: '/companies/:id', //to show specific company
    create: '/companies/new',
    edit: '/companies/edit/:id',
    meta: {
        label: 'Companies',
        icon: <ShopOutlined />
    }
},
{
    name: 'tasks',
    list: '/tasks',
    create: '/tasks/new',
    edit: '/tasks/edit/:id',
    meta: {
        label: 'Tasks',
        icon: <ShoppingCartOutlined />
    }
}
]