/* eslint-disable @next/next/no-head-element */

import Navbar from "./Navbar";
import Footer from "./footer";
import "../styles/layout.css"
import Providers from "./providers";


export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
