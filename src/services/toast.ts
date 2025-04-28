import { toast } from "react-toastify";

const toastSuccess = (title: string) => {
  toast.success(title, {
    position: "top-center",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: false,
    theme: "colored",
    style: {
      background: "var(--color-blue)",
      color: "var(--color-chocolate)",
    },
  });
};

const toastError = (title: string) => {
  toast.error(title, {
    position: "top-center",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    hideProgressBar: false,
    theme: "colored",
  });
};

export { toastSuccess, toastError };
