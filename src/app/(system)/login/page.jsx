"use client";
import styles from "./page.module.css";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validators/loginSchema";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function Login() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClose = () => {
    setError(false);
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data) {
    setLoading(true);
    const result = await signIn("credentials", {
      DRT: data.DRT,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      setLoading(false);
      setError(true);
      return;
    }
    setLoading(false);
    router.replace("/homeSystem");
  }

  return (
    <div className={styles.mainContainer}>
      <div className={styles.loginContainer}>
        <img
          src="/mackleaps-system-logo.png"
          alt="logo"
          className={styles.logo}
        />
        <form
          className={styles.inputContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.inputBloc}>
            <img
              src="/user-icon.svg"
              alt="avatar"
              className={errors.DRT ? styles.iconsError : styles.icons}
            />
            <div>
              <input type="text" placeholder="Usuário" {...register("DRT")} />
              {errors.DRT && (
                <span className={styles.error}>{errors.DRT.message}</span>
              )}
            </div>
          </div>
          <div className={styles.inputBloc}>
            <img
              src="/password-icon.svg"
              alt="password"
              className={errors.DRT ? styles.iconsError : styles.icons}
            />
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {errors.password && (
              <span className={styles.error}>{errors.password.message}</span>
            )}
          </div>
          <button>ENVIAR</button>
        </form>
      </div>
      <Snackbar
        open={error}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleClose}
      >
        <Alert
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          Não foi possível realizar login!
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
