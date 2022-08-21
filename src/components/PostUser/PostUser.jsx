import React, { useEffect, useRef, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Input } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import * as Yup from "yup";
import "./_postUser.scss";
import { fetchPositions } from "../../redux/asyncActions/positions";
import { fetchToken } from "../../redux/asyncActions/token";
import SuccessRegistered from "./SuccessRegistered/SuccessRegistered";
const PostUser = () => {
  const fileRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const SUPPORTED_FORMATS = ["image/jpeg", "image/jpg"];
  const { positions, error, loading } = useSelector((state) => state.positions);
  const { token } = useSelector((state) => state.token);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPositions());
    dispatch(fetchToken());
  }, []);
  const phoneRegExp = /^\+38(0\d{9})$/;
  const emailRegExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  if (loading) return <h1 className="c-get-users__title"> Идет загрузка...</h1>;
  if (error) return <h1 className="c-get-users__title">{error}</h1>;
  return (
    <div className="c-post-user" id="sign-up">
      <div className="c-post-user__wrapper">
        <div className="c-post-user__header">
          <h3 className="c-post-user__title">
            {isSent
              ? "User successfully registered"
              : "Working with POST request"}
          </h3>
        </div>
        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            position_id: "",
            photo: "",
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string()
              .min(2, "The name must be at least 2 characters.")
              .max(60, "The name must be less than 60 characters")
              .required("Name is required"),
            email: Yup.string()
              .email("Email is invalid")
              .required("Email is required"),
            phone: Yup.string()
              .matches(phoneRegExp, "Incorrect phone number.")
              .required("Phone is required"),
            photo: Yup.mixed()
              .nullable()
              .required("Photo is required")
              .test(
                "FILE_SIZE",
                "Upload file is too big",
                (value) => !value || (value && value.size <= 1024 * 1024)
              )
              .test(
                "FILE_FORMAT",
                "Upload file has unsupported format",
                (value) =>
                  !value || (value && SUPPORTED_FORMATS.includes(value?.type))
              ),
            position_id: Yup.string().required("You didn't choose position"),
          })}
          onSubmit={(fields) => {
            let formData = new FormData();
            formData.append("name", fields.name);
            formData.append("email", fields.email);
            formData.append("phone", fields.phone);
            formData.append("position_id", fields.position_id);
            formData.append("photo", fields.photo);
            console.log(token);
            return fetch(
              "https://frontend-test-assignment-api.abz.agency/api/v1/users",
              { method: "POST", body: formData, headers: { Token: token } }
            )
              .then(function (response) {
                return response.json();
              })
              .then(function (data) {
                console.log(data);
                if (data.success) {
                  // let successLog = document.getElementById("success-log");
                  // successLog.innerHTML = (
                  //   <SuccessRegistered register={data.message} />
                  // );
                  setIsSent(true);

                  console.log(data.message);
                } else {
                  console.log(data.error);
                }
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
          render={({ errors, status, touched, setFieldValue, values }) =>
            isSent ? (
              <SuccessRegistered />
            ) : (
              <Form className="c-post-user__form">
                <div className="c-post-user__form-group">
                  <Field
                    name="name"
                    type={"text"}
                    placeholder="Your name"
                    className={
                      "c-post-user" +
                      (errors.name && touched.name ? "__error" : "__input")
                    }
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="c-post-user__error--text"
                  />
                </div>
                <div className="c-post-user__form-group">
                  <Field
                    name="email"
                    type={"email"}
                    placeholder="Email"
                    className={
                      "c-post-user" +
                      (errors.email && touched.email ? "__error" : "__input")
                    }
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="c-post-user__error--text"
                  />
                </div>
                <div className="c-post-user__form-group">
                  <Field
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    className={
                      "c-post-user" +
                      (errors.phone && touched.phone ? "__error" : "__input")
                    }
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="c-post-user__error--text"
                  />
                </div>
                <div className="c-post-user__form-group">
                  <p className="c-post-user__position-title">
                    Select your position
                  </p>
                  <div className="c-post-user__postion-group">
                    {positions.map((position) => (
                      <label
                        key={position.id}
                        className="c-post-user__position-label"
                      >
                        <Field
                          type="radio"
                          name="position_id"
                          value={String(position.id)}
                          className={"c-post-user__position-radio-btn-hide"}
                        />
                        <span className="c-post-user__position-radio-btn">
                          <span className="c-post-user__position-radio-btn-checked"></span>
                        </span>
                        {position.name}
                      </label>
                    ))}
                  </div>
                  <ErrorMessage
                    name="position_id"
                    component="div"
                    className="c-post-user__error--text"
                  />
                </div>
                <div className="c-post-user__form-group">
                  <input
                    ref={fileRef}
                    type="file"
                    hidden
                    name="photo"
                    onChange={(event) => {
                      setFieldValue("photo", event.target.files[0]);
                    }}
                  />
                  <div className="c-post-user__upload-group">
                    <button
                      onClick={() => {
                        fileRef.current.click();
                      }}
                      className={
                        "c-post-user" +
                        (errors.phone && touched.phone
                          ? "__error-upload-btn"
                          : "__upload-btn")
                      }
                    >
                      Upload
                    </button>
                    <div
                      className={
                        "c-post-user" +
                        (errors.phone && touched.phone
                          ? "__error-uploaded-photo"
                          : "__uploaded-photo")
                      }
                    >
                      {values.photo.name === undefined
                        ? "Upload your photo"
                        : values.photo.name}
                    </div>
                  </div>
                  <ErrorMessage
                    name="photo"
                    component="div"
                    className="c-post-user__error--text"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="c-post-user__submit">
                    Sign Up
                  </button>
                </div>
              </Form>
            )
          }
        />
      </div>
    </div>
  );
};

export default PostUser;
