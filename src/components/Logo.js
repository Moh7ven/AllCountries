import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées dépuis la balise img sont accéssibles dans "public" */}
      <img src="./logo192.png" alt="logo react" />
      <h3>AllContries</h3>
    </div>
  );
};

export default Logo;
