import Link from "next/link"
import Image from "next/image"
import { FaChevronCircleRight } from "react-icons/fa"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-16 bg-[#08020d]">
      <div className="container px-4 mx-auto">
      <div className="py-12 px-6 md:px-12 text-center">

            <h1 className="text-7xl md:text-8xl font-bold mb-4">404</h1>

            <h2 className="main-title mb-6 text-center">
              Page <span>Not Found</span>
            </h2>

            <p className="text-center max-w-[600px] mx-auto mb-8">
              The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to the
              homepage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/" className="btn btn-main">
               Contact Us<FaChevronCircleRight />
              </Link>
              <Link href="/" className="btn btn-outline">
              Return to Home<FaChevronCircleRight />
              </Link>
            </div>
          </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-eblue mb-4">Explore Our Core Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[600px] mx-auto">
            <Link href="/" className="flex flex-col items-center gap-2 p-4 hover:bg-white/5 rounded-lg transition-all">
              <div className="w-12">
                <Image src="/images/ai.svg" alt="AI" width={48} height={48} className="w-full h-auto" />
              </div>
              <span className="font-bold uppercase text-sm">AI</span>
            </Link>
            <Link href="/" className="flex flex-col items-center gap-2 p-4 hover:bg-white/5 rounded-lg transition-all">
              <div className="w-12">
                <Image
                  src="/images/metaverse-home.svg"
                  alt="Metaverse"
                  width={48}
                  height={48}
                  className="w-full h-auto"
                />
              </div>
              <span className="font-bold uppercase text-sm">Metaverse</span>
            </Link>
            <Link href="/" className="flex flex-col items-center gap-2 p-4 hover:bg-white/5 rounded-lg transition-all">
              <div className="w-12">
                <Image src="/images/blockchain.svg" alt="Blockchain" width={48} height={48} className="w-full h-auto" />
              </div>
              <span className="font-bold uppercase text-sm">Blockchain</span>
            </Link>
            <Link href="/" className="flex flex-col items-center gap-2 p-4 hover:bg-white/5 rounded-lg transition-all">
              <div className="w-12">
                <Image src="/images/web3.svg" alt="Web3" width={48} height={48} className="w-full h-auto" />
              </div>
              <span className="font-bold uppercase text-sm">Web3</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
