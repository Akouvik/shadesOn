import React from "react";

function Picture({ imgUpload, src }) {
  return (
    <div>
      <input type="file" multiple="multiple" onChange={imgUpload} />
      <div>
        <h2>PREVIEW:</h2>
        <img src={src} id="article-img" />
      </div>
    </div>
  );
}

export default Picture;
