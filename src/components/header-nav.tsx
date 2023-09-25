import { cn } from "~/lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu"
import { forwardRef, type ElementRef, type ComponentPropsWithoutRef } from "react"
import Link from "next/link";
import { Code2Icon } from "lucide-react";
import { SiDiscord } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";

const projects: { title: string; slug: string; description: string }[] = [
  {
    title: "Project A",
    slug: "a",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Project B",
    slug: "b",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Project C",
    slug: "c",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Project D",
    slug: "d",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Project E",
    slug: "e",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Project F",
    slug: "f",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  }
]

const randomColor = () => {
  const list = [
    ["bg-gradient-to-tr from-amber-400 via-red-400 to-purple-900", "stroke-red-400"],
    ["bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-neutral-500 via-teal-100 to-fuchsia-100", "stroke-neutral-500"],
    ["bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-rose-400 via-yellow-300 to-fuchsia-500", "stroke-fuchsia-500"],
    ["bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-red-300 via-sky-500 to-fuchsia-900", "stroke-red-300"]
  ]

  return list[Math.floor(Math.random() * list.length)]!
}

export function HeaderNav({ className }: { className?: string }) {
  const [bg, stroke] = randomColor()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">About</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted saturate-[75%] p-6 no-underline outline-none focus:shadow-md relative"
                    href="/"
                  >
                    <div className={`bg-clip-text text-transparent ${bg}`}>
                      <Code2Icon className={`h-6 w-6 ${stroke}`} />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Codelab
                      </div>
                      <p className="text-sm leading-tight">
                        Pationate programers sharing their knowledge.
                      </p>
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#people" title="People">
                Meet the crew
              </ListItem>
              <ListItem href="/#objectives" title="Objectives">
                Learn about our goals and the roadmap to achieve them
              </ListItem>
              <ListItem href="/#techs" title="Technologies">
                The tools we use to build and maintain our projects
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {projects.map((project) => (
                <ListItem
                  key={project.title}
                  title={project.title}
                  href={`/projects/${project.slug}`}
                >
                  {project.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="https://discord.com/invite/MqP9aDM3S6" target="_blank">
            <Button variant="ghost">
              <SiDiscord size={16} className="mr-2" />
              Discord
            </Button>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/cool-links">
            <Button variant="ghost">
              ✨ Cool Links ✨
            </Button>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = forwardRef<
  ElementRef<"a">,
  ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"