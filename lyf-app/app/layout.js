import localFont from "next/font/local";
// import "./globals.css";
import "@/styles/globals.css";
import { AppProvider } from "./Context/store";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Lyf App",
  description: "App For Lyf Operations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <AppProvider>
            <div className="main">
              {children}
            </div>
          </AppProvider>
      </body>
    </html>
  );
}
