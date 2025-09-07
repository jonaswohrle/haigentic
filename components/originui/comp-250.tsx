import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function Component() {
  return (
    <div className="*:not-first:mt-4">
      <Label>Dual range slider</Label>
      <Slider
        defaultValue={[25, 75]}
        step={10}
        aria-label="Dual range slider"
      />
    </div>
  )
}
