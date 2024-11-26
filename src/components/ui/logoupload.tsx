import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface LogoUploadProps {
  onUpload: (file: File) => void;
  onRemove: () => void;
  logo: string | null;
  companyInitial: string;
}

export function LogoUpload({
  onUpload,
  onRemove,
  logo,
  companyInitial,
}: LogoUploadProps) {
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "uploaded"
  >(logo ? "uploaded" : "idle");
  const { toast } = useToast();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        toast({
          variant: "destructive",
          title: "File too large",
          description: "Please upload an image smaller than 10MB.",
        });
        return;
      }

      setUploadStatus("uploading");
      // Simulate upload process
      setTimeout(() => {
        onUpload(file);
        setUploadStatus("uploaded");
      }, 1500);
    }
  };

  const handleRemove = () => {
    onRemove();
    setUploadStatus("idle");
  };

  return (
    <div className="mb-2">
      <div className="flex items-center space-x-4 gap-3 pt-2">
        {logo ? (
          <img
            src={logo}
            alt="Company logo"
            className="h-28 w-28 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-emerald-50">
            <span className="text-4xl font-medium text-emerald-500">
              {companyInitial || "A"}
            </span>
          </div>
        )}
        <div className="mt-2 space-y-1">
          <h3 className="text-sm font-medium text-gray-900">
            Upload your company logo
          </h3>
          <p className="text-xs text-gray-500">
            Add a picture to foster trust with potential hires.
          </p>
          <p className="text-xs text-gray-500">Maximum size 10MB.</p>
          <div className="pt-1 space-x-2">
            <input
              id="logo-upload"
              type="file"
              accept="image/*"
              className="sr-only"
              onChange={handleUpload}
              disabled={uploadStatus === "uploading"}
            />
            {uploadStatus === "idle" && (
              <label
                htmlFor="logo-upload"
                className="inline-flex cursor-pointer items-center justify-center rounded-3xl bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Upload
              </label>
            )}
            {uploadStatus === "uploading" && (
              <span className="text-sm text-gray-500">Uploading...</span>
            )}
            {uploadStatus === "uploaded" && (
              <>
                <label
                  htmlFor="logo-upload"
                  className="inline-flex cursor-pointer items-center justify-center rounded-3xl bg-white border border-1 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-0 focus:ring-gray-500 focus:ring-offset-0"
                >
                  Replace
                </label>
                <Button
                  variant="outline"
                  onClick={handleRemove}
                  className="text-sm border border-red-600 text-red-600 rounded-3xl hover:text-red-700 px-3 py-1.5"
                >
                  Remove
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
