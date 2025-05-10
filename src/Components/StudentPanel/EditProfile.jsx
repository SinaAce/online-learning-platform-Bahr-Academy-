import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../API/StudentPanel/getUserInfo";
import { editUserInfo } from "../../API/StudentPanel/editUserInfo";
import OnSetFormData from "../../API/StudentPanel/form-data";

const EditProfile = () => {
  const [initialValues, setInitialValues] = useState(null);

  const GetProfileInfo = async () => {
    try {
      const callApi = await getUserInfo();
      const data = {
        FName: callApi?.FName,
        LName: callApi?.LName,
        UserAbout: callApi?.UserAbout,
        HomeAdderess: callApi?.HomeAdderess,
        NationalCode: callApi?.NationalCode,
        BirthDay: callApi?.BirthDay,
      };
      setInitialValues(data);
    } catch (error) {
      console.error("error", error);
    }
  };

  const onSubmit = async (value) => {
    try {
      const res = OnSetFormData(value);
      const callApi = await editUserInfo(res);
      console.log(callApi);
      // for (let [key, value] of res.entries()) {
      //   console.log(`${key}: ${value}`);
      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProfileInfo();
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form className="flex flex-col w-4/12 gap-2 items-center">
          <label htmlFor="FName">نام</label>
          <Field id="FName" type="text" name="FName"></Field>
          <label htmlFor="LName">نام خانوادگی</label>
          <Field id="LName" type="text" name="LName"></Field>
          <label htmlFor="UserAbout">درباره من</label>
          <Field id="UserAbout" type="text" name="UserAbout"></Field>
          <label htmlFor="NationalCode">کدملی</label>
          <Field id="NationalCode" type="text" name="NationalCode"></Field>
          <label htmlFor="BirthDay">تاریخ تولد</label>
          <Field id="BirthDay" type="text" name="BirthDay"></Field>
          <label htmlFor="HomeAdderess">محل سکونت</label>
          <Field id="HomeAdderess" type="text" name="HomeAdderess"></Field>
          <button type="submit">Save Changes</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditProfile;
