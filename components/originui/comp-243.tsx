import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function Component() {
  return (
    <div className="*:not-first:mt-4">
      <Label>Slider with solid thumb</Label>
      <Slider
        defaultValue={[25]}
        className="[&>:last-child>span]:bg-primary [&>:first-child>span]:opacity-70"
        aria-label="Slider with solid thumb"
      />
    </div>
  )
}
