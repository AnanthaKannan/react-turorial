import React from "react";
const blockTypes = [
  {
    label: "H1",
    style: "header-one"
  },
  {
    label: "H2",
    style: "header-two"
  },
  {
    label: "H3",
    type: "header-three"
  },
  {
    label: "H4",
    type: "header-four"
  }
];

const inlineStyles = [
  {
    label: "bold",
    style: "BOLD",
    icon: <i className="fa fa-bold" aria-hidden="true"></i>
  },
  {
    label: "italic",
    style: "ITALIC",
    icon: <i className="fa fa-italic" aria-hidden="true"></i>
  },
  {
    label: "Underline",
    style: "UNDERLINE",
    icon:<i className="fa fa-underline" aria-hidden="true"></i>
  }
];

export { blockTypes, inlineStyles };
