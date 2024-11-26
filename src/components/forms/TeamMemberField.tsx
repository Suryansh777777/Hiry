import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Trash2 } from "lucide-react";
import type { TeamMember } from "@/types/onboarding";

interface TeamMemberFieldProps {
  member: TeamMember;
  index: number;
  error?: string;
  onUpdate: (index: number, field: keyof TeamMember, value: string) => void;
  onRemove: (index: number) => void;
}

export function TeamMemberField({
  member,
  index,
  error,
  onUpdate,
  onRemove,
}: TeamMemberFieldProps) {
  return (
    <div className="flex gap-2">
      <div className="flex-1">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="email"
            value={member.email}
            onChange={(e) => onUpdate(index, "email", e.target.value)}
            placeholder="example@email.com"
            className="h-10 rounded-xl placeholder:text-base placeholder:text-gray-400  pl-9"
            aria-invalid={error ? "true" : "false"}
            aria-describedby={error ? `email-error-${index}` : undefined}
          />
        </div>
        {error && (
          <p
            id={`email-error-${index}`}
            className="mt-1 text-sm text-red-500"
          >
            {error}
          </p>
        )}
      </div>
      <Select
        value={member.role}
        onValueChange={(value) =>
          onUpdate(index, "role", value as TeamMember["role"])
        }
      >
        <SelectTrigger className="w-[140px] h-10 rounded-xl">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Member">Member</SelectItem>
          <SelectItem value="Admin">Admin</SelectItem>
        </SelectContent>
      </Select>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => onRemove(index)}
        className="text-muted-foreground hover:text-destructive h-10 w-10"
      >
        {index > 0 && <Trash2 className="h-4 w-4 text-red-600" />}
      </Button>
    </div>

  );
}
