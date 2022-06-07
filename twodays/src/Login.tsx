import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import { userLogin } from "./Services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
    // useNavigate
    const navigate = useNavigate();

    const validateSchema = Yup.object({
        email: Yup.string().required("Email Empty!").email("Email Format Fail!"),
        password: Yup.string().required("Password Empty!").min(3, "Password must be at least 3 characters!").max(10, "Password must be at most 10 characters!"),
    });

    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: false,
        },
        validationSchema: validateSchema,
        onSubmit: (values) => {
            userLogin(values.email, values.password)
                .then((res) => {
                    const user = res.data.user[0];
                    const statu = user.durum;
                    const mesaj = user.mesaj;
                    if (statu) {
                        toast.success(mesaj);
                        setTimeout(() => {
                            navigate("/dashboard", { state: user.bilgiler });
                        }, 1000);
                    } else {
                        toast.error(mesaj);
                    }
                })
                .catch((err) => {
                    toast.error(err.message);
                });
        },
    });

    return (
        <>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <h2>Admin Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email address
                            </label>
                            <input onChange={handleChange} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                            {errors.email && <div className="text-danger">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input onChange={handleChange} type="password" className="form-control" id="password" />
                            {errors.password && <div className="text-danger">{errors.password}</div>}
                        </div>
                        <div className="mb-3 form-check">
                            <input onChange={handleChange} type="checkbox" className="form-check-input" id="remember" />
                            <label className="form-check-label" htmlFor="remember">
                                Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
                <div className="col-sm-4"></div>
            </div>
        </>
    );
}

export default Login;
