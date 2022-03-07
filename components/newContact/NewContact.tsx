import { Form, Formik } from "formik";

export default function NewContact() {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          profilePhoto: "",
          email: "",
          favourite: "",
          phones: [],
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, values, handleChange, errors, touched }) => (
          <div>
            <div>Upload</div>
            <Form onSubmit={handleSubmit}>
              <label>Full name</label>
              <input
                type="text"
                value={values.firstName}
                name="firstName"
                onChange={handleChange}
                placeholder="First name"
              />
              <input
                type="text"
                value={values.lastName}
                onChange={handleChange}
                name="lastname"
                placeholder="Last name"
              />
              <input
                type="profile photo"
                value={values.profilePhoto}
                name="profile photo"
                onChange={handleChange}
                placeholder="Profile photo"
              />
              <input
                type="text"
                value={values.email}
                name="email"
                onChange={handleChange}
                placeholder="Email"
              />
              <button type="submit">Save</button>
              <button>Cancel</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
}
