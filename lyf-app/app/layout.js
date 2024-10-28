import "@/styles/globals.css";
import { AppProvider } from "./Context/store";
import SizeChecker from "./minimumScreen/SizeChecker";
import NotClickable from "@/components/NotClickable/NotClickable";

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
            <div className="main">{children}</div>
            <NotClickable />
          </SizeChecker>
        </AppProvider>
      </body>
    </html>
  );
}
