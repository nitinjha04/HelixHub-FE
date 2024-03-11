import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import { Avatar } from "@mui/material";
import { useAppSelector } from "@/components/hooks/reduxHook";
import { selectCurrentUserInfo } from "@/store/reducers/userReducer";

const HeaderProfile = () => {

  const currentUser = {
    first:{
      name:"nitin"
    },
    role:"demo"
  }
  // const currentUser = useAppSelector(selectCurrentUserInfo);
  // console.log("headerProfile", currentUser);

  return (
    <div className=" h-fit flex  gap-6 justify-end w-full">
      <NotificationsIcon className=" items-center my-auto" />
      <SettingsIcon className=" items-center my-auto" />
      <div className=" flex gap-4 ">
        {currentUser && (
          <span className=" text-defaultTextColor font-normal text-sm">
            {currentUser.first?.name}
            <p className=" text-end items-end text-smallTextColor   ">
              {currentUser.role}
            </p>
          </span>
        )}
        <Avatar />
      </div>
    </div>
  );
};

export default HeaderProfile;

