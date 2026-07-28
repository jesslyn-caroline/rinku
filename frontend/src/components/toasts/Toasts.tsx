import { Bounce, toast } from "react-toastify";

function showToast(message: string) {
    toast(message, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        closeButton: false,
        theme: "colored",
        className: '!bg-background !text-secondary !font-dm-mono !text-sm',
        progressClassName: 'bg-primary',
        transition: Bounce,
    });
}

export default showToast