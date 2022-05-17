import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
export default function Page(props) {
  const { title, children } = props;

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div>{children}</div>
    </HelmetProvider>
  );
}
