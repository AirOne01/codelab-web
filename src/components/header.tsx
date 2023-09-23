import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Code2Icon, LogInIcon } from "lucide-react"
import Link from "next/link"
import * as React from "react"

import { cn } from "~/lib/utils"

const Header = ({ className, ...props }: { className?: string }) => (
  <div
    className={cn(
      "flex p-2 px-3 w-full shrink-0 overflow-hidden bg-transparent justify-between items-center stroke-white backdrop-blur",
      className
    )}
    {...props}
  >
    {/* LEFT */}
    <Link href="/">
      <Code2Icon className="h-8 w-8" />
    </Link>
    {/* RIGHT */}
    <div>
      <SignedIn>
        <UserButton afterSignOutUrl="/"/>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <div className="relative group h-8 w-8 cursor-pointer">
            <LogInIcon className="absolute" />
            <div className="absolute top-0 left-1/4 h-4 w-4 transition-all duration-150 bg-transparent group-hover:bg-gradient-to-r block blur-md from-purple-400 to-yellow-400" />
          </div>
        </SignInButton>
      </SignedOut>
    </div>
  </div>
)
Header.displayName = "Header"

export { Header }