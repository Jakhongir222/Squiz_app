/* eslint-disable @next/next/no-head-element */

import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/layout.css"


export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <ul className="navbar">
        <li><Navbar/></li>
       <li><main className="">{children}</main></li> 
        </ul>
      </body>
    </html>
  );
}
