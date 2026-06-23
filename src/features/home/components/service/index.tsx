import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Service = () => {
  return (
      <section className="h-[70vh] service text-dark px-16 flex">
          
          <div className="space-y-5">
              <div className=" w-[95vw] max-lg:h-120 lg:size-120 aspect-square rounded-2xl relative overflow-hidden" style={{
                    backgroundImage: `url('/assets/images/home-4.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",   
                    backgroundRepeat: "no-repeat",
              }} >
                  <div className="brown-bg" />
              </div>
              
              <Button variant="outline" icon={<ArrowRight />}>Voir plus de services{" "}</Button>   
          </div>

            <div className=" ">
              <Accordion type="single" collapsible >
                <AccordionItem value="item-1" className="border-b border-dark/40">
                      <AccordionTrigger className="flex justify-between bg-amber-600">
                          <span>01</span>
                          <span className="">Service Title</span>
                      </AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design <pattern className=""></pattern>
    </AccordionContent>
  </AccordionItem>
</Accordion>
          </div>
    </section>
  )
}

export default Service