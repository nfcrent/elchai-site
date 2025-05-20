"use client";

import Logo from "./Logo";
import Menu from "./Menu";
import { MobileMenu } from "./Menu";
import Link from "next/link";
import { FaChevronCircleRight } from "react-icons/fa";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { HiMiniBars3BottomRight } from "react-icons/hi2";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    // This function checks scroll position
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const t = useTranslations("MENU");
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-300 ${isScrolled ? "bg-black" : "bg-transparent"}`}
      >
        <div className="main-container py-4 flex justify-between">
          <Logo />
          <div className="flex items-center">
            <div className="hidden lg:block">
              <Menu />
            </div>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button className="text-white lg:hidden w-12 h-12">
                  <HiMiniBars3BottomRight className="!w-8 !h-8" />
                </Button>
              </SheetTrigger>
              <SheetContent className="border-0 bg-gray-900 w-full overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="text-xl"></SheetTitle>
                </SheetHeader>

                <div className="px-4">
                  <MobileMenu toggleMenu={toggleMobileMenu} />
                </div>

                <SheetFooter>
                  <Link
                    href={"/contact-us"}
                    className="btn btn-main w-full justify-center"
                  >
                    {t("footer.contact")} <FaChevronCircleRight />
                  </Link>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
