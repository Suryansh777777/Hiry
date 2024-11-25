import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
interface AboutFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function AboutField({ value, onChange }: AboutFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="about">About company</Label>
      <div className="relative">
        <Textarea
          id="about"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="What does your company do?"
          className="h-40 py-3 rounded-xl tracking-tight placeholder:text-base placeholder:text-gray-400"
          aria-describedby="about-error"
        />
        <div className="absolute bottom-2 right-2">
          <p className="text-sm text-gray-500">
            {`${value?.length || 0}/100`}
          </p>
        </div>
      </div>
    </div>
  );
}