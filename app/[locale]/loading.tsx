import Image from "next/image";

export default function Loading() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#08020d] p-4">
        <div className="w-full max-w-md px-4 text-center">
  
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2 text-eblue">Loading...</h2>
            <p className="text-sm text-white/70">Please wait while we prepare your experience</p>
          </div>
  
          <div className="w-full bg-white/10 rounded-full h-2 mb-6">
            <div className="h-full w-2/3 bg-gradient-to-r from-eblue to-epurple rounded-full"></div>
          </div>
  
          <div className="mt-8 flex justify-center gap-6">
            <div className="w-8 h-8 opacity-50">
              <Image src="/images/ai.svg" alt="AI" width={32} height={32} className="w-full h-auto" />
            </div>
            <div className="w-8 h-8 opacity-50">
              <Image src="/images/metaverse-home.svg" alt="Metaverse" width={32} height={32} className="w-full h-auto" />
            </div>
            <div className="w-8 h-8 opacity-50">
              <Image src="/images/blockchain.svg" alt="Blockchain" width={32} height={32} className="w-full h-auto" />
            </div>
            <div className="w-8 h-8 opacity-50">
              <Image src="/images/web3.svg" alt="Web3" width={32} height={32} className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  