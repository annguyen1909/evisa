import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function VisaTabsWithAccordion() {
  return (
    <div className="w-full max-w-3xl mx-auto py-10">
      <Tabs defaultValue="tourist" className="w-full">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="tourist">Tourist</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="transit">Transit</TabsTrigger>
          <TabsTrigger value="medical">Medical</TabsTrigger>
        </TabsList>

        <TabsContent value="tourist">
          <Accordion type="single" collapsible className="w-full mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is a Tourist Visa?</AccordionTrigger>
              <AccordionContent>
                A tourist visa allows temporary travel for leisure purposes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Requirements</AccordionTrigger>
              <AccordionContent>
                Passport, photo, and travel itinerary may be required.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="business">
          <Accordion type="single" collapsible className="w-full mt-4">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is a Business Visa?</AccordionTrigger>
              <AccordionContent>
                A visa for business-related travel such as meetings or events.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        {/* Repeat for other visa types */}
      </Tabs>
    </div>
  )
}
