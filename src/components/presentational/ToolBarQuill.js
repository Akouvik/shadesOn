import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ToolBarQuill = ({ bodyValue, onHandleChange }) => (
  <div className="form-group">
    <ReactQuill
      modules={ToolBarQuill.modules}
      formats={ToolBarQuill.formats}
      value={bodyValue}
      placeholder="Body"
      onChange={onHandleChange}
    />
  </div>
);

ToolBarQuill.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "stike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    [{ color: [] }, { background: [] }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"]
  ]
};
ToolBarQuill.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block"
];

export default ToolBarQuill;
