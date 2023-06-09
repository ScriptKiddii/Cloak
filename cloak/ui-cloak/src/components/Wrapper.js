import Connect from "./Connect";
import CloakId from "./CloakId";
import Render from "./Render";
import { createContext, useMemo, useEffect } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

export const CloakContext = createContext(null);
export const contractAddress = "TMD1Mv1jv4q8b9Y9fhEUfqZ2VESWPDznjj";

const Wrapper = () => {
  const tronWeb = useMemo(() => {
    if (window.tronWeb) {
      return window.tronWeb;
    }
    return {};
  }, []);

  // const tronLink = useMemo(() => {
  //   if (window.tronLink) {
  //     return window.tronLink;
  //   }
  //   return {};
  // }, []);

  try {
    if (tronWeb) {
      tronWeb.on("addressChanged", (address) => {
        window.location.reload();
        sessionStorage.setItem("address", address.base58);
        console.log("address", address.base58);
      });
    }
  } catch (e) {
    // console.log(e.message);
  }

  console.log("tronWeb : ", tronWeb);

  async function connectwallet() {
    if (tronWeb.defaultAddress.base58 === undefined) {
      toast.error("Open tronlink and connect with mainnet");
      await window.tronLink.request({ method: "tron_requestAccounts" });
      sessionStorage.setItem("address", tronWeb.defaultAddress.base58);
      return;
    } else {

    }
  }

  useEffect(() => {

    try {
      if (!tronWeb.defaultAddress.base58) {
        toast.error("Open tronlink and connect with mainnet");
        return;
      }
    
    }
    catch (e) {
      // toast.error("Install tronLink wallet");
    }


  }, [])

  try {
    if (tronWeb) {
      if (tronWeb.defaultAddress.base58 === undefined) {
        sessionStorage.setItem("address", "");
      } else {
        sessionStorage.setItem("address", tronWeb.defaultAddress.base58);
      }
    }
  } catch (e) { }

  const [error, seterror] = useState("");

  const contextValue = {
    error,
    seterror,
    connectwallet,
  };

  return (
    <CloakContext.Provider value={contextValue}>
      <div className="max-h-max min-h-[100vh] bg-[#FFF7F7] ">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Connect />
        <div className="mx-auto max-w-[1160px] p-4 py-8 md:w-[95%]">
          {" "}
          <CloakId />
          <Render />
          <Footer />
        </div>
      </div>
    </CloakContext.Provider>
  );
};

export default Wrapper;
