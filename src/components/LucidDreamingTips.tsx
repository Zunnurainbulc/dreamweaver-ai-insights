
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Lightbulb, Star, Zap, Eye, Moon, Brain } from "lucide-react";

const LucidDreamingTips = () => {
  const tips = [
    {
      icon: <Eye className="h-5 w-5" />,
      category: "Reality Checks",
      title: "Question Your Reality",
      description: "Throughout the day, ask yourself 'Am I dreaming?' Look at your hands, check digital clocks twice, or try reading text multiple times. In dreams, these elements often appear distorted.",
      difficulty: "Beginner"
    },
    {
      icon: <Brain className="h-5 w-5" />,
      category: "Dream Journal",
      title: "Record Every Detail",
      description: "Keep a dream journal by your bed. Write down everything you remember immediately upon waking. This improves dream recall and helps you recognize recurring dream signs.",
      difficulty: "Beginner"
    },
    {
      icon: <Moon className="h-5 w-5" />,
      category: "Sleep Technique",
      title: "Wake-Back-to-Bed (WBTB)",
      description: "Wake up 4-6 hours after falling asleep, stay awake for 20-30 minutes thinking about lucid dreaming, then return to sleep. This increases REM sleep awareness.",
      difficulty: "Intermediate"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      category: "Visualization",
      title: "Mnemonic Induction",
      description: "As you fall asleep, repeat 'Next time I'm dreaming, I will remember I'm dreaming.' Visualize yourself becoming lucid in a recent dream scenario.",
      difficulty: "Intermediate"
    },
    {
      icon: <Star className="h-5 w-5" />,
      category: "Advanced",
      title: "Dream Stabilization",
      description: "Once lucid, stabilize the dream by rubbing your hands together, touching objects, or spinning in place. This prevents waking up from excitement.",
      difficulty: "Advanced"
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      category: "Meditation",
      title: "Mindfulness Practice",
      description: "Regular meditation increases self-awareness, which translates to better dream awareness. Practice observing your thoughts without judgment.",
      difficulty: "Beginner"
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-green-500/20 text-green-300";
      case "Intermediate": return "bg-yellow-500/20 text-yellow-300";
      case "Advanced": return "bg-red-500/20 text-red-300";
      default: return "bg-primary/20 text-primary";
    }
  };

  return (
    <Card className="border-accent/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-5 w-5 text-accent dream-float" />
          Lucid Dreaming Guide
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Learn to become conscious within your dreams and take control of your dream experiences.
        </p>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-96">
          <div className="space-y-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-accent/10 bg-background/30 hover:bg-background/50 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="text-accent mt-1">
                    {tip.icon}
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <h3 className="font-semibold">{tip.title}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {tip.category}
                        </Badge>
                        <Badge className={`text-xs ${getDifficultyColor(tip.difficulty)} border-0`}>
                          {tip.difficulty}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="mt-6 p-4 rounded-lg bg-mystical-glow/5 border border-mystical-glow/20">
          <p className="text-sm text-center text-muted-foreground">
            💫 <strong>Remember:</strong> Lucid dreaming takes practice and patience. 
            Start with reality checks and dream journaling, then gradually work your way up to advanced techniques.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default LucidDreamingTips;
