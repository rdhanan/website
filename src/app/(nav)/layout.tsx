import React from "react"
import Link from "next/link"
import { BsRssFill } from "react-icons/bs"

import { site } from "@/config"
import { LogoSvg } from "@/components/logo"
import { NavigationBar } from "@/components/navigation-bar"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className="container flow-root px-6 py-10 sm:px-10 lg:px-16 lg:py-14">
        <Link
          href="/"
          title="Go to homepage"
          className="absolute inline-flex h-12 select-none items-center transition-transform active:translate-y-0.5 lg:fixed"
        >
          <LogoSvg className="fill-muted-darker text-[2.6rem] transition-colors hover:fill-foreground" />
        </Link>

        <div className="relative float-right inline-flex h-12 gap-3">
          <NavigationBar />
        </div>
      </nav>

      {children}

      <footer className="container py-24 text-center font-mono font-semibold uppercase text-muted-darker">
        {/* TODO: swap this once the blog has enough content */}
        {/* CC BY-NC-SA 4.0 2023-PRESENT
        <span className="relative top-[4px] text-[24px] tracking-tighter">
          {" © "}
        </span>
        Tifan Dwi Avianto */}

        <a
          href={`${site.baseUrl}/feed.xml`}
          target="_blank"
          className="inline-flex items-center transition-colors hover:text-foreground"
          title="RSS"
        >
          <BsRssFill size={18} className="m-3" />
        </a>
      </footer>
    </>
  )
}
