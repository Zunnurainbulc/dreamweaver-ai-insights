
import { Moon, Stars, Sparkles } from "lucide-react";

const DreamHeader = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 mystical-gradient opacity-20"></div>
      <div className="relative z-10 container mx-auto px-4 py-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Moon className="h-8 w-8 text-mystical-glow dream-float" />
          <h1 className="text-4xl md:text-6xl font-bold shimmer-text">
            DreamVerse
          </h1>
          <Stars className="h-8 w-8 text-mystical-glow dream-float" style={{ animationDelay: '2s' }} />
        </div>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Unlock the mysteries of your subconscious with AI-powered dream interpretation
        </p>
        <div className="flex justify-center mt-6">
          <Sparkles className="h-6 w-6 text-accent animate-pulse" />
        </div>
      </div>
    </header>
  );
};

export default DreamHeader;
