
import { Card, CardContent } from "@/components/ui/card";
import { Github, Code, BarChart3, Zap, Target } from 'lucide-react';

const LoadingAnimation = () => {
  return (
    <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg border-white/20">
      <CardContent className="pt-8 pb-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center items-center gap-4">
            <div className="relative">
              <Github className="h-12 w-12 text-purple-400 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Analyzing Your Repository Portfolio</h3>
            <p className="text-gray-300">Our AI is examining your code, detecting patterns, and generating strategic insights...</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-3 bg-white/5 rounded-lg">
              <Code className="h-6 w-6 text-blue-400 mx-auto mb-2 animate-pulse" />
              <p className="text-xs text-gray-300">Code Analysis</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <BarChart3 className="h-6 w-6 text-green-400 mx-auto mb-2 animate-pulse" />
              <p className="text-xs text-gray-300">Tech Stack</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <Zap className="h-6 w-6 text-yellow-400 mx-auto mb-2 animate-pulse" />
              <p className="text-xs text-gray-300">Integration</p>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <Target className="h-6 w-6 text-pink-400 mx-auto mb-2 animate-pulse" />
              <p className="text-xs text-gray-300">Strategy</p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
              <span className="text-gray-300 text-sm">Deep analysis in progress...</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoadingAnimation;
