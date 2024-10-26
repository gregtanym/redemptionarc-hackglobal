import "@/styles/globals.css";
import { AppProvider } from "./Context/store";
import Navbar from "@/components/Navbar";
import SizeChecker from "./minimumScreen/SizeChecker";
import Chatbot from "@/components/Chatbot/components/Chatbot";

export const metadata = {
  title: "Lyf App",
  description: "App For Lyf Operations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <SizeChecker>
            <div className="main">
              <div className="pb-28">
                {children}
              </div>

              {/*<div>chatbot</div>*/}
              <Navbar />
            </div>
          </SizeChecker>
        </AppProvider>
      </body>
    </html>
  );
}
