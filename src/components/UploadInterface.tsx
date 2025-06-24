
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Upload, Sparkles } from "lucide-react";

interface UploadInterfaceProps {
  onImageUpload: (imageUrl: string) => void;
}

const UploadInterface = ({ onImageUpload }: UploadInterfaceProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type.startsWith('image/')) {
      setUploading(true);
      const reader = new FileReader();
      reader.onload = (e) => {
        setTimeout(() => {
          setUploading(false);
          onImageUpload(e.target?.result as string);
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-blush-500 mr-2" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blush-500 via-lavender-500 to-mint-500 bg-clip-text text-transparent">
              Discover Your Perfect Skin
            </h1>
            <Sparkles className="w-8 h-8 text-mint-500 ml-2" />
          </div>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Upload a clear photo of your face and let our AI analyze your skin to create a personalized skincare routine just for you.
          </p>
          
          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blush-400 to-blush-500 flex items-center justify-center text-white text-sm font-semibold">1</div>
              <span>Upload Photo</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-lavender-400 to-lavender-500 flex items-center justify-center text-white text-sm font-semibold">2</div>
              <span>AI Analysis</span>
            </div>
            <div className="w-8 h-0.5 bg-gray-300"></div>
            <div className="flex items-center space-x-2 text-gray-600">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-mint-400 to-mint-500 flex items-center justify-center text-white text-sm font-semibold">3</div>
              <span>Get Results</span>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <Card className={`max-w-2xl mx-auto p-12 glass-card transition-all duration-300 ${
          dragActive ? 'border-blush-300 bg-blush-50/50 scale-105' : 'hover:shadow-xl'
        } ${uploading ? 'animate-pulse-soft' : ''}`}>
          <div
            className="border-2 border-dashed border-gray-300 rounded-3xl p-16 transition-all duration-300 hover:border-blush-300 cursor-pointer"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={openFileDialog}
          >
            {uploading ? (
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blush-400 to-lavender-400 flex items-center justify-center">
                  <Upload className="w-8 h-8 text-white animate-bounce" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Uploading your photo...</h3>
                <div className="w-32 h-2 bg-gray-200 rounded-full mx-auto overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blush-400 to-lavender-400 rounded-full shimmer-effect"></div>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-blush-100 to-lavender-100 flex items-center justify-center">
                  <Camera className="w-10 h-10 text-blush-500" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Upload Your Photo</h3>
                <p className="text-gray-500 mb-6">
                  Drag and drop your image here, or click to browse
                </p>
                <Button 
                  className="bg-gradient-to-r from-blush-500 to-lavender-500 hover:from-blush-600 hover:to-lavender-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Choose Photo
                </Button>
                <p className="text-sm text-gray-400 mt-4">
                  Supported formats: JPG, PNG, WEBP (Max 5MB)
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Tips Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blush-100 to-blush-200 flex items-center justify-center">
              <span className="text-2xl">💡</span>
            </div>
            <h4 className="font-semibold text-gray-700 mb-2">Good Lighting</h4>
            <p className="text-sm text-gray-600">Use natural light or bright indoor lighting for best results</p>
          </Card>
          
          <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-lavender-100 to-lavender-200 flex items-center justify-center">
              <span className="text-2xl">📸</span>
            </div>
            <h4 className="font-semibold text-gray-700 mb-2">Clear Face</h4>
            <p className="text-sm text-gray-600">Make sure your face is clearly visible without makeup</p>
          </Card>
          
          <Card className="p-6 glass-card hover:shadow-lg transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-mint-100 to-mint-200 flex items-center justify-center">
              <span className="text-2xl">🔒</span>
            </div>
            <h4 className="font-semibold text-gray-700 mb-2">Privacy First</h4>
            <p className="text-sm text-gray-600">Your photos are analyzed securely and never stored</p>
          </Card>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default UploadInterface;
