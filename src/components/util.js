import React from "react";
export default ({ renderAs, html, props }) => {
  const Component = renderAs;
  return typeof html === "string" ? (
    <Component
      {...props}
      dangerouslySetInnerHTML={{
        __html: html.replace(/(< *script)/gi, "illegalscript"),
      }}
    />
  ) : (
    <div />
  );
};
