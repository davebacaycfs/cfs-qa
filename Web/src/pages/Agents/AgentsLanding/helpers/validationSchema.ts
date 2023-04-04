import * as Yup from "yup";

const agentRegisterValidationSchema = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Fullname field is required."),
    position: Yup.string().required("Position field is required."),
    bio: Yup.string().required("Bio field is required."),
    // avatar: Yup.string().required("avatar field is required."),
    phoneNumber: Yup.string().required("Phone Number field is required."),
    emailAddress: Yup.string().required("Email Address field is required."),
    address: Yup.string().required("Address field is required."),
    password: Yup.string()
      .required("Password field is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must contain 8 characters, one Uppercase, one lowercase, one number and one special case character."
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password field is required"),
  });

  return validationSchema;
};

export default agentRegisterValidationSchema;
