import Image from "next/image";
import { useGlobalContext } from "./Context/store";
import Searchbar from "@/components/Searchbar";

export default function Home() {
  // const {account, getAvailableInsuranceClaims, isLoading, setIsLoading, availableClaims, claimInsurance,
  //   setIsTransactionLoading, decodeHexString,
  //   isTransactionLoading, setIsConfirmationModalOpen, isConfirmationModalOpen, transactionUrl, setTransactionUrl
  // } = useGlobalContext()

  return (
    <div className="w-full">
      <Searchbar />
      <div>
        <div>upcoming events section</div>
        <div>blogs</div>
      </div>
    </div>
  );
}
