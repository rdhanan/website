import React from "react"
import Link from "next/link"
import { BsRssFill } from "react-icons/bs"

import { site } from "@/config"
import { Logo } from "@/components/icons"
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
          className="absolute inline-flex h-12 select-none items-center text-muted-darker transition hover:text-foreground active:translate-y-0.5 xl:fixed"
        >
          <Logo size="2.6em" />
        </Link>

        <div className="relative float-right inline-flex h-12 gap-3">
          <NavigationBar />
        </div>
      </nav>

      {children}

      <footer className="container py-24 text-center font-mono font-semibold uppercase text-muted-darker">
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
