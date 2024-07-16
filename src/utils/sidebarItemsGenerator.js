import { jsx as _jsx } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sidebarItemsGenerator = (items, role) => {
    const sidebarItems = items.reduce((acc, item) => {
        if (item.path && item.name) {
            acc.push({
                key: item.name,
                label: _jsx(NavLink, { to: `/${role}/${item.path}`, children: item.name }),
            });
        }
        if (item.children) {
            acc.push({
                key: item.name,
                label: item.name,
                children: item.children.map((child) => ({
                    key: child.name,
                    label: _jsx(NavLink, { to: `/${role}/${child.path}`, children: child.name }),
                })),
            });
        }
        return acc;
    }, []);
    return sidebarItems;
};
