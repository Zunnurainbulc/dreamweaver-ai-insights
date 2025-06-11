
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sparkles, Eye, Lightbulb, Heart, TrendingUp } from "lucide-react";

interface DreamAnalysisProps {
  dreamContent: string;
  mood: string;
  intensity: number;
}

const DreamAnalysis = ({ dreamContent, mood, intensity }: DreamAnalysisProps) => {
  // Simple AI simulation - in a real app, this would call an actual AI service
  const analyzeSymbols = (content: string) => {
    const symbolMap: Record<string, { meaning: string; mythology: string }> = {
      water: {
        meaning: "Represents emotions, subconscious mind, and purification",
        mythology: "In many cultures, water symbolizes life, rebirth, and spiritual cleansing"
      },
      flying: {
        meaning: "Indicates desire for freedom, ambition, or escaping limitations",
        mythology: "Ancient Greeks associated flying dreams with the soul's journey"
      },
      house: {
        meaning: "Symbolizes the self, your psyche, and different aspects of your personality",
        mythology: "Houses in dreams often represent the dreamer's mind in psychological traditions"
      },
      animals: {
        meaning: "Represents instincts, natural impulses, and untamed aspects of self",
        mythology: "Spirit animals in shamanic traditions guide and protect the dreamer"
      },
      death: {
        meaning: "Usually represents transformation, endings, and new beginnings",
        mythology: "Death in dreams often symbolizes rebirth across many mythological systems"
      },
      fire: {
        meaning: "Symbolizes passion, transformation, purification, or destruction",
        mythology: "Fire represents divine energy and transformation in many mythologies"
      }
    };

    const foundSymbols: Array<{ symbol: string; meaning: string; mythology: string }> = [];
    const lowerContent = content.toLowerCase();

    Object.entries(symbolMap).forEach(([symbol, info]) => {
      if (lowerContent.includes(symbol)) {
        foundSymbols.push({ symbol, ...info });
      }
    });

    return foundSymbols;
  };

  const getMoodInsight = (mood: string) => {
    const moodInsights: Record<string, string> = {
      peaceful: "Your peaceful dream suggests inner harmony and emotional balance. This is often a sign of personal growth and contentment.",
      anxious: "Anxious dreams often reflect real-life stress or unresolved concerns. Consider what worries might be surfacing in your subconscious.",
      joyful: "Joyful dreams indicate positive energy and optimism. Your subconscious is processing happy experiences and hopeful possibilities.",
      mysterious: "Mysterious dreams suggest you're exploring unknown aspects of yourself. Pay attention to the symbols - they may reveal hidden insights.",
      frightening: "Scary dreams often help process fears and anxieties. They can be your mind's way of preparing you to face challenges.",
      romantic: "Romantic dreams may reflect desires for connection, love, or creative expression. They often appear during times of emotional opening.",
      adventurous: "Adventure dreams indicate a desire for new experiences and personal growth. Your spirit is ready for exploration.",
      melancholic: "Sad dreams often help process grief or loss. They can be healing, allowing you to work through difficult emotions safely."
    };

    return moodInsights[mood] || "Every dream carries unique wisdom and meaning for the dreamer.";
  };

  const getIntensityInsight = (intensity: number) => {
    if (intensity <= 3) return "Gentle dreams often carry subtle messages and peaceful guidance.";
    if (intensity <= 6) return "Moderate intensity dreams balance conscious and unconscious processing.";
    if (intensity <= 8) return "Vivid dreams suggest important messages from your subconscious mind.";
    return "Highly intense dreams often mark significant psychological or spiritual moments.";
  };

  const symbols = analyzeSymbols(dreamContent);
  const moodInsight = getMoodInsight(mood);
  const intensityInsight = getIntensityInsight(intensity);

  return (
    <div className="space-y-6">
      <Card className="border-primary/30 bg-card/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="h-5 w-5 text-mystical-glow" />
            Dream Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-96">
            <div className="space-y-6">
              
              {/* Mood Analysis */}
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <Heart className="h-4 w-4 text-accent" />
                  Emotional Insight
                </h3>
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <Badge variant="secondary" className="mb-2 mystical-gradient text-white">
                    {mood.charAt(0).toUpperCase() + mood.slice(1)} Dream
                  </Badge>
                  <p className="text-sm leading-relaxed">{moodInsight}</p>
                </div>
              </div>

              {/* Intensity Analysis */}
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  Dream Intensity ({intensity}/10)
                </h3>
                <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
                  <p className="text-sm leading-relaxed">{intensityInsight}</p>
                </div>
              </div>

              {/* Symbol Analysis */}
              {symbols.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Eye className="h-4 w-4 text-accent" />
                    Symbolic Meanings
                  </h3>
                  <div className="space-y-4">
                    {symbols.map((symbol, index) => (
                      <div key={index} className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                        <h4 className="font-medium text-accent capitalize mb-2">{symbol.symbol}</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <span className="font-medium">Psychological:</span>
                            <p className="text-muted-foreground mt-1">{symbol.meaning}</p>
                          </div>
                          <div>
                            <span className="font-medium">Mythological:</span>
                            <p className="text-muted-foreground mt-1">{symbol.mythology}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Personal Insight */}
              <div className="space-y-3">
                <h3 className="font-semibold flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-accent" />
                  Personal Reflection
                </h3>
                <div className="p-4 rounded-lg bg-mystical-glow/5 border border-mystical-glow/20">
                  <p className="text-sm leading-relaxed">
                    This dream appears to be your subconscious processing recent experiences and emotions. 
                    Consider how the themes in your dream might relate to your current life situation. 
                    Dreams often provide creative solutions and emotional clarity when we reflect on their messages.
                  </p>
                </div>
              </div>

            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default DreamAnalysis;
