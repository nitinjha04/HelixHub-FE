import React, { FC, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileWithPreview extends File {
  preview: string;
}

const MyDropzone: React.FC<{
  register: any;
  setProfileImage: (file: File | null) => void;
}> = ({ register, setProfileImage }) => {
  const [file, setFile] = useState<FileWithPreview | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const firstFile = acceptedFiles[0];
        setFile((prevFile) =>
          Object.assign({}, prevFile, {
            ...firstFile,
            preview: URL.createObjectURL(firstFile),
          })
        );
        setProfileImage(firstFile);
      }
    },
  });

  return (
    <div className=" relative min-h-[175px]">
      <div className=" absolute w-full z-10 h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="175"
          height="175"
          viewBox="0 0 175 175"
          fill="none"
        >
          <rect
            x="0.5"
            y="0.5"
            width="174"
            height="174"
            rx="4.5"
            fill="white"
            stroke="#C1BBEB"
            stroke-dasharray="10 10"
          />
        </svg>
      </div>

      <div className=" cursor-pointer text-smallTextColor font-normal text-sm absolute px-1 py-1 z-50 items-center text-center my-auto h-full flex justify-center">
        <div {...getRootProps()}>
          <input
            {...register("profilePicture.url")}
            {...getInputProps()}
            // accept="image/*"
          />
          {file && (
            <img
              src={file.preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          )}
          {!file && (
            <>
              {isDragActive ? (
                <p>Drop the file here...</p>
              ) : (
                <p>Drag and drop or click here to select a file</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyDropzone;
