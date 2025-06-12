import { Button } from "@/components/ui/button"

const Sticky = () => {
  return (
    <div className="sticky w-full flex justify-between gap-4 bottom-0 text-left z-10">
      <div className="w-1/4 mb-4 mx-4 p-2 h-16 text-left max-md:w-2/5 max-md:p-0 max-md:mx-2 max-md:my-auto max-md:mb-0">
        <Button className="w-3/5 cursor-pointer py-6">COOKIES</Button>
      </div>
      <div className="w-1/4 mb-4 mx-4 p-2 h-16 text-right max-md:w-2/5 max-md:p-0 max-md:mx-2 max-md:my-auto max-md:mb-0">
        <Button className="w-3/5 cursor-pointer py-6">COOKIES</Button>
      </div>
    </div>
  )
}

export default Sticky