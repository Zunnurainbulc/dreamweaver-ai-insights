
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DreamHeader from "@/components/DreamHeader";
import DreamEntryForm from "@/components/DreamEntryForm";
import DreamAnalysis from "@/components/DreamAnalysis";
import DreamJournal from "@/components/DreamJournal";
import MoodTracker from "@/components/MoodTracker";
import LucidDreamingTips from "@/components/LucidDreamingTips";
import { Book, TrendingUp, Lightbulb, PenTool, Sparkles } from "lucide-react";

interface DreamEntry {
  title: string;
  content: string;
  mood: string;
  intensity: number;
  date: string;
}

const Index = () => {
  const [dreams, setDreams] = useState<DreamEntry[]>([]);
  const [currentAnalysis, setCurrentAnalysis] = useState<DreamEntry | null>(null);

  const handleDreamSubmit = (dream: DreamEntry) => {
    setDreams(prevDreams => [dream, ...prevDreams]);
    setCurrentAnalysis(dream);
  };

  return (
    <div className="min-h-screen">
      <DreamHeader />
      
      <div className="container mx-auto px-4 pb-12">
        <Tabs defaultValue="capture" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8 bg-card/50 backdrop-blur-sm">
            <TabsTrigger value="capture" className="flex items-center gap-2">
              <PenTool className="h-4 w-4" />
              <span className="hidden sm:inline">Capture</span>
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="hidden sm:inline">Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="journal" className="flex items-center gap-2">
              <Book className="h-4 w-4" />
              <span className="hidden sm:inline">Journal</span>
            </TabsTrigger>
            <TabsTrigger value="tracker" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Tracker</span>
            </TabsTrigger>
            <TabsTrigger value="tips" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              <span className="hidden sm:inline">Lucid</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="capture" className="space-y-6">
            <DreamEntryForm onDreamSubmit={handleDreamSubmit} />
          </TabsContent>

          <TabsContent value="analysis" className="space-y-6">
            {currentAnalysis ? (
              <DreamAnalysis 
                dreamContent={currentAnalysis.content}
                mood={currentAnalysis.mood}
                intensity={currentAnalysis.intensity}
              />
            ) : (
              <div className="text-center py-16">
                <Sparkles className="h-16 w-16 text-muted-foreground mx-auto mb-4 dream-float" />
                <h3 className="text-xl font-semibold mb-2">No Dream to Analyze</h3>
                <p className="text-muted-foreground">
                  Capture a dream first to see your personalized AI analysis.
                </p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="journal" className="space-y-6">
            <DreamJournal dreams={dreams} />
          </TabsContent>

          <TabsContent value="tracker" className="space-y-6">
            <MoodTracker dreams={dreams} />
          </TabsContent>

          <TabsContent value="tips" className="space-y-6">
            <LucidDreamingTips />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
