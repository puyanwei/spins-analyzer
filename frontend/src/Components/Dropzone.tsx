import React, { FC, useState, useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import {
  baseStyle,
  activeStyle,
  acceptStyle,
  rejectStyle,
} from "./dropzoneStyles";
import { spinFileFormatter } from "../Utilities/spinFileFormatter";

const Dropzone: FC = () => {
  const [errorMsg, setErrorMsg] = useState("");

  const rejectedFileTypeErrorMessage: string = `File type invalid. Please submit a .txt file and try again`;
  const rejectedTextFileErrorMessage: string = `Pokerstars hand history file not recognised. Please try again`;
  const successMessage: string = `Successfully uploaded`;

  const onDrop = useCallback(
    (acceptedFiles: any[], rejectedFiles: any): void => {
      acceptedFiles.forEach((file: any): void => {
        const fileReader: FileReader = new FileReader();
        fileReader.readAsText(file);
        fileReader.onload = (e: ProgressEvent<FileReader> | null): void => {
          if (!e?.target?.result) return;
          if ((e.target.result as string).includes(`PokerStars Tournament #`)) {
            fetch("http://localhost:5000/data", {
              method: "post",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify(spinFileFormatter(e.target.result)),
            });
            setErrorMsg(successMessage);
          } else {
            setErrorMsg(rejectedTextFileErrorMessage);
          }
        };
      });
      if (rejectedFiles) setErrorMsg(rejectedFileTypeErrorMessage);
    },
    [rejectedFileTypeErrorMessage, rejectedTextFileErrorMessage, successMessage]
  );

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: ".txt",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  // {/*// @ts-ignore */}
  return (
    <>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Drag and drop your images here.</div>
      </div>
      <br />
      {errorMsg}
    </>
  );
};

export default Dropzone;
