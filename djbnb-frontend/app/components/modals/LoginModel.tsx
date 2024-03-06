"use client";

import Modal from "./Modal";

import { useState } from "react";
import useLoginModel from "@/app/hooks/useLoginModel";
import CustomButton from "../form/CustomButton";

const LoginModel = () => {
  const loginModel = useLoginModel();

  const content = (
    <>
      <h2 className="mb-6 text-2xl">欢迎来到dbnb，请登录</h2>
      <form action="" className="space-y-4">
        <input
          type="email"
          placeholder="请输入邮箱"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <input
          type="password"
          placeholder="请输入密码"
          className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
        />

        <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
          错误消息
        </div>

        <CustomButton label="提交" onClick={() => console.log("click")} />
      </form>
    </>
  );

  return (
    <Modal
      isOpen={loginModel.isOpen}
      close={loginModel.close}
      label="登录"
      content={content}
    />
  );
};

export default LoginModel;
