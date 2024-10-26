import DiscoverHeader from "@/components/discover/DiscoverHeader";
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
      <div>
        <UpcomingEventsSection />
        <BlogsSection />
      </div>
    </div>
  );
}
