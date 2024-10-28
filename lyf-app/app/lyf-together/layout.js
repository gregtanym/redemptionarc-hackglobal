import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot/components/Chatbot";

export default function RootLayout({ children }) {
  return (
    <div>
      <div className="pb-28">{children}</div>
      <div className="fixed bottom-[120px] right-8 z-50">
        <Chatbot />
      </div>
      <Navbar />
    </div>
  );
}
