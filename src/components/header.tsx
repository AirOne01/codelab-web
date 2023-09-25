import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Code2Icon, LogInIcon } from "lucide-react"
import Link from "next/link"
import * as React from "react"

import { cn } from "~/lib/utils"
import { HeaderNav } from "./header-nav"
import { ModeToggle } from "./ui/mode-toggle"
import { Button } from "./ui/button"

const Header = ({ className, ...props }: { className?: string }) => (
  <div
    className={cn(
      "flex p-2 px-3 w-full h-96 shrink-0 overflow-hidden bg-transparent justify-between items-start stroke-white",
      className
    )}
    {...props}
  >
    {/* LEFT */}
    <Link href="/">
      <Code2Icon className="h-8 w-8 z-50 relative" />
    </Link>
    {/* HEADER NAV */}
    <HeaderNav />
    {/* RIGHT */}
    <div className="flex gap-2 items-center justify-center">
      <ModeToggle className="h-8 w-8" />
      <SignedIn>
        <UserButton afterSignOutUrl="/"/>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button variant="ghost" className="h-10 w-10 p-1">
            <LogInIcon className="w-8 h-8 cursor-pointer z-50" />
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  </div>
)
Header.displayName = "Header"

export { Header }