import { notification } from 'antd';
const Helpers = {
    showNotification: (type, message, description, time) => {
        notification[type]({
            message: message,
            description: description,
            duration: time
        });
    }
}

export default Helpers;