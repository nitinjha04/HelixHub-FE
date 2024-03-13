"use client";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { LoginData, RegisterData } from "@/interface";
import { toast } from "react-toastify";
import authService from "@/services/auth.service";
import TokenHelper from "@/helpers/Token.helper";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [registerCard, setRegisterCard] = useState(false);

  const {
    register: registerLogin,
    handleSubmit: loginSubmit,
    setValue: loginSetValue,
    formState: { errors: loginError },
  } = useForm<LoginData>();

  const {
    register: registerRegister,
    handleSubmit: registerSubmit,
    setValue: registerSetValue,
    formState: { errors: registerError },
  } = useForm<RegisterData>();

  const handleLogin = async (data: LoginData) => {
    try {
      const response = await authService.login(data);
      const token = response?.data?.result?.accessToken;
      if (token) {
        TokenHelper.create(token);
        router.push("/");
        console.log("token", token);
      }
    } catch (error) {
      toast.error("An error Occurred");
    }
  };
  const handleRegister = async (data: RegisterData) => {
    try {
      const response = await authService.register(data);
      const token = response?.data?.result?.accessToken;
      if (token) {
        TokenHelper.create(token);
        router.push("/");
        console.log("token", token);
      }
    } catch (error) {
      toast.error("An error Occurred");
    }
  };

  return (
    <>
      <div className="  w-screen lg:px-40 h-screen  flex lg:flex-row flex-col justify-between">
        <div className="  px-7 relative text-[#000000] flex-1 basis-1/2 my-auto  flex flex-col justify-center h-full">
          <span>
            <h1 className="  font-semibold text-2xl lg:text-[50px] lg:leading-[75px]">
              Sign in to
            </h1>
            <p className="  font-medium text-xl lg:text-4xl leading-[52px]">
              Lorem Ipsum is simply
            </p>
          </span>
          <span className=" font-normal text-sm lg:text-base ">
            if you don't have an account register{" "}
            <p>
              you can{" "}
              <span
                onClick={() => setRegisterCard((prev) => !prev)}
                className=" cursor-pointer px-2 font-semibold text-base   underline text-[#4D47C3]"
              >
                {registerCard ? "Login here" : " Register here"} !
              </span>{" "}
            </p>
          </span>
          <Image
            className=" hidden lg:w-[220px] xl:w-[276px]  lg:flex absolute bottom-0 -right-16"
            height={556}
            width={276}
            alt="boy"
            src="/login/login-boy.svg"
          />
        </div>
        <div className="  flex flex-1 basis-1/2 flex-col  lg:px-12 my-auto lg:py-0 py-6  ">
          {/* TODO In Register page checkbox to define create account as "Student" or "Teacher" */}
          {registerCard ? (
            <form
              onSubmit={registerSubmit((data) => {
                handleRegister(data);
              })}
              className="max-w-[369px] min-w-[322px] gap-9 flex flex-col mx-auto"
            >
              <div
                className={` flex flex-col ${
                  registerCard ? " gap-3" : "gap-6"
                }`}
              >
                <span className=" hidden lg:flex text-[#000000] font-medium text-3xl leading-[45px] text-start items-start">
                  Sign in
                </span>
                <FormControl>
                  <Input
                    required
                    sx={{
                      "::placeholder": {
                        color: "#A7A3FF",
                      },
                    }}
                    {...registerRegister("email", {
                      required: "email is required",
                    })}
                    name="email"
                    disableUnderline
                    placeholder="Enter email or user name"
                    className=" bg-[#F0EFFF] rounded-lg  py-3 px-3"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    required
                    {...registerRegister("userName", {
                      required: "User name is required",
                    })}
                    name="userName"
                    disableUnderline
                    placeholder="Create User name"
                    className=" bg-[#F0EFFF] rounded-lg  py-3 px-3"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    required
                    {...registerRegister("phone", {
                      required: "Contact number is required",
                    })}
                    name="phone"
                    disableUnderline
                    placeholder="Contact number"
                    className=" bg-[#F0EFFF] rounded-lg  py-3 px-3"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    required
                    disableUnderline
                    {...registerRegister("password", {
                      required: "password is required",
                    })}
                    name="password"
                    placeholder="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          aria-label="toggle password visibility"
                          // onClick={() => handleClickShowPassword(1)}
                          // onMouseDown={handleMouseDownPassword}
                        >
                          {/* {values.showPassword ? (
                          <VisibilityOff
                            className="text-[#D0D0D0]"
                            fontSize="small"
                          />
                        ) : (

                        )} */}
                          <Visibility
                            className="text-[#D0D0D0]"
                            fontSize="small"
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    className=" bg-[#F0EFFF] rounded-lg  py-3 px-3"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    required
                    {...registerRegister("confirmPassword", {
                      required: "Confirm password is required",
                    })}
                    name="confirmPassword"
                    disableUnderline
                    placeholder="confirmPassword"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          aria-label="toggle password visibility"
                          // onClick={() => handleClickShowPassword(1)}
                          // onMouseDown={handleMouseDownPassword}
                        >
                          {/* {values.showPassword ? (
                          <VisibilityOff
                            className="text-[#D0D0D0]"
                            fontSize="small"
                          />
                        ) : (
                          
                        )} */}
                          <Visibility
                            className="text-[#D0D0D0]"
                            fontSize="small"
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    className=" bg-[#F0EFFF] rounded-lg  py-3 px-3"
                  />
                </FormControl>
              </div>
              <Button
                type="submit"
                style={{ boxShadow: "0 4px 61px 6px rgba(77, 71, 195, 0.4)" }}
                className=" hover:bg-[#4D47C3] py-3 shadow-2xl mx-auto text-center bg-[#4D47C3] rounded-lg  text-[#FFFFFF] font-medium text-base min-w-full "
                sx={{
                  textTransform: "none",
                }}
              >
                Register
              </Button>
              <span className=" flex flex-col gap-4 font-normal text-[#B0B0B0] text-sm text-center items-center py-2">
                or continue with
                <Image
                  className=" mx-auto  cursor-pointer"
                  height={41}
                  width={41}
                  alt="googleImg"
                  src="/login/google.svg"
                />
              </span>
            </form>
          ) : (
            <form
              onSubmit={loginSubmit((data) => {
                handleLogin({ email: data.email, password: data.password });
              })}
              className="max-w-[369px] min-w-[322px] gap-9 flex flex-col mx-auto"
            >
              <div
                className={` flex flex-col ${
                  registerCard ? " gap-3" : "gap-6"
                }`}
              >
                <span className=" hidden lg:flex text-[#000000] font-medium text-3xl leading-[45px] text-start items-start">
                  Sign in
                </span>
                <FormControl>
                  <Input
                    required
                    sx={{
                      "::placeholder": {
                        color: "#A7A3FF",
                      },
                    }}
                    {...registerLogin("email", {
                      required: "email is required",
                    })}
                    name="email"
                    disableUnderline
                    placeholder="Enter email"
                    className=" bg-[#F0EFFF] rounded-lg  py-3 px-3"
                  />
                </FormControl>
                <FormControl>
                  <Input
                    required
                    disableUnderline
                    {...registerLogin("password", {
                      required: "password is required",
                    })}
                    name="password"
                    placeholder="Password"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          size="small"
                          aria-label="toggle password visibility"
                          // onClick={() => handleClickShowPassword(1)}
                          // onMouseDown={handleMouseDownPassword}
                        >
                          {/* {values.showPassword ? (
                          <VisibilityOff
                            className="text-[#D0D0D0]"
                            fontSize="small"
                          />
                        ) : (

                        )} */}
                          <Visibility
                            className="text-[#D0D0D0]"
                            fontSize="small"
                          />
                        </IconButton>
                      </InputAdornment>
                    }
                    className=" bg-[#F0EFFF] rounded-lg  py-3 px-3"
                  />

                  <span className=" font-normal text-[#B0B0B0] text-sm text-end items-end py-2">
                    Forgot password ?
                  </span>
                </FormControl>
              </div>
              <Button
                type="submit"
                style={{ boxShadow: "0 4px 61px 6px rgba(77, 71, 195, 0.4)" }}
                className=" hover:bg-[#4D47C3] py-3 shadow-2xl mx-auto text-center bg-[#4D47C3] rounded-lg  text-[#FFFFFF] font-medium text-base min-w-full "
                sx={{
                  textTransform: "none",
                }}
              >
                Login
              </Button>
              <span className=" flex flex-col gap-4 font-normal text-[#B0B0B0] text-sm text-center items-center py-2">
                or continue with
                <Image
                  className=" mx-auto  cursor-pointer"
                  height={41}
                  width={41}
                  alt="googleImg"
                  src="/login/google.svg"
                />
              </span>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
