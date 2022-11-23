/* eslint-disable @next/next/no-head-element */

import Navbar from "./navbar";
import Footer from "./footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
