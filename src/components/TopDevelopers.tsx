import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Zap, Brain, Code2, Rocket, TrendingUp } from 'lucide-react';

const TopDevelopers = () => {
  const topDevs = [
    {
      rank: 1,
      name: "Alex Chen",
      handle: "@alexc_dev",
      avatar: "/api/placeholder/64/64",
      innovationScore: 9.8,
      techStackDiversity: 95,
      futureReadyIndex: 92,
      specialties: ["Web3", "AI/ML", "Edge Computing", "Quantum JS"],
      bleeding_edge_projects: [
        "Real-time collaborative quantum computing visualizer",
        "AI-powered self-healing microservices architecture",
        "Blockchain-based distributed state management"
      ],
      github_stars: 12400,
      recent_tech: ["Bun", "Deno", "WebAssembly", "Edge Functions", "Solid.js"]
    },
    {
      rank: 2,
      name: "Sarah Kim",
      handle: "@sarahk_code",
      avatar: "/api/placeholder/64/64",
      innovationScore: 9.5,
      techStackDiversity: 89,
      futureReadyIndex: 88,
      specialties: ["Neural Networks", "WebGL", "3D Web", "AR/VR"],
      bleeding_edge_projects: [
        "Browser-based neural network training platform",
        "WebXR collaborative development environment",
        "Real-time ray tracing in the browser"
      ],
      github_stars: 8900,
      recent_tech: ["Three.js", "WebGPU", "TensorFlow.js", "React Fiber", "Vite"]
    },
    {
      rank: 3,
      name: "Jordan Rivera",
      handle: "@jrivera_dev",
      avatar: "/api/placeholder/64/64",
      innovationScore: 9.2,
      techStackDiversity: 86,
      futureReadyIndex: 85,
      specialties: ["Serverless", "DevOps", "Cloud Native", "IoT"],
      bleeding_edge_projects: [
        "Multi-cloud serverless orchestration framework",
        "IoT data pipeline with edge computing",
        "Auto-scaling Kubernetes operator for ML workloads"
      ],
      github_stars: 6700,
      recent_tech: ["Vercel", "Cloudflare Workers", "Supabase", "tRPC", "Remix"]
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-emerald-400";
    if (score >= 80) return "text-yellow-400";
    return "text-orange-400";
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-3">
          🏆 Top 3 Bleeding Edge Developers
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Ranked by cutting-edge tech adoption, innovative architecture choices, and future-ready development practices
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {topDevs.map((dev) => (
          <Card key={dev.rank} className="bg-white/5 backdrop-blur-lg border-white/10 relative overflow-hidden">
            {/* Rank Badge */}
            <div className="absolute top-4 right-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                dev.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-yellow-900' :
                dev.rank === 2 ? 'bg-gradient-to-r from-gray-300 to-gray-500 text-gray-900' :
                'bg-gradient-to-r from-amber-600 to-amber-800 text-amber-100'
              }`}>
                #{dev.rank}
              </div>
            </div>

            <CardHeader className="text-center pb-4">
              <div className="flex flex-col items-center space-y-3">
                <Avatar className="w-16 h-16 border-2 border-purple-400/30">
                  <AvatarImage src={dev.avatar} alt={dev.name} />
                  <AvatarFallback className="bg-purple-500/20 text-purple-300">
                    {dev.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-white text-xl">{dev.name}</CardTitle>
                  <p className="text-purple-300 text-sm">{dev.handle}</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white/5 rounded-lg p-2">
                  <div className={`font-bold text-lg ${getScoreColor(dev.innovationScore * 10)}`}>
                    {dev.innovationScore}
                  </div>
                  <div className="text-xs text-gray-400">Innovation</div>
                </div>
                <div className="bg-white/5 rounded-lg p-2">
                  <div className={`font-bold text-lg ${getScoreColor(dev.techStackDiversity)}`}>
                    {dev.techStackDiversity}%
                  </div>
                  <div className="text-xs text-gray-400">Tech Diversity</div>
                </div>
                <div className="bg-white/5 rounded-lg p-2">
                  <div className={`font-bold text-lg ${getScoreColor(dev.futureReadyIndex)}`}>
                    {dev.futureReadyIndex}%
                  </div>
                  <div className="text-xs text-gray-400">Future Ready</div>
                </div>
              </div>

              {/* GitHub Stars */}
              <div className="flex items-center justify-center space-x-2 text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-semibold">{dev.github_stars.toLocaleString()}</span>
                <span className="text-gray-400 text-sm">stars</span>
              </div>

              {/* Specialties */}
              <div className="space-y-2">
                <h4 className="text-white text-sm font-semibold flex items-center">
                  <Brain className="h-4 w-4 mr-1 text-purple-400" />
                  Specialties
                </h4>
                <div className="flex flex-wrap gap-1">
                  {dev.specialties.map((spec, i) => (
                    <Badge key={i} variant="secondary" className="text-xs bg-purple-500/20 text-purple-300 border-purple-400/20">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Recent Tech */}
              <div className="space-y-2">
                <h4 className="text-white text-sm font-semibold flex items-center">
                  <Zap className="h-4 w-4 mr-1 text-yellow-400" />
                  Recent Tech
                </h4>
                <div className="flex flex-wrap gap-1">
                  {dev.recent_tech.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="outline" className="text-xs border-yellow-400/30 text-yellow-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Top Project */}
              <div className="space-y-2">
                <h4 className="text-white text-sm font-semibold flex items-center">
                  <Rocket className="h-4 w-4 mr-1 text-pink-400" />
                  Latest Innovation
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  {dev.bleeding_edge_projects[0]}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          🔥 Criteria: Adoption of experimental frameworks, implementation of cutting-edge patterns, 
          contribution to next-gen tooling, and architectural innovation
        </p>
      </div>
    </div>
  );
};

export default TopDevelopers;