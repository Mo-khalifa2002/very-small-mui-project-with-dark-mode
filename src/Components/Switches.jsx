import React from "react";
import Switch from "@mui/material/Switch";

function Switches(props) {
  const { onChange, checked } = props;
  return (
    <div>
      <Switch checked={checked} onChange={onChange} />
    </div>
  );
}

export default Switches;
