import React from "react";
import ImageUploader from "react-images-upload";

const Picture = ({ Drop }) => (
  <ImageUploader
    withIcon={true}
    buttonText="Choose Image"
    onChange={Drop}
    imgExtension={[".jpg", ".gif", ".png", ".gif"]}
    maxFileSize={5242880}
  />
);

export default Picture;
