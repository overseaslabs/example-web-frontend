// @material-ui/icons

import Person from "@material-ui/icons/Person";
import UserRegistryContainer from "../views/UserRegistry/Container.jsx";

const dashboardRoutes = [
    {
        path: "/users",
        sidebarName: "User Registry",
        navbarName: "User Registry",
        icon: Person,
        component: UserRegistryContainer
    },
    {redirect: true, path: "/", to: "/users", navbarName: "Redirect"}
];

export default dashboardRoutes;
