import { UserButton } from "@clerk/nextjs"
import { Code2Icon } from "lucide-react"
import Link from "next/link"
import * as React from "react"

import { cn } from "~/lib/utils"

const Header = ({ className, ...props }: { className?: string }) => (
  <div
    className={cn(
      "flex p-2 w-full shrink-0 overflow-hidden bg-transparent justify-between items-center stroke-white",
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
      <UserButton afterSignOutUrl="/"/>
    </div>
  </div>
)
Header.displayName = "Header"

export { Header }