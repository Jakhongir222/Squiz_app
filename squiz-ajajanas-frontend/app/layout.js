/* eslint-disable @next/next/no-head-element */

import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/layout.css"
import Providers from "./providers";


export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Providers>
        <ul className="navbar">
        <li><Navbar/></li>
       <li><main className="">{children}</main></li> 
        </ul>
        </Providers>
      </body>
    </html>
  );
}
