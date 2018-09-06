import Person from "@material-ui/icons/Person";
import Email from "@material-ui/icons/Email";
import Info from "@material-ui/icons/Info";
import UserRegistryContainer from "../views/UserRegistry/Container.jsx";
import MailerContainer from "../views/Mailer/Container";
import InfoPresentation from "../views/Info/Presentation";

const dashboardRoutes = [
    {
        path: "/info",
        sidebarName: "Info",
        navbarName: "Info",
        icon: Info,
        component: InfoPresentation
    },
    {
        path: "/users",
        sidebarName: "User Registry",
        navbarName: "User Registry",
        icon: Person,
        component: UserRegistryContainer
    },
    {
        path: "/emails",
        sidebarName: "Mailer",
        navbarName: "Mailer",
        icon: Email,
        component: MailerContainer
    },
    {redirect: true, path: "/", to: "/info", navbarName: "Redirect"}
];

export default dashboardRoutes;