import * as React from "react";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";

export default function ToggleSwitch(props: any) {
  const switchElement = (
      <label className="switch me-2" style={props.style}>
        <Switch
          checked={props.value}
          onChange={props.onChange}
          inputProps={{ "aria-label": "controlled" }}
          onClick={(e) => {
            e.stopPropagation();
            props.onClick && props.onClick(e);
          }}
          style={{
            cursor: "pointer",
            color:
              "linear-gradient(45deg, rgba(139, 130, 252, 1), rgba(125, 130, 251, 1), rgba(210, 111, 244, 1))",
          }}
          disabled={props.disabled}
        />
      </label>
  );

  return (
    <>
      {props.toolTipTitle ? (
        <Tooltip title={props.toolTipTitle} placement="top" arrow>
          <span style={{ cursor: props.disabled ? 'not-allowed' : 'pointer' }}>
            {switchElement}
          </span>
        </Tooltip>
      ) : (
        switchElement
      )}
    </>
  );
}
