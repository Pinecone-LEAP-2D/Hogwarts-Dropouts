import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export const SelectCoverImage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full h-[320px] bg-[#F4F4F5] relative flex items-center justify-center overflow-hidden">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Selected cover"
          className="absolute inset-0 object-cover w-full h-full"
        />
      )}

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <div className="relative z-10">
        <Button
          className="flex gap-2 bg-white/80 hover:bg-white text-black"
          onClick={handleButtonClick}
        >
          <Camera className="w-4 h-4" />
          {imageUrl ? "Change cover image" : "Add a cover image"}
        </Button>
      </div>
    </div>
  );
};
