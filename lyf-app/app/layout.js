import "@/styles/globals.css";
import { AppProvider } from "./Context/store";
import SizeChecker from "./minimumScreen/SizeChecker";

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
          </SizeChecker>
        </AppProvider>
      </body>
    </html>
  );
}
