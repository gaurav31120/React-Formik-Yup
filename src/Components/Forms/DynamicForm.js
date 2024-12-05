import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

const DynamicForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          employees: [],
        }}
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
                            {
                              <div className="card" style={{ padding: 5 }}>
                                <div className="card-title">
                                  {`Employee ${index + 1}`}
                                </div>
                                <div className="card-body">
                                  <div className="form-group">
                                    <label
                                      htmlFor={`Employees.${index}.firstName`}
                                    >
                                      First Name
                                    </label>
                                    <Field
                                      type="text"
                                      className="form-control"
                                      name={`Employees.${index}.firstName`}
                                      id={`Employees.${index}.firstName`}
                                    ></Field>
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
                              { firstname: "" }
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
