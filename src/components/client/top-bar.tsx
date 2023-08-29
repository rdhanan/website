"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible"
import { useTheme } from "next-themes"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { RiContractUpDownFill, RiExpandUpDownFill } from "react-icons/ri"

import { site } from "@/config"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/icons"

export function TopBar() {
  const [mounted, setMounted] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  const { theme, setTheme } = useTheme()

  // REF: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const pathname = usePathname()

  return (
    <>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="pb-5 pt-10 lg:pb-7 lg:pt-14" // half
      >
        <nav
          className={cn(
            "container flow-root px-6 sm:px-10 lg:px-16",
            "pb-5 lg:pb-7", // half
          )}
        >
          <Link
            href="/"
            className={cn(
              "absolute inline-flex h-12 select-none items-center text-muted-darker transition hover:text-foreground active:translate-y-0.5",

              pathname === "/projects" ? "xl:fixed" : "lg:fixed",
            )}
            onClick={() => isOpen && setIsOpen(false)}
            title="Go to homepage"
          >
            <Logo size="2.4em" />
          </Link>

          <div className="relative float-right inline-flex h-12 gap-3">
            <CollapsibleTrigger asChild>
              <button
                className={cn(
                  "block items-center px-3 text-muted-darker transition hover:bg-[hsl(0,0%,93%)] hover:text-foreground active:translate-y-0.5 dark:hover:bg-[hsl(0,0%,11%)] xs:hidden",

                  mounted ? "pointer-events-auto" : "pointer-events-none",
                )}
                aria-controls="radix-collapsible"
                aria-label="Navigation menu"
              >
                {isOpen ? (
                  <RiContractUpDownFill size={27} />
                ) : (
                  <RiExpandUpDownFill size={27} />
                )}
              </button>
            </CollapsibleTrigger>

            {site.navLinks.map(({ label, url }) => {
              const isActive = pathname === url

              return (
                <Link
                  key={url}
                  href={url}
                  className={cn(
                    "hidden select-none items-center px-3 text-lg font-bold transition hover:bg-[hsl(0,0%,93%)] hover:text-foreground active:translate-y-0.5 dark:hover:bg-[hsl(0,0%,11%)] xs:inline-flex",

                    isActive ? "text-foreground" : "text-muted-darker",
                  )}
                >
                  {label}
                </Link>
              )
            })}

            <div
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className="no-js hidden flex-1 xs:block"
            />

            <button
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className={cn(
                "px-3 text-muted-darker transition-transform hover:bg-[hsl(0,0%,93%)] hover:text-foreground active:translate-y-0.5 dark:hover:bg-[hsl(0,0%,11%)]",

                "no-js",

                mounted ? "pointer-events-auto" : "pointer-events-none",
              )}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              title={
                mounted
                  ? `Switch to ${theme === "light" ? "dark" : "light"} theme`
                  : undefined
              }
            >
              {mounted ? (
                theme === "light" ? (
                  <MdDarkMode size={29} />
                ) : (
                  <MdLightMode size={29} />
                )
              ) : (
                <MdLightMode size={28} />
              )}
            </button>
          </div>
        </nav>

        <CollapsibleContent
          className={cn(
            "select-none border-y bg-[hsl(0,0%,94%)] text-muted shadow-[inset_0_2px_39px_-12px_rgba(0,0,0,0.15)] dark:bg-[hsl(0,0%,10%)] xs:hidden",

            // open/close animation
            "overflow-hidden data-[state='closed']:animate-[slideUp_200ms_ease-out] data-[state='open']:animate-[slideDown_200ms_ease-out]",
          )}
          id="radix-collapsible"
        >
          {site.navLinks.map(({ label, url }) => (
            <Link
              key={url}
              href={url}
              className="block px-4 py-3 text-center text-lg font-bold tracking-wider transition-transform first:mt-2 last:mb-2 hover:text-foreground active:translate-y-0.5 active:text-foreground"
              onClick={() => isOpen && setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </>
  )
}

/*
30/07/2023
Changed from headlessui's dropdown menu to radix-ui's collapsible

<Menu as="div" className="relative inline-flex xs:hidden">
  <Menu.Button
    className="group px-2 ring-black transition-transform hover:bg-[hsl(0,0%,93%)] hover:text-foreground focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 active:translate-y-0.5 dark:ring-white dark:hover:bg-[hsl(0,0%,11%)]"
    aria-label="Navigation menu"
    id="headlessui-menu-button" // without id, there will be a hydration missmatch error
  >
    <BiDotsHorizontal
      size={34}
      className="fill-muted-darker group-hover:fill-foreground"
      aria-hidden
    />
  </Menu.Button>

  <Transition
    as={React.Fragment}
    enter="transition ease-out duration-100"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-75"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
  >
    <Menu.Items className="absolute right-0 z-20 mt-14 flex w-48 origin-top-right flex-col divide-y rounded-sm border bg-background shadow-lg shadow-neutral-300 ring-black focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 dark:shadow-neutral-900 dark:ring-white">
      {site.navLinks.map(({ label, url }) => (
        <Menu.Item key={url}>
          {({ active }) => (
            <Link
              className={cn(
                "px-4 py-3 text-lg font-semibold text-muted-darker transition hover:text-foreground",

                active &&
                  "bg-[hsl(0,0%,93%)] !text-foreground dark:bg-[hsl(0,0%,11%)]",
              )}
              href={url}
            >
              {label}
            </Link>
          )}
        </Menu.Item>
      ))}
    </Menu.Items>
  </Transition>
</Menu>
*/
