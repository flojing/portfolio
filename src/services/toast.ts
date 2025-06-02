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
      minWidth: "350px",
      maxWidth: "500px",
      padding: "15px 20px 20px",
      fontSize: "16px",
      whiteSpace: "normal",
      lineHeight: "1.5",
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
