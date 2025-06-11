
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Calendar, Moon, Heart, Brain } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DreamEntry {
  title: string;
  content: string;
  mood: string;
  intensity: number;
  date: string;
}

interface DreamEntryFormProps {
  onDreamSubmit: (dream: DreamEntry) => void;
}

const DreamEntryForm = ({ onDreamSubmit }: DreamEntryFormProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [mood, setMood] = useState("");
  const [intensity, setIntensity] = useState([5]);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim() || !mood) {
      toast({
        title: "Please fill in all fields",
        description: "We need your dream details to provide accurate interpretation.",
        variant: "destructive",
      });
      return;
    }

    const dreamEntry: DreamEntry = {
      title: title.trim(),
      content: content.trim(),
      mood,
      intensity: intensity[0],
      date: new Date().toISOString(),
    };

    onDreamSubmit(dreamEntry);
    
    // Reset form
    setTitle("");
    setContent("");
    setMood("");
    setIntensity([5]);

    toast({
      title: "Dream captured! ✨",
      description: "Your dream is being analyzed by our AI interpreter...",
    });
  };

  return (
    <Card className="dream-glow border-primary/20 bg-card/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <Moon className="h-6 w-6 text-primary" />
          Capture Your Dream
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title" className="flex items-center gap-2">
              <Brain className="h-4 w-4" />
              Dream Title
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What was your dream about?"
              className="bg-background/50"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Describe Your Dream</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share every detail you remember... colors, people, emotions, symbols, settings..."
              className="min-h-32 bg-background/50 resize-none"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Overall Mood
              </Label>
              <Select value={mood} onValueChange={setMood}>
                <SelectTrigger className="bg-background/50">
                  <SelectValue placeholder="How did the dream feel?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="peaceful">Peaceful & Calm</SelectItem>
                  <SelectItem value="anxious">Anxious & Worried</SelectItem>
                  <SelectItem value="joyful">Joyful & Happy</SelectItem>
                  <SelectItem value="mysterious">Mysterious & Intriguing</SelectItem>
                  <SelectItem value="frightening">Frightening & Scary</SelectItem>
                  <SelectItem value="romantic">Romantic & Loving</SelectItem>
                  <SelectItem value="adventurous">Adventurous & Exciting</SelectItem>
                  <SelectItem value="melancholic">Sad & Melancholic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Dream Intensity: {intensity[0]}/10</Label>
              <Slider
                value={intensity}
                onValueChange={setIntensity}
                max={10}
                min={1}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Gentle</span>
                <span>Vivid</span>
                <span>Intense</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Today, {new Date().toLocaleDateString()}</span>
          </div>

          <Button type="submit" className="w-full mystical-gradient text-white font-semibold py-3 text-lg">
            Interpret My Dream ✨
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DreamEntryForm;
