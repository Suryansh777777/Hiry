import { useState } from "react";
import { Button } from "@/components/ui/button";

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
  >("idle");

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadStatus("uploading");
      // Simulate upload process
      setTimeout(() => {
        onUpload(file);
        setUploadStatus("uploaded");
      }, 1500);
    }
  };

  return (
    <div className="mb-8">
      <div className="flex items-center space-x-6">
        {logo ? (
          <img
            src={logo}
            alt="Company logo"
            className="h-24 w-24 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50">
            <span className="text-4xl font-medium text-emerald-500">
              {companyInitial || "A"}
            </span>
          </div>
        )}
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-gray-900">
            Upload your company logo
          </h3>
          <p className="text-sm text-gray-500">
            Add a picture to foster trust with potential hires.
          </p>
          <p className="text-sm text-gray-500">Maximum size 10MB.</p>
          <div className="pt-1">
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
                className="inline-flex cursor-pointer items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Upload
              </label>
            )}
            {uploadStatus === "uploading" && (
              <span className="text-sm text-gray-500">Uploading...</span>
            )}
            {uploadStatus === "uploaded" && (
              <Button
                variant="outline"
                onClick={onRemove}
                className="text-sm text-red-600 hover:text-red-700"
              >
                Remove
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
