import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <div className="flex items-center justify-center h-full w-full bg-black">
    <SignIn />
  </div>
}