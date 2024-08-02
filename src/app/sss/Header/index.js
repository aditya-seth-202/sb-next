 "use client"
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import logo from "@/Assets/logo.svg";
import logoBlack from "@/Assets/logoBlack.svg";
import Image from "next/image";
import Link from "next/link";
import { DOMAIN, NAV_ROUTES } from "@/Constants/navigationRoutes";
import Megamenu from "./Megamenu";
import HamburgerMenu from "./Megamenu/HamburgerMenu";
import { Drawer, Popover, Typography } from "@mui/material";

export const loginDropdownOptions = [
  {
    head: "Agency",
    link: "agency/login",
  },
  {
    head: "Client",
    link: "client/login",
  },
  {
    head: "Developer",
    link: "developer/login",
  },
];

export const SignupDropdownOptions = [
  {
    head: "Agency",
    link: "register/agency",
  },
  {
    head: "Developer",
    link: "developer/register",
  },
];

const Header = ({ white }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navbarRef = useRef(null);
  const [openFirstTab, setOpenFirstTab] = useState(false);
  const [openSecondTab, setOpenSecondTab] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedTab, setClickedTab] = useState("signup");
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      if (window.scrollY > navbarHeight && (openFirstTab || openSecondTab)) {
        setOpenFirstTab(false);
        setOpenSecondTab(false);
      }
      setScrollHeight(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleClick = (event, selected) => {
    console.log(event.currentTarget, "jijij");
    setClickedTab(selected);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const onScrollFunction = () => {
    setOpenFirstTab(false);
    setOpenSecondTab(false);
  };

  const ddOptions =
    clickedTab === "signup" ? SignupDropdownOptions : loginDropdownOptions;

  return (
    <>
      <div
        ref={navbarRef}
        className={`${styles.font} relative flex md:items-center justify-between w-full px-5 md:px-[60px] lg:px-[75px] xxl:px-[100px] 
        pt-[18px] pb-[22px] lg:py-3 xxl:py-[15px] c2xl:py-[20px]`}
      >
        <Link href={NAV_ROUTES.landingPage}>
          <Image
            alt="logo"
            src={logoBlack}
            className=" cursor-pointer h-[40.6px] xxl:h-[54px] w-[128px] xxl:w-[173px] c2xl:w-[230px] c2xl:h-[72px]"
            // onClick={() => {}}
          />
        </Link>

        <div className="hidden lg:flex items-center gap-[18px] c2xl:gap-[24px]">
          <div>
            <div
              className={`cursor-pointer ${openFirstTab && "bg-[#F3F2EF]"} ${
                styles.dd_div
              }`}
              onMouseEnter={() => {
                setOpenSecondTab(false);
                setOpenFirstTab(true);
              }}
              onClick={() => {
                setOpenFirstTab(false);
              }}
            >
              <p className={styles.dropdown_label}>What We Do</p>

            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <div
              className={`cursor-pointer ${openSecondTab && "bg-[#F3F2EF]"} ${
                styles.dd_div
              }`}
              onMouseEnter={() => {
                setOpenFirstTab(false);
                setOpenSecondTab(true);
              }}
              onClick={() => {
                setOpenSecondTab(false);
              }}
            >
              <p className={styles.dropdown_label}>For Developers</p>

    
            </div>
          </div>
          <div
            onClick={() =>
              window.open(`${DOMAIN}/active-requirements`, "_self")
            }
            className="flex items-center gap-2 cursor-pointer"
          >
            <p className={styles.dropdown_label}>Find Jobs</p>
          </div>
        </div>

        <div className="hidden lg:flex  items-center gap-6 cursor-pointer">
          <p
            onClick={(e) => {
              handleClick(e, "signup");
            }}
            className={styles.dropdown_label}
          >
            Signup
          </p>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            style={{ marginTop: "5px" }}
          >
            {ddOptions?.map((item, idx) => (
              <Typography
                key={idx}
                sx={{ p: 2, cursor: "pointer" }}
                className="hover:bg-[#c9bad230]"
                onClick={() => {
                  window.open(`${DOMAIN}/${item.link}`, "_self");
                }}
              >
                {item.head}
              </Typography>
            ))}
          </Popover>
          <button
            onClick={(e) => {
              handleClick(e, "login");
            }}
            // onClick={() => window.open(`${DOMAIN}/agency/login`, "_self")}
            className={styles.login_btn}
          >
            Login
          </button>
        </div>

        {!showMobileMenu ? (
          <div
            onClick={() => setShowMobileMenu(true)}
            className="rounded-full border-[0.83px] cursor-pointer border-primary-black w-9 h-9 lg:hidden flex justify-center items-center"
          >
          </div>
        ) : (
          <div
            onClick={() => setShowMobileMenu(false)}
            className="rounded-full border-[0.83px] border-primary-black w-9 h-9 lg:hidden flex justify-center items-center"
          >
          </div>
        )}
      </div>
      {openFirstTab && (
        <Megamenu tabSelected={1} onScrollFunction={onScrollFunction} />
      )}
      {openSecondTab && (
        <Megamenu tabSelected={2} onScrollFunction={onScrollFunction} />
      )}
      {showMobileMenu && (
        <div>
          <Drawer
            anchor={"right"}
            open={showMobileMenu}
            onClose={() => setShowMobileMenu(false)}
            classes={{ paper: styles.customDrawer }}
            PaperProps={{
              sx: {
                marginTop: `calc(81px - ${scrollHeight}px)`,
              },
            }}
            BackdropProps={{
              sx: {
                backgroundColor: "transparent", // Change this color to your desired backdrop color
              },
            }}
          >
            <HamburgerMenu />
          </Drawer>
        </div>
      )}
    </>
  );
};

export default Header;
