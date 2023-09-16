"use client";
import React from "react";
import "./CustomRichText.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CustomRichText = ({ value, setValue }) => {
  const modules = {
    toolbar: [
      ["bold", "italic"], // Only include bold and italic options
    ],
  };
  const editorStyles = {
    height: "300px",
  };

  return (
    <div className="text-black w-full">
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={modules}
        style={editorStyles}
      />
    </div>
  );
};

export default CustomRichText;
