import { Formik, Field, Form, ErrorMessage } from "formik";
// import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import "yup-phone";
import "yup-phone-lite";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  // phone: Yup.number().required("This field is required"),
  phone: Yup.string()
    .phone(null, true, "Please enter valid phone number4")
    .required("Please enter valid phone number"),
  password: Yup.string()
    .required("This field is required")
    .min(6, "must be of 6 characters long"),
  confirmPassword: Yup.string()
    .required("This field is required")
    .min(6, "must be of 6 characters long")
    .oneOf([Yup.ref("password")], "Password must match"),
  termsAndCondtions: Yup.boolean().oneOf(
    [true],
    "Please accept terms and conditions"
  ),
  additionalInfoFlag: Yup.boolean(),
  additionalInfo: Yup.string().when("additionalInfoFlag", {
    is: true,
    then: () => Yup.string().required("This field is required"),
  }),
});

const SigninForm = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     gender: "male",
  //     email: "",
  //     phone: "",
  //     password: "",
  //     confirmPassword: "",
  //     subscription: "",
  //     termsAndCondtions: false,
  //     additionalInfoFlag: false,
  //     additionalInfo: "",
  //   },
  //   validationSchema: SignUpSchema,
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          gender: "male",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          subscription: "",
          termsAndCondtions: false,
          additionalInfoFlag: false,
          additionalInfo: "",
        }}
        validationSchema={SignUpSchema}
        // validate={(values) => {
        //   const errors = {};

        //   if (!values.firstName) {
        //     errors.firstName = "Required";
        //   }

        //   if (!values.lastName) {
        //     errors.lastName = "Required";
        //   }

        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        //   ) {
        //     errors.email = "Thsi must a valid email";
        //   }
        //   if (!values.password) {
        //     errors.password = "Required";
        //   }

        //   if (!values.confirmPassword) {
        //     errors.confirmPassword = "Required";
        //   } else if (values.password !== values.confirmPassword) {
        //     errors.confirmPassword =
        //       "Confirm password must be equal to password";
        //   }
        //   return errors;
        // }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            {/* // <form onSubmit={formik.handleSubmit}> */}
            {console.log(formik)}

            <div className="form-group">
              <label for="firstName">First Name</label>
              <Field type="text" name="firstName" className="form-control" />
              {/* <input
                type="text"
                className="form-control"
                name="firstName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              /> */}
              {/* {formik.touched.firstName && formik.errors.firstName && (
                <span className="field_error">{formik.errors.firstName}</span>
              )} */}
              <ErrorMessage
                name="firstName"
                component="span"
                className="field_error"
              />
            </div>
            <div className="form-group mt-2">
              <label for="lastName">Last Name</label>
              <Field type="text" name="lastName" className="form-control" />

              {/* <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              /> */}
              {/* {formik.touched.lastName && formik.errors.lastName && (
                <span className="field_error">{formik.errors.lastName}</span>
              )} */}
              <ErrorMessage
                name="lastName"
                component="span"
                className="field_error"
              />
            </div>
            <div className="form-group mt-2">
              <label>Gender</label>
              <div>
                <div className="form-check form-check-inline">
                  <Field
                    type="radio"
                    name="gender"
                    className="form-check-input"
                    value="male"
                    id="male"
                  />

                  {/* <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === "male"}
                  /> */}
                  <label className="form-check-label" for="male">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    type="radio"
                    name="gender"
                    className="form-check-input"
                    value="female"
                    id="female"
                  />
                  {/* <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === "female"}
                  /> */}
                  <label className="form-check-label" for="female">
                    Female
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <Field
                    type="radio"
                    name="gender"
                    className="form-check-input"
                    value="other"
                    id="other"
                  />
                  {/* <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    id="other"
                    value="other"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    checked={formik.values.gender === "other"}
                  /> */}
                  <label className="form-check-label" for="other">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group mt-2">
              <label for="email">Email</label>
              <Field type="email" name="email" className="form-control" />
              {/* <input
                type="text"
                className="form-control"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              /> */}
              {/* {formik.touched.email && formik.errors.email && (
                <span className="field_error">{formik.errors.email}</span>
              )} */}
              <ErrorMessage
                name="email"
                component="span"
                className="field_error"
              />
            </div>
            <div className="form-group mt-2">
              <label for="phone">Phone Number</label>
              <Field type="number" name="phone" className="form-control" />
              {/* <input
                type="number"
                className="form-control"
                name="phone"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              /> */}
              {/* {formik.touched.phone && formik.errors.phone && (
                <span className="field_error">{formik.errors.phone}</span>
              )} */}
              <ErrorMessage
                name="phone"
                component="span"
                className="field_error"
              />
            </div>
            <div className="form-group mt-2">
              <label for="password">Password</label>
              <Field type="password" name="password" className="form-control" />
              {/* <input
                type="password"
                className="form-control"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              /> */}
              {/* {formik.touched.password && formik.errors.password && (
                <span className="field_error">{formik.errors.password}</span>
              )} */}
              <ErrorMessage
                name="password"
                component="span"
                className="field_error"
              />
            </div>
            <div className="form-group mt-2">
              <label for="confirmPassword">Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className="form-control"
              />
              {/* <input
                type="password"
                className="form-control"
                name="confirmPassword"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword} */}
              {/* /> */}
              {/* {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <span className="field_error">
                    {formik.errors.confirmPassword}
                  </span>
                )} */}
              <ErrorMessage
                name="confirmPassword"
                component="span"
                className="field_error"
              />
            </div>

            <div className="form-group mt-2">
              <label for="confirmPassword">Subscription</label>
              <Field as="select" name="subscription" className="form-control">
                <option value="">Select</option>
                <option value="subscription-1">Free</option>
                <option value="subscription-2">Pro</option>
                <option value="subscription-3">Enterprise</option>
              </Field>
              {/* <select
                className="form-control"
                name="subscription"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subscription}
              >
                <option value="">Select</option>
                <option value="subscription-1">Free</option>
                <option value="subscription-2">Pro</option>
                <option value="subscription-3">Enterprise</option>
              </select> */}
            </div>
            <div className="form-group mt-2">
              <div className="form-check">
                <Field
                  type="checkbox"
                  className="form-check-input"
                  name="additionalInfoFlag"
                  id="additionalInfoFlag"
                />
                {/* <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="additionalInfoFlag"
                  name="additionalInfoFlag"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.additionalInfoFlag}
                /> */}
                <label
                  className="form-check-label"
                  htmlFor="additionalInfoFlag"
                >
                  Additional Information
                </label>
              </div>
            </div>

            {formik.values.additionalInfoFlag && (
              <div className="form-group mt-2">
                <label htmlFor="additionalInfo">
                  Enter additional Information
                </label>
                <Field
                  as="textarea"
                  className="form-control"
                  name="additionalInfo"
                  value={formik.values.additionalInfo}
                />

                {/* <textarea
                  className="form-control"
                  name="additionalInfo"
                  id="additionalInfo"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.additionalInfo}
                ></textarea> */}
                {/* {formik.touched.additionalInfo &&
                  formik.errors.additionalInfo && (
                    <span className="field_error">
                      {formik.errors.additionalInfo}
                    </span>
                  )} */}
                <ErrorMessage
                  name="additionalInfo"
                  component="span"
                  className="field_error"
                />
              </div>
            )}

            <div className="form-group mt-2">
              <div className="form-check">
                <Field
                  name="termsAndCondtions"
                  className="form-check-input"
                  type="checkbox"
                  id="termsAndCondtions"
                />
                {/* <input
                  className="form-check-input"
                  type="checkbox"
                  id="termsAndCondtions"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.termsAndCondtions}
                /> */}

                <label className="form-check-label" htmlFor="termsAndCondtions">
                  Accept terms and conditions.
                </label>
                {/* {formik.touched.termsAndCondtions &&
                  formik.errors.termsAndCondtions && (
                    <span className="field_error">
                      {formik.errors.termsAndCondtions}
                    </span>
                  )} */}
                <ErrorMessage
                  name="termsAndCondtions"
                  component="span"
                  className="field_error"
                />
              </div>
            </div>

            <div className="d-grid mt-2">
              <button type="submit" className="btn btn-primary btn-block">
                Sign Up
              </button>
            </div>
            {/* </form> */}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SigninForm;
