"use client";
import { useAppDispatch, useAppSelector } from "@/components/hooks/reduxHook";
import { Messages, UserData } from "@/interface";
import Header from "@/partials/Header";
import MessageAction from "@/store/actions/messageAction";
import UserAction from "@/store/actions/userAction";
import {
  selectLatestMessageInfo,
  selectUserMessages,
} from "@/store/reducers/messageReducer";
import {
  selectAllUsers,
  selectCurrentUserInfo,
} from "@/store/reducers/userReducer";
import { Avatar, Button, FormControl, IconButton, Input } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import * as io from "socket.io-client";

const Chat = () => {
  const dispatch = useAppDispatch();
  const allUsers = useAppSelector(selectAllUsers);
  const currentUser = useAppSelector(selectCurrentUserInfo);

  // socket connection
  const socket = io.connect("http://localhost:53321");

  // scroll to view
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);

  // TODO online is not working
  const [liveStatus, setLiveStatus] = useState(false);

  // person we are sending messages to
  const [messageUserId, setMessageUserId] = useState<string | undefined>();

  // name of that person
  const [userView, setUserView] = useState<UserData | undefined>();

  // getMessages of user
  const initializeUserMessages = useAppSelector(selectUserMessages);
  const [userMessages, setUserMessages] = useState<Messages[]>([]);

  // get latest message chat info
  const latestMessageInfo = useAppSelector(selectLatestMessageInfo);

  const demoDataMessage = [
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
    {
      name: "Samantha William",
      message: " Lorem ipsum dolor sit amet",
      updatedAt: "12:45 PM",
    },
  ];

  const handleGetMessage = async (id: string | undefined) => {
    try {
      setMessageUserId(id);
      dispatch(MessageAction.getMessagesAsync({ receiver: id }));
    } catch (error) {
      console.log(error);
    }
    };

  const handleSendMessage = (message: string) => {
    socket.emit("send-msg", {
      sender: currentUser?._id,
      receiver: messageUserId,
      message,
    });
    setUserMessages((prevMessages) => [
      ...prevMessages,
      {
        sender: currentUser?._id,
        receiver: messageUserId,
        // receiver: messageUserId,
        message: {
          text: message,
        },
      },
    ]);

    dispatch(
      MessageAction.sendMessagesAsync({
        receiver: messageUserId,
        message: {
          text: message,
        },
      })
    );
  };

  // user connected
  useEffect(() => {
    if (currentUser) {
      socket.emit("add-user", currentUser._id);
      setLiveStatus(true);
    }
  }, [currentUser]);

  // receive message
  useEffect(() => {
    socket.on("msg-receive", (msg) => {
      console.log("msg-receive", msg);
      setUserMessages((prevMessages) => [...prevMessages, msg]);
    });
  });

  // scroll to view
  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  // scroll to bottom
  useEffect(() => {
    const scrollToBottom = () => {
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }
    };
    scrollToBottom();
  }, [userMessages]);

  // api calls
  useEffect(() => {
    dispatch(UserAction.getAllUsersAsync());
    dispatch(UserAction.getCurrentUserAsync());
    dispatch(MessageAction.latestMessageInfoAsync());
  }, [dispatch]);

  // set user messages to state
  useEffect(() => {
    setUserMessages(initializeUserMessages);
  }, [initializeUserMessages]);

  // TODO to use friends not all users
  useEffect(() => {
    if (allUsers) {
      setUserView(allUsers[0]);
      if (allUsers[0]) {
        handleGetMessage(allUsers[0]._id);
      }
    }
  }, [allUsers]);

  // TODO online is not working
  useEffect(() => {
    const handleActivity = () => {
      setLiveStatus(true);
    };

    const timeout = setTimeout(() => {
      setLiveStatus(false);
      socket.disconnect();
    }, 5000); // 30 seconds of inactivity before disconnecting

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
    };
  }, []);

  return (
    <div className="px-6 py-6 flex flex-col gap-6">
      <Header title={"Chat"} />
      <div className="flex bg-white rounded-default w-full h-full">
        <div className="lg:w-1/4 hidden border-r-[1px] border-r-inputBoxColor  lg:flex flex-col gap-4 px-4 py-5">
          <div className=" w-full flex flex-col gap-5">
            <span className=" font-bold text-xl lg:text-2xl text-defaultTextColor ">
              Messages
            </span>
            <FormControl>
              <Input
                disableUnderline
                placeholder="Search here..."
                className=" border-[1px] border-[#A098AE] bg-white rounded-[40px] px-3 py-1"
                startAdornment={
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M27.6 25.8L22 20.2C23.3 18.5 24.1 16.4 24.1 14.1C24.1 8.60001 19.6 4.10001 14.1 4.10001C8.6 4.10001 4 8.60001 4 14.1C4 19.6 8.5 24.1 14 24.1C16.3 24.1 18.5 23.3 20.2 21.9L25.8 27.5C26 27.7 26.4 27.9 26.7 27.9C27 27.9 27.3 27.8 27.6 27.5C28.1 27.1 28.1 26.3 27.6 25.8ZM6.5 14.1C6.5 10 9.9 6.60001 14 6.60001C18.1 6.60001 21.5 10 21.5 14.1C21.5 18.2 18.1 21.6 14 21.6C9.9 21.6 6.5 18.3 6.5 14.1Z"
                      fill="#4D44B5"
                    />
                  </svg>
                }
              />
            </FormControl>
          </div>
          <div className=" h-full  flex flex-col gap-4">
            <span>Groups</span>
            <div className=" w-full max-h-52 flex gap-5 flex-col pb-5 overflow-auto no-scrollbar">
              {demoDataMessage.map((data, index) => (
                <div
                  key={index}
                  className="flex justify-between w-full gap-3 border-b-[1px] border-smallTextColor pb-4"
                >
                  <div className=" flex gap-3">
                    <Avatar />
                    <span className=" text-defaultTextColor font-semibold text-sm">
                      {data.name}{" "}
                      <p className=" text-smallTextColor font-normal text-sm ">
                        {data.message.substring(0, 15)} ...
                      </p>
                    </span>
                  </div>
                  <p className=" text-smallTextColor font-normal text-sm items-start ">
                    {data.updatedAt}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className=" h-full  flex flex-col gap-4">
            <span>Chats</span>
            <div className=" w-full max-h-52 flex gap-5 flex-col pb-5 overflow-auto no-scrollbar">
              {latestMessageInfo &&
                latestMessageInfo.map((data, index) => (
                  <div
                    onClick={() => {
                      handleGetMessage(data.oppositeUserDetails[0]._id);
                      setUserView(data.oppositeUserDetails[0]);
                    }}
                    key={index}
                    className="cursor-pointer flex justify-between w-full gap-3 border-b-[1px] border-smallTextColor pb-4"
                  >
                    <div className=" flex gap-3">
                      <Avatar />
                      <span className=" text-defaultTextColor font-semibold text-sm">
                        {data.oppositeUserDetails[0].name?.first}{" "}
                        <p className=" text-smallTextColor font-normal text-sm ">
                          {data.message.text.length > 17
                            ? data.message.text.substring(0, 17) + " ..."
                            : data.message.text}
                        </p>
                      </span>
                    </div>
                    <p className=" text-smallTextColor font-normal text-sm items-start ">
                      {new Date(data.createdAt).toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                  </div>
                ))}
            </div>
            <Button
              className=" py-3 text-center items-center bg-[#4D44B51A] w-full rounded-[40px] text-bgDefaultColor  font-bold text-lg  "
              sx={{
                textTransform: "none",
              }}
            >
              View More
            </Button>
          </div>
        </div>
        {userView ? (
          <div className="lg:w-3/4 w-full h-full flex flex-col">
            <div className="flex px-6 py-4 border-b-[1px] border-b-inputBoxColor w-full ">
              <div className=" flex gap-4">
                <Avatar className=" my-auto" />
                <span className=" font-bold text-xl lg:text-2xl text-defaultTextColor flex flex-col">
                  {userView.name?.first} {userView.name?.last}
                  {/* TODO online is not working */}
                  {liveStatus ? (
                    <p className=" font-normal text-lg text-smallTextColor flex gap-2">
                      <span className=" w-3 h-3 my-auto bg-green-400 rounded-full"></span>
                      Online
                    </p>
                  ) : (
                    <p className=" font-normal text-lg text-smallTextColor flex gap-2">
                      <span className=" w-3 h-3 my-auto bg-red-600 rounded-full"></span>
                      Offline
                    </p>
                  )}
                </span>
              </div>
            </div>
            <div
              ref={chatBoxRef}
              className=" overflow-auto no-scrollbar border-b-[1px] border-inputBoxColor px-6 w-full h-full max-h-[29rem] lg:min-h-[34rem]"
            >
              {userMessages && userMessages.length > 0 ? (
                userMessages.map((msg, index) => (
                  <div
                    ref={
                      index === userMessages.length - 1 ? lastMessageRef : null
                    }
                    key={index}
                    className={`flex items-end   self-end relative gap-4 py-4 px-4 
                  ${msg.sender === currentUser?._id ? "flex-row-reverse " : ""}
                  `}
                  >
                    <div className=" flex flex-col gap-2">
                      <div
                        // key={index}
                        className={`  rounded-t-default relative  text-[#FFFFFF] text-lg font-normal  max-w-[246px] break-words px-6 py-2
                      ${
                        msg.sender === currentUser?._id
                          ? "self-end bg-bgDefaultColor  rounded-bl-default "
                          : " rounded-br-default bg-[#F5F5F5]  text-defaultTextColor"
                      }
                      
                      `}
                      >
                        {msg.message?.text}{" "}
                      </div>
                      {/* <p
                      className={`
                     ${
                       msg.sender === msg.users[0]
                         ? "text-right items-end "
                         : "text-left items-start"
                     }
                     font-normal text-sm text-smallTextColor`}
                    >
                      TODO
                      {new Date(msg.created.seconds * 1000).toLocaleTimeString(
                        "en-US",
                        { hour: "numeric", minute: "2-digit", hour12: true }
                      )}
                    </p> */}
                    </div>
                  </div>
                ))
              ) : (
                <p>Welcome</p>
              )}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.target as HTMLFormElement;

                const formData = new FormData(target);
                const message = formData.get("message") as string;
                handleSendMessage(message);
                target.reset();
              }}
              className=" min-h-24 px-6 h-full w-full my-auto items-center flex"
            >
              <FormControl className=" h-full my-auto flex  w-full">
                <Input
                  name="message"
                  disableUnderline
                  placeholder="Write your message..."
                  className=" my-auto border-[1px] border-[#A098AE] bg-white rounded-[40px] px-6 py-3"
                  endAdornment={
                    <IconButton type="submit">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M27.6 25.8L22 20.2C23.3 18.5 24.1 16.4 24.1 14.1C24.1 8.60001 19.6 4.10001 14.1 4.10001C8.6 4.10001 4 8.60001 4 14.1C4 19.6 8.5 24.1 14 24.1C16.3 24.1 18.5 23.3 20.2 21.9L25.8 27.5C26 27.7 26.4 27.9 26.7 27.9C27 27.9 27.3 27.8 27.6 27.5C28.1 27.1 28.1 26.3 27.6 25.8ZM6.5 14.1C6.5 10 9.9 6.60001 14 6.60001C18.1 6.60001 21.5 10 21.5 14.1C21.5 18.2 18.1 21.6 14 21.6C9.9 21.6 6.5 18.3 6.5 14.1Z"
                          fill="#4D44B5"
                        />
                      </svg>
                    </IconButton>
                  }
                />
              </FormControl>
            </form>
          </div>
        ) : (
          <div className=" h-full w-full">Welcome</div>
        )}
      </div>
    </div>
  );
};

export default Chat;
