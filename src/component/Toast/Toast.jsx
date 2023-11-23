// Toast.js

import  { useState, useEffect } from 'react';

const Toast = ({ message, type, onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 5000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const toastClass = `toast ${
        isVisible ? 'top-4 translate-y-0 transition-4s' : 'top-[-100%] translate-y-4 shadow-xl'
    } fixed top-4  right-4 rounded-xl transition-all duration-500`;

    const contentClass = `toast-content ${
        type === 'success' ? 'bg-[#64DD17]' : 'bg-[#F44336] rounded-xl p-8 transition-all duration-500'
    }`;


    return (
        <div className={toastClass}>
            <div className={contentClass}>
                <span className="text-white">{message}</span>
                <div className="icon me-4">
                    {/*${type==="success"?<img src ={}/>}*/}
                </div>
            </div>
        </div>
    );
};

export default Toast;
