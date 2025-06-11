
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Book, Calendar, Heart, Zap } from "lucide-react";

interface DreamEntry {
  title: string;
  content: string;
  mood: string;
  intensity: number;
  date: string;
}

interface DreamJournalProps {
  dreams: DreamEntry[];
}

const DreamJournal = ({ dreams }: DreamJournalProps) => {
  const getMoodColor = (mood: string) => {
    const moodColors: Record<string, string> = {
      peaceful: "bg-blue-500/20 text-blue-300",
      anxious: "bg-orange-500/20 text-orange-300",
      joyful: "bg-yellow-500/20 text-yellow-300",
      mysterious: "bg-purple-500/20 text-purple-300",
      frightening: "bg-red-500/20 text-red-300",
      romantic: "bg-pink-500/20 text-pink-300",
      adventurous: "bg-green-500/20 text-green-300",
      melancholic: "bg-gray-500/20 text-gray-300"
    };
    return moodColors[mood] || "bg-primary/20 text-primary";
  };

  const getIntensityBars = (intensity: number) => {
    return Array.from({ length: 10 }, (_, i) => (
      <div
        key={i}
        className={`h-2 w-1 rounded-full ${
          i < intensity ? 'bg-mystical-glow' : 'bg-muted'
        }`}
      />
    ));
  };

  if (dreams.length === 0) {
    return (
      <Card className="border-muted bg-card/50">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <Book className="h-16 w-16 text-muted-foreground mb-4 dream-float" />
          <h3 className="text-xl font-semibold mb-2">Your Dream Journal Awaits</h3>
          <p className="text-muted-foreground max-w-md">
            Start capturing your dreams to unlock patterns, symbols, and insights from your subconscious mind.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Book className="h-5 w-5 text-primary" />
          Dream Journal ({dreams.length} {dreams.length === 1 ? 'entry' : 'entries'})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {dreams.map((dream, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-primary/10 bg-background/30 hover:bg-background/50 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg">{dream.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(dream.date).toLocaleDateString()}
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {dream.content}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Badge className={`${getMoodColor(dream.mood)} border-0`}>
                      <Heart className="h-3 w-3 mr-1" />
                      {dream.mood}
                    </Badge>
                    
                    <div className="flex items-center gap-1">
                      <Zap className="h-3 w-3 text-mystical-glow" />
                      <div className="flex gap-0.5">
                        {getIntensityBars(dream.intensity)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default DreamJournal;
