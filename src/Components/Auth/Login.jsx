import React from "react";
import LoginPic from "./LoginPic";
import { Field, Form, Formik } from "formik";
import { NavLink } from "react-router-dom";
import homeIcon from '../../assets/Auth/home-04.svg'

const Login = () => {
  return (
    <div className="w-[1440px] mx-auto h-[730px] basicflex p-5 gap-3">
      <div className="w-1/2 h-full flex flex-col gap-5">
        <div className="basicflex gap-3 mt-7">
          <div className="w-1/3 h-16 flex flex-col gap-2">
            <div className="w-full h-2 bgblue rounded-lg"></div>
            <span className="text-[0.875rem]">واردکردن شماره همراه</span>
          </div>
          <div className="w-1/3 h-16 flex flex-col gap-2">
            <div className="w-full h-2 bg-[#DCDCDC] rounded-lg"></div>
            <span className="text-[0.875rem] text-[#707070]">
              تایید کد ارسال شده دو مرحله‌ای <br /> ( درصورت فعال بودن دو
              مرحله‌ای )
            </span>
          </div>
        </div>
        <div className="flex flex-col mx-auto w-2/3">
          <span className="font-semibold text-[1.5rem]">خوش برگشتی! </span>
          <span className="text-[#707070] w-[340px]">
            لطفا شماره همراه یا ایمیل و رمزعبور خود را برای ورود به حساب کاربری
            را وارد کنید
          </span>
        </div>
        <Formik>
          <Form className="w-2/3 mx-auto flex flex-col gap-3 mt-7">
            <label className="font-semibold">شماره همراه یا ایمیل</label>
            <Field
              className="border border-[#DCDCDC] bgwhite rounded-3xl p-3 h-12 outline-none"
              placeHolder="شماره همراه یا ایمیل خود را وارد کنید"
            />
            <label className="font-semibold">رمزعبور</label>
            <Field
              className="border border-[#DCDCDC] bgwhite rounded-3xl p-3 h-12 outline-none"
              placeHolder="رمزعبور خود را وارد کنید"
            />
          </Form>
        </Formik>
        <div className="flexbetween h-12 w-2/3 mx-auto">
          <div className="basicflex gap-3 ltr">
            <label
              htmlFor="remmberMe"
              className="font-semibold text-[0.875rem]"
            >
              مرا به خاطر بسپار
            </label>
            <input type="checkbox" id="remmberMe" name="remmberMe" />
          </div>
          <div className="p-3 bg-[#F6F6F6] rounded-[40px] bluetext text-[0.75rem] font-semibold">
            رمزعبور را فراموش کردید؟
          </div>
        </div>
        <button className="rounded-3xl p-3 h-12 w-2/3 mx-auto bgblue whitetext">
          ورود به حساب
        </button>
        <div className="w-2/3 mx-auto basicflex gap-11">
          <span className="font-semibold text-[0.875rem]">
            حساب کاربری ندارید؟
          </span>
          <NavLink to="/signup" className="font-semibold text-[0.875rem] bluetext underline">
            ایجاد حساب کاربری
          </NavLink>
        </div>
        <NavLink to="/" className="p-3 bluetext basicflex gap-2 border border-[#DCDCDC] w-36 rounded-[34px] mx-auto">
          <span>صفحه اصلی</span>
          <img src={homeIcon} alt="homeIcon" />
        </NavLink>
      </div>
      <LoginPic />
    </div>
  );
};

export default Login;
