import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signup() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");

  const required = !name || !number || !email || !password;

  const navigate = useNavigate();

  const HandleCreate = () => {
    if (required) {
      toast.warn("Fields are required!");
    } else {
      navigate("/account");
      toast.success("Account created successful! 🎉");
    }
  };

  const LabelBase =
    "absolute left-5 top-0 -translate-y-1/2 bg-[#f7f8f9] px-1 text-xs font-semibold text-[#6c25ff]";
  const InputBase =
    "w-full rounded-md border border-neutral-400 p-2 focus:outline-none";

  return (
    <div className="flex flex-col justify-between px-6 py-9 h-full">
      <div className="flex flex-col gap-6">
        <h1 className="text-[28px] font-bold leading-none text-neutral-900">
          Create your PopX Account
        </h1>

        <div className="flex flex-col gap-6">
          <div className="relative w-full">
            <label className={`${LabelBase}`}>
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Name"
              className={`${InputBase}`}
            />
          </div>
          <div className="relative w-full">
            <label className={`${LabelBase}`}>
              Phone number <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter your phone number"
              className={`${InputBase}`}
            />
          </div>
          <div className="relative w-full">
            <label className={`${LabelBase}`}>
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className={`${InputBase}`}
            />
          </div>
          <div className="relative w-full">
            <label className={`${LabelBase}`}>
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className={`${InputBase}`}
            />
          </div>
          <div className="relative w-full">
            <label className={`${LabelBase}`}>Company name</label>
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter your company name"
              className={`${InputBase}`}
            />
          </div>
          <div className="text-[14px] flex flex-col gap-[8px] ">
            <p className="flex gap-0.5 font-medium">
              Are you an Agency?<span className="text-red-500">*</span>
            </p>
            <div className="flex gap-[12px]">
              <label className="flex gap-[4px]">
                <input defaultChecked type="radio" name="radio" />
                Yes
              </label>
              <label className="flex gap-[4px]">
                <input type="radio" name="radio" />
                No
              </label>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={HandleCreate}
        className="w-full rounded-md px-4 py-3 text-sm font-semibold  bg-[#6c25ff] text-white hover:bg-violet-900 duration-200 cursor-pointer"
      >
        Create Account
      </button>
    </div>
  );
}

export default Signup;
