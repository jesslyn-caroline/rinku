import { Bounce, ToastContainer } from "react-toastify";

function ToastContainer_() {
    return (
    <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        progressClassName="!bg-yellow-400"
        transition={Bounce}
    />
)}

export default ToastContainer_