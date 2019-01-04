import React from "react";

const Picture = ({ imgUpload }) => (
  <div>
    <input
      type="file"
      onChange={event => {
        imgUpload(event);
      }}
    />
    <img id="blog-img" src="" alt="your image" />
    {/* <span class="btn btn-default btn-file">
      <input
        type="file"
        accept="image/*"
        capture="camera"
        id="file-upload"
        onChange={imgUpload}
        className="main-article-image"
      />
    </span> */}
  </div>
);

export default Picture;
