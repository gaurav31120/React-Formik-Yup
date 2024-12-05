import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";

const DynamicForm = () => {
  const validationSchema = Yup.object().shape({
    employees: Yup.array().of(
      Yup.object().shape({
        firstName: Yup.string().required("This field is required"),
        lastName: Yup.string().required("This field is required"),
        email: Yup.string()
          .email("Invalid Email")
          .required("This field is required"),
      })
    ),
  });
  return (
    <>
      <Formik
        initialValues={{
          employees: [{ firstName: "", lastName: "", email: "" }],
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <Form>
            <div className="form-group">
              <h4>Add multiple employees</h4>
              <FieldArray
                name="employees"
                render={(arrayHelpers) => {
                  return (
                    <div>
                      {formik.values.employees.map((employees, index) => (
                        <>
                          <div className="mt-2" key={index}>
                            {index > 0 && (
                              <div className="float-end">
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  Remove
                                </button>
                              </div>
                            )}
                            {
                              <div className="card" style={{ padding: 5 }}>
                                <div className="card-title">
                                  {`Employee ${index + 1}`}
                                </div>
                                <div className="card-body">
                                  <div className="form-group">
                                    <label
                                      htmlFor={`employees.${index}.firstName`}
                                    >
                                      First Name
                                    </label>
                                    <Field
                                      type="text"
                                      className="form-control"
                                      name={`employees.${index}.firstName`}
                                      id={`employees.${index}.firstName`}
                                    />
                                    <ErrorMessage
                                      component="span"
                                      className="field_error"
                                      name={`employees.${index}.firstName`}
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label
                                      htmlFor={`employees.${index}.lastName`}
                                    >
                                      Last Name
                                    </label>
                                    <Field
                                      type="text"
                                      className="form-control"
                                      name={`employees.${index}.lastName`}
                                      id={`employees.${index}.lastName`}
                                    />
                                    <ErrorMessage
                                      component="span"
                                      className="field_error"
                                      name={`employees.${index}.lastName`}
                                    />
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor={`employees.${index}.email`}>
                                      Email
                                    </label>
                                    <Field
                                      type="text"
                                      className="form-control"
                                      name={`employees.${index}.email`}
                                      id={`employees.${index}.email`}
                                    />
                                    <ErrorMessage
                                      component="span"
                                      className="field_error"
                                      name={`employees.${index}.email`}
                                    />
                                  </div>
                                </div>
                              </div>
                            }
                            {/* {`Employee ${index + 1}`}  */}
                          </div>
                        </>
                      ))}
                      <div className="form-group float-end mt-2">
                        <button
                          type="button"
                          className="btn btn-sucess"
                          onClick={() =>
                            arrayHelpers.insert(
                              formik.values.employees.length + 1,
                              { firstName: "", lastName: "", email: "" }
                            )
                          }
                        >
                          + Add
                        </button>

                        <br />
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                  );
                }}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn=primary btn-block mt-2">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default DynamicForm;
