import { notification } from 'antd';
const Helpers = {
    /**
     * 
     * @param {*} type 
     * @param {*} message 
     * @param {*} description 
     * @param {*} time 
     */
    showNotification: (type, message, description, time) => {
        notification[type]({
            message: message,
            description: description,
            duration: time
        });
    }
}

export default Helpers;