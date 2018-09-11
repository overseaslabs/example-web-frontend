import InfoIcon from "@material-ui/icons/Info";
import cryptoRandomString from 'crypto-random-string';

/**
 * UI notification
 */
class Notification {

    /**
     * The default notification placement
     * @type {string}
     */
    static DEFAULT_PLACEMENT = "br";

    constructor(message, color = "info", icon = InfoIcon, place = Notification.DEFAULT_PLACEMENT) {
        this.id = cryptoRandomString(10);
        this.message = message;
        this.color = color;
        this.icon = icon;
        this.place = place;
    }
}

export default Notification;