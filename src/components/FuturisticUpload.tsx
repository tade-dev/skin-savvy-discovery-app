import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Upload, Sparkles, Brain, Zap } from "lucide-react";

interface FuturisticUploadProps {
  onImageUpload: (imageUrl: string) => void;
}

const FuturisticUpload = ({ onImageUpload }: FuturisticUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [scanningStep, setScanningStep] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scanningSteps = [
    "Initializing AI scanner...",
    "Analyzing facial structure...",
    "Detecting skin zones...",
    "Measuring texture & tone...",
    "Processing skin data...",
    "Generating insights..."
  ];

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
      setScanningStep(0);
      
      const reader = new FileReader();
      reader.onload = (e) => {
        // Simulate AI scanning process
        const interval = setInterval(() => {
          setScanningStep(prev => {
            if (prev >= scanningSteps.length - 1) {
              clearInterval(interval);
              setTimeout(() => {
                setUploading(false);
                onImageUpload(e.target?.result as string);
              }, 1000);
              return prev;
            }
            return prev + 1;
          });
        }, 500);
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
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center mb-8">
            <div className="relative">
              <div className="w-16 h-16 ai-gradient rounded-2xl flex items-center justify-center animate-glow-pulse">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-ai-cyan rounded-full flex items-center justify-center animate-float">
                <Sparkles className="w-3 h-3 text-background" />
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 ai-text-gradient leading-tight">
            Advanced Skin
            <br />
            Intelligence
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the future of skincare analysis with our AI-powered platform. 
            Upload your photo and discover personalized insights backed by advanced machine learning.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-2xl">
              <div className="w-8 h-8 ai-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <span className="text-sm font-medium">AI Scan</span>
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-ai-purple to-ai-cyan hidden sm:block"></div>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-2xl">
              <div className="w-8 h-8 ai-gradient-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <span className="text-sm font-medium">Deep Analysis</span>
            </div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-ai-cyan to-ai-pink hidden sm:block"></div>
            <div className="flex items-center space-x-3 glass-card px-6 py-3 rounded-2xl">
              <div className="w-8 h-8 ai-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <span className="text-sm font-medium">Smart Results</span>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <Card className={`max-w-3xl mx-auto p-12 glass-card-glow transition-all duration-500 ${
          dragActive ? 'border-ai-cyan/50 scale-105 ai-glow' : ''
        } ${uploading ? 'scanning-animation' : ''}`}>
          <div
            className="border-2 border-dashed border-white/20 rounded-3xl p-16 transition-all duration-300 hover:border-ai-purple/50 cursor-pointer relative overflow-hidden"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={openFileDialog}
          >
            {uploading && (
              <div className="absolute inset-0 bg-gradient-to-r from-ai-purple/10 via-ai-cyan/10 to-ai-pink/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ai-purple/20 to-transparent animate-scan-line"></div>
              </div>
            )}
            
            {uploading ? (
              <div className="text-center relative z-10">
                <div className="w-20 h-20 mx-auto mb-6 ai-gradient rounded-3xl flex items-center justify-center animate-pulse">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {scanningSteps[scanningStep]}
                </h3>
                <div className="w-64 h-1 bg-border rounded-full mx-auto overflow-hidden">
                  <div 
                    className="h-full ai-gradient rounded-full transition-all duration-500"
                    style={{ width: `${((scanningStep + 1) / scanningSteps.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Processing with advanced AI algorithms...
                </p>
              </div>
            ) : (
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-8 ai-gradient rounded-3xl flex items-center justify-center ai-glow animate-float">
                  <Camera className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-6">Upload Your Photo</h3>
                <p className="text-muted-foreground mb-8 text-lg">
                  Drag and drop your selfie here, or click to browse files
                </p>
                <Button 
                  className="ai-gradient hover:scale-105 text-white px-12 py-4 rounded-2xl font-semibold text-lg shadow-2xl ai-glow transition-all duration-300"
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Select Photo
                </Button>
                <p className="text-sm text-muted-foreground mt-6">
                  Supports JPG, PNG, WEBP • Max 10MB • 100% Private & Secure
                </p>
              </div>
            )}
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <Card className="p-8 glass-card hover:glass-card-glow transition-all duration-500 hover:scale-105 group">
            <div className="w-16 h-16 mx-auto mb-6 ai-gradient rounded-2xl flex items-center justify-center group-hover:ai-glow transition-all duration-300">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4 text-center">AI-Powered Analysis</h4>
            <p className="text-muted-foreground text-center leading-relaxed">
              Advanced machine learning algorithms analyze your skin with medical-grade precision
            </p>
          </Card>
          
          <Card className="p-8 glass-card hover:glass-card-glow transition-all duration-500 hover:scale-105 group">
            <div className="w-16 h-16 mx-auto mb-6 ai-gradient-secondary rounded-2xl flex items-center justify-center group-hover:ai-glow transition-all duration-300">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4 text-center">Smart Recommendations</h4>
            <p className="text-muted-foreground text-center leading-relaxed">
              Personalized skincare routines tailored to your unique skin profile and concerns
            </p>
          </Card>
          
          <Card className="p-8 glass-card hover:glass-card-glow transition-all duration-500 hover:scale-105 group">
            <div className="w-16 h-16 mx-auto mb-6 ai-gradient-accent rounded-2xl flex items-center justify-center group-hover:ai-glow transition-all duration-300">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-4 text-center">Instant Results</h4>
            <p className="text-muted-foreground text-center leading-relaxed">
              Get comprehensive skin analysis and actionable insights in seconds, not days
            </p>
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

export default FuturisticUpload;