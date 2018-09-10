import InfoIcon from "@material-ui/icons/Info";
import cryptoRandomString from 'crypto-random-string';

export default class {
    constructor(message, color = "info", icon = InfoIcon, place = "br") {
        this.id = cryptoRandomString(10);
        this.message = message;
        this.color = color;
        this.icon = icon;
        this.place = place;
    }
}