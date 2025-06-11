
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Palette } from "lucide-react";

interface DreamEntry {
  title: string;
  content: string;
  mood: string;
  intensity: number;
  date: string;
}

interface MoodTrackerProps {
  dreams: DreamEntry[];
}

const MoodTracker = ({ dreams }: MoodTrackerProps) => {
  if (dreams.length === 0) {
    return (
      <Card className="border-muted bg-card/50">
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <TrendingUp className="h-16 w-16 text-muted-foreground mb-4 dream-float" />
          <h3 className="text-xl font-semibold mb-2">Track Your Dream Patterns</h3>
          <p className="text-muted-foreground max-w-md">
            Log more dreams to see your emotional patterns and intensity trends over time.
          </p>
        </CardContent>
      </Card>
    );
  }

  // Prepare mood distribution data
  const moodCounts = dreams.reduce((acc, dream) => {
    acc[dream.mood] = (acc[dream.mood] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const moodData = Object.entries(moodCounts).map(([mood, count]) => ({
    mood: mood.charAt(0).toUpperCase() + mood.slice(1),
    count,
  }));

  // Prepare intensity trend data (last 7 dreams)
  const recentDreams = dreams.slice(-7);
  const intensityData = recentDreams.map((dream, index) => ({
    dream: `Dream ${index + 1}`,
    intensity: dream.intensity,
    date: new Date(dream.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
  }));

  const COLORS = ['#9333ea', '#3b82f6', '#06b6d4', '#10b981', '#f59e0b', '#ef4444', '#ec4899', '#6b7280'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      
      {/* Mood Distribution */}
      <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="h-5 w-5 text-accent" />
            Mood Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={moodData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ mood, percent }) => `${mood} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {moodData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Intensity Trend */}
      <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-mystical-glow" />
            Intensity Trend
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={intensityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
                <XAxis 
                  dataKey="date" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  domain={[0, 10]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Bar 
                  dataKey="intensity" 
                  fill="hsl(var(--mystical-glow))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

    </div>
  );
};

export default MoodTracker;
