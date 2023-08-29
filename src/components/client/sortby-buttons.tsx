"use client"

import { useRouter } from "next/navigation"
import { LuCalendarDays } from "react-icons/lu"
import { PiStarBold } from "react-icons/pi"

import { cn } from "@/lib/utils"

export function SortByButtons({
  sortParam,
  ...props
}: { sortParam: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const router = useRouter()

  return (
    <>
      <a
        {...props}
        href="/projects?sort=date"
        onClick={(e) => {
          e.preventDefault()
          router.replace(`/projects?sort=date`, {
            scroll: false,
          })
        }}
        className={cn(
          "my-1 inline-flex items-center gap-2 p-3 transition-transform hover:text-foreground active:translate-y-0.5",

          sortParam === "stars" ? "text-muted-darker" : "text-foreground",
        )}
        aria-label="Sort by date"
      >
        <LuCalendarDays size={19} />
        by Date
      </a>

      <a
        {...props}
        href="/projects?sort=stars"
        onClick={(e) => {
          e.preventDefault()
          router.replace(`/projects?sort=stars`, {
            scroll: false,
          })
        }}
        className={cn(
          "my-1 inline-flex items-center gap-2 p-3 transition-transform hover:text-foreground active:translate-y-0.5",
          sortParam === "stars" ? "text-foreground" : "text-muted-darker",
        )}
        aria-label="Sort by stars"
      >
        <PiStarBold size={19} />
        by Stars
      </a>
    </>
  )
}
