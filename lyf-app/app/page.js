import Image from "next/image";
import { useGlobalContext } from "./Context/store";
import DiscoverHeader from "@/components/DiscoverHeader";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import BlogsSection from "@/components/BlogsSection";

export default function Home() {
  // const {account, getAvailableInsuranceClaims, isLoading, setIsLoading, availableClaims, claimInsurance,
  //   setIsTransactionLoading, decodeHexString,
  //   isTransactionLoading, setIsConfirmationModalOpen, isConfirmationModalOpen, transactionUrl, setTransactionUrl
  // } = useGlobalContext()

  return (
    <div className="w-full flex flex-col items-center">
      <DiscoverHeader />
      <div className="mt-5 w-11/12">
        <UpcomingEventsSection />
        <BlogsSection />
      </div>
    </div>
  );
}
