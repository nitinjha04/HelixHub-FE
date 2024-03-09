import { FormControl, FormHelperText, FormLabel, Input } from "@mui/material";
import { FC } from "react";

interface UserForm {
  title: string;
}

const UserForm: FC<UserForm> = ({ title }) => {
  return (
    <div className="px-6 py-4 flex flex-col gap-6 w-full h-full ">
      <span className=" text-defaultTextColor font-bold text-xl lg:text-4xl">
        {title}
      </span>
      <div className=" rounded-default bg-white w-full">
        <div className=" rounded-t-default px-8 py-2 bg-bgDefaultColor w-full text-white">
          Personal Details
        </div>
        <div className=" flex flex-row">
          <div className=" flex flex-col gap-6 w-full px-8 py-7">
            <div className=" w-full flex flex-col lg:flex-row gap-5">
              <FormControl className="w-full">
                <FormLabel className=" text-defaultTextColor text-lg font-semibold">
                  First Name *
                </FormLabel>
                <Input
                  name="firstName"
                  placeholder="Eren"
                  className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
                  required
                  disableUnderline
                />
              </FormControl>
              <FormControl className="w-full">
                <FormLabel className=" text-defaultTextColor text-lg font-semibold">
                  Last Name *
                </FormLabel>
                <Input
                  name="lastName"
                  placeholder="Yeager"
                  className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
                  required
                  disableUnderline
                />
              </FormControl>
            </div>
            <div className=" w-full flex flex-col lg:flex-row gap-5">
              <div className="w-full flex flex-col  gap-5">
                <FormLabel className=" text-defaultTextColor text-lg font-semibold">
                  Date & Place of Birth *
                </FormLabel>
                <div className=" w-full flex flex-col lg:flex-row gap-5">
                  <FormControl className="w-full">
                    <Input
                      name="dob"
                      placeholder="24 February 1997"
                      className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
                      required
                      disableUnderline
                    />
                  </FormControl>
                  <FormControl className="w-full mt-auto">
                    <Input
                      name="pob"
                      placeholder="Shiganshina"
                      className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
                      required
                      disableUnderline
                    />
                  </FormControl>
                </div>
              </div>
              <FormControl className="w-full">
                <FormLabel className=" text-defaultTextColor text-lg font-semibold">
                  Parent Name *
                </FormLabel>
                <Input
                  name="parent"
                  placeholder="Yeager"
                  className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
                  required
                  disableUnderline
                />
              </FormControl>
            </div>
            <div className=" w-full flex flex-col lg:flex-row gap-5">
              <FormControl className="w-full">
                <FormLabel className=" text-defaultTextColor text-lg font-semibold">
                  Email *
                </FormLabel>
                <Input
                  placeholder="eren@gmail.com"
                  className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
                  required
                  disableUnderline
                />
              </FormControl>
              <FormControl className="w-full">
                <FormLabel className=" text-defaultTextColor text-lg font-semibold">
                  Phone *
                </FormLabel>
                <Input
                  name="phone"
                  placeholder="+011234567890"
                  className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
                  required
                  disableUnderline
                />
              </FormControl>
            </div>
            <div className="w-full lg:w-1/2 h-full flex flex-col lg:flex-row gap-5">
              <FormControl className="w-full h-full">
                <FormLabel className=" text-defaultTextColor text-lg font-semibold">
                  Address *
                </FormLabel>
                <Input
                  minRows={6}
                  multiline
                  name="address"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                  className=" h-full py-1 border-[1px] px-3  border-inputBoxColor rounded-md"
                  required
                  disableUnderline
                />
                <FormHelperText className="flex justify-end pr-4 items-end w-full font-normal text-xs text-inputBoxColor">
                  0/2000
                </FormHelperText>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
