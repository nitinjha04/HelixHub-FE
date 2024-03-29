import { UserData } from "@/interface";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  useForm,
} from "react-hook-form";
import MyDropzone from "../dropzone";

interface UserForm {
  title: string;
  subHeader: string;
  student?: Boolean;
  initialData?: UserData;
  onSubmit: (data: UserData) => void;
}

const UserForm: FC<UserForm> = ({
  title,
  initialData,
  subHeader,
  student = false,
  onSubmit,
  // register,
  // handleSubmit,
}) => {
  const { register, handleSubmit, reset, setError } = useForm<UserData>();
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [grade, setGrade] = useState<string | undefined>("V");

  const grades = [
    { grade: "I" },
    { grade: "II" },
    { grade: "III" },
    { grade: "IV" },
    { grade: "V" },
    { grade: "VI" },
    { grade: "VII" },
    { grade: "VIII" },
    { grade: "IX" },
    { grade: "X" },
    { grade: "XI" },
    { grade: "XII" },
  ];

  const onSubmitForm: SubmitHandler<UserData> = (data) => {
    const userData: any = {
      ...data,
    };

    if (profileImage) {
      userData.file = profileImage;
    }

    if (student && !grade) {
      /// give here error of useForm error that please put the class
    }

    if (student && grade) {
      userData.grade = grade;
    }

    console.log(userData);
    onSubmit(userData);
  };

  useEffect(() => {
    if (initialData) {
      reset(initialData);
    }
  }, [initialData, reset]);

  return (
    <form
      encType="multipart/form-data"
      onSubmit={handleSubmit(onSubmitForm)}
      className="px-6 py-4 flex flex-col gap-6 w-full h-full "
    >
      <span className=" text-defaultTextColor font-bold text-xl lg:text-4xl">
        {title}
      </span>
      <div className=" rounded-default bg-white w-full">
        <div className=" rounded-t-default px-8 py-2 bg-bgDefaultColor w-full text-white">
          Personal Details
        </div>
        <div className=" flex flex-col lg:flex-row px-8 py-7 gap-8">
          <div className=" min-w-[175px] mx-auto flex flex-col gap-5  ">
            <span className=" text-defaultTextColor text-lg font-semibold">
              Photo *
            </span>
            <MyDropzone register={register} setProfileImage={setProfileImage} />
          </div>
          <div className=" flex flex-col gap-6 w-full  ">
            <div className=" w-full flex flex-col lg:flex-row gap-5">
              <FormControl className="w-full">
                <FormLabel className=" text-defaultTextColor text-lg font-semibold">
                  First Name *
                </FormLabel>
                <Input
                  {...register("name.first", {
                    required: "First name is required",
                  })}
                  name="name.first"
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
                  {...register("name.last", {
                    required: "Last name is required",
                  })}
                  name="name.last"
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
                  Date of Birth *
                </FormLabel>
                <Input
                  {...register("dob", {
                    required: "dob is required",
                  })}
                  name="dob"
                  placeholder="24 February 1997"
                  className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
                  required
                  disableUnderline
                />
              </FormControl>
              <FormControl className="w-full ">
                <FormLabel className=" text-defaultTextColor text-lg font-semibold">
                  Place of Birth *
                </FormLabel>
                <Input
                  {...register("pob", {
                    required: "pob is required",
                  })}
                  name="pob"
                  placeholder="Shiganshina"
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
                  {...register("email", {
                    required: "email is required",
                  })}
                  disabled={!!initialData}
                  name="email"
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
                  {...register("phone", {
                    required: "phone is required",
                  })}
                  name="phone"
                  placeholder="+011234567890"
                  className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
                  required
                  disableUnderline
                />
              </FormControl>
            </div>
            <div className="w-full h-full flex flex-col lg:flex-row gap-5">
              <FormControl className="w-full  h-full">
                <FormLabel className=" text-defaultTextColor text-lg font-semibold">
                  Address *
                </FormLabel>
                <Input
                  {...register("address", {
                    required: "address is required",
                  })}
                  minRows={6}
                  multiline
                  name="address"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                  className="  h-full py-1 border-[1px] px-3  border-inputBoxColor rounded-md"
                  required
                  disableUnderline
                />
                <FormHelperText className="flex justify-end pr-4 items-end w-full font-normal text-xs text-inputBoxColor">
                  0/2000
                </FormHelperText>
              </FormControl>
              {student && (
                <div className=" w-full">
                  <FormControl
                    sx={{ m: 1, minWidth: 120 }}
                    size="small"
                    className="w-full lg:w-1/2 gap-2 h-fit"
                  >
                    <FormLabel className=" text-defaultTextColor text-lg font-semibold">
                      Grade *
                    </FormLabel>
                    {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}

                    <Select
                      input={<OutlinedInput />}
                      inputProps={{ "aria-label": "Without label" }}
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={grade}
                      label="Grade"
                      onChange={(e: SelectChangeEvent) =>
                        setGrade(e.target.value)
                      }
                    >
                      {/* <MenuItem value="V">
                        V
                      </MenuItem> */}
                      {grades.map((data) => (
                        <MenuItem value={data.grade}>{data.grade}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className=" rounded-default bg-white w-full">
        <div className=" rounded-t-default px-8 py-2 bg-bgDefaultColor w-full text-white">
          {subHeader}
        </div>
        {student ? (
          <ParentDetails register={register} />
        ) : (
          <EducationDetails register={register} />
        )}
      </div>
      <div className=" lg:w-1/5 pb-8 justify-end self-end flex gap-3">
        <Button
          className=" py-1 px-5 whitespace-nowrap text-center items-center border-2 border-solid border-bgDefaultColor w-full rounded-[40px] text-bgDefaultColor  font-normal text-lg  "
          sx={{
            textTransform: "none",
          }}
        >
          Back
        </Button>
        <Button
          type="submit"
          className=" py-1 px-8 whitespace-nowrap text-center items-center bg-bgDefaultColor w-full rounded-[40px] text-white  font-normal text-lg  "
          sx={{
            textTransform: "none",
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

const ParentDetails: FC<{ register: any }> = ({ register }) => {
  return (
    <div className="  flex flex-col gap-6 w-full px-8 py-7">
      <div className=" w-full flex flex-col lg:flex-row gap-5">
        <FormControl className="w-full">
          <FormLabel className=" text-defaultTextColor text-lg font-semibold">
            First Name *
          </FormLabel>
          <Input
            {...register("parentName.first", {
              required: "parentName.first is required",
            })}
            name="parentName.first"
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
            {...register("parentName.last", {
              required: "parentName.last is required",
            })}
            name="parentName.last"
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
            {...register("parentEmail", {
              required: "parentEmail is required",
            })}
            name="parentEmail"
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
            {...register("parentPhone", {
              required: "parentPhone is required",
            })}
            name="parentPhone"
            placeholder="+011234567890"
            className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
            required
            disableUnderline
          />
        </FormControl>
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row gap-5">
        <FormControl className=" w-full lg:w-1/2 h-full ">
          <FormLabel className=" text-defaultTextColor text-lg font-semibold">
            Address *
          </FormLabel>
          <Input
            {...register("parentAddress", {
              required: "parentAddress is required",
            })}
            minRows={6}
            multiline
            name="parentAddress"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            className=" h-full py-1 border-[1px] px-3  border-inputBoxColor rounded-md"
            required
            disableUnderline
          />
          <FormHelperText className="flex justify-end pr-4 items-end w-full font-normal text-xs text-inputBoxColor">
            0/2000
          </FormHelperText>
        </FormControl>
        <FormControl className=" w-1/2 lg:w-1/4">
          <FormLabel id="demo-row-radio-buttons-group-label">Payment</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            defaultValue="card"
            onChange={(e) => console.log(e.target.value)}
            {...register("paymentType", {
              required: "Payment type is required",
            })}
          >
            <FormControlLabel value="cash" control={<Radio />} label="cash" />
            <FormControlLabel value="card" control={<Radio />} label="card" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
};

const EducationDetails: FC<{ register: any }> = ({ register }) => {
  return (
    <div className=" flex flex-col gap-6 w-full px-8 py-7">
      <div className=" w-full flex flex-col lg:flex-row gap-5">
        <FormControl className="w-full">
          <FormLabel className=" text-defaultTextColor text-lg font-semibold">
            University *
          </FormLabel>
          <Input
            {...register("education[0].university", {
              required: "education[0].university is required",
            })}
            name="education[0].university"
            placeholder="HelixHub"
            className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
            required
            disableUnderline
          />
        </FormControl>
        <FormControl className="w-full">
          <FormLabel className=" text-defaultTextColor text-lg font-semibold">
            Degree *
          </FormLabel>
          <Input
            {...register("education[0].degree", {
              required: "education[0].degree is required",
            })}
            name="education[0].degree"
            placeholder="History Major"
            className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
            required
            disableUnderline
          />
        </FormControl>
      </div>
      <div className=" w-full flex flex-col lg:flex-row gap-5">
        <div className="w-full flex flex-col  gap-4">
          <FormLabel className=" text-defaultTextColor text-lg font-semibold">
            Start & End Date *
          </FormLabel>
          <div className=" w-full flex flex-col lg:flex-row gap-5">
            <FormControl className="w-full">
              <Input
                {...register("education[0].degreeStartDate", {
                  required: "education[0].degreeStartDate is required",
                })}
                name="education[0].degreeStartDate"
                placeholder="February 2013"
                className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
                required
                disableUnderline
              />
            </FormControl>
            <FormControl className="w-full mt-auto">
              <Input
                {...register("education[0].degreeEndDate", {
                  required: "education[0].degreeEndDate is required",
                })}
                name="education[0].degreeEndDate"
                placeholder="September 2018"
                className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
                required
                disableUnderline
              />
            </FormControl>
          </div>
        </div>
        <FormControl className="w-full">
          <FormLabel className=" text-defaultTextColor text-lg font-semibold">
            City *
          </FormLabel>
          <Input
            {...register("education[0].universityCity", {
              required: "education[0].universityCity is required",
            })}
            name="education[0].universityCity"
            placeholder="Shiganshina"
            className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
            required
            disableUnderline
          />
        </FormControl>
      </div>
      <div className=" w-full flex flex-col lg:flex-row gap-5">
        <FormControl className="w-full ">
          <FormLabel className=" text-defaultTextColor text-lg font-semibold">
            Subject *
          </FormLabel>
          <Input
            {...register("subject", {
              required: "Subject is required",
            })}
            name="subject"
            placeholder="Science"
            className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
            required
            disableUnderline
          />
        </FormControl>
        <FormControl className="w-full">
          <FormLabel className=" text-defaultTextColor text-lg font-semibold">
            Expertise *
          </FormLabel>
          <Input
            {...register("expertise", {
              required: "Expertise is required",
            })}
            name="expertise"
            placeholder="World History, Philosophy, Prehistoric, Culture, Ancient"
            className="py-1 border-[1px] px-3 border-inputBoxColor rounded-md"
            required
            disableUnderline
          />
        </FormControl>
      </div>
      <div className=" w-full flex flex-col lg:flex-row gap-5">
        <FormControl className="w-full lg:w-1/2 h-full">
          <FormLabel className=" text-defaultTextColor text-lg font-semibold">
            About *
          </FormLabel>
          <Input
            {...register("about", {
              required: "about is required",
            })}
            minRows={3}
            multiline
            name="about"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
            className=" h-auto py-1 border-[1px] px-3  border-inputBoxColor rounded-md"
            required
            disableUnderline
          />
          <FormHelperText className="flex justify-end pr-4 items-end w-full font-normal text-xs text-inputBoxColor">
            0/1000
          </FormHelperText>
        </FormControl>
      </div>
    </div>
  );
};

export default UserForm;
