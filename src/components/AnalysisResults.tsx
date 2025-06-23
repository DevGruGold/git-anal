
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Zap, 
  Target, 
  Globe, 
  Smartphone, 
  Database, 
  Brain,
  ArrowRight,
  Download,
  Star,
  GitBranch
} from 'lucide-react';

interface Repository {
  name: string;
  score: number;
  purpose: string;
  stars: number;
}

interface AnalysisData {
  totalRepos: number;
  categories: Record<string, string[]>;
  techStack: Record<string, number>;
  highIntegration: Repository[];
  businessImpact: {
    directRevenue: string;
    integrationOpportunities: number;
    consolidationTargets: number;
  };
}

interface AnalysisResultsProps {
  data: AnalysisData;
  username: string;
}

const AnalysisResults = ({ data, username }: AnalysisResultsProps) => {
  const categoryIcons = {
    'web_application': Globe,
    'api_service': Database,
    'mobile_app': Smartphone,
    'data_analytics': BarChart3,
    'automation_tool': Zap
  };

  const categoryColors = {
    'web_application': 'bg-blue-500',
    'api_service': 'bg-green-500',
    'mobile_app': 'bg-purple-500',
    'data_analytics': 'bg-yellow-500',
    'automation_tool': 'bg-pink-500'
  };

  return (
    <div className="space-y-8">
      {/* Overview Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Total Projects</p>
                <p className="text-3xl font-bold text-white">{data.totalRepos}</p>
              </div>
              <GitBranch className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Categories</p>
                <p className="text-3xl font-bold text-white">{Object.keys(data.categories).length}</p>
              </div>
              <Target className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">High Integration</p>
                <p className="text-3xl font-bold text-white">{data.highIntegration.length}</p>
              </div>
              <Zap className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-300">Revenue Potential</p>
                <p className="text-lg font-bold text-white">{data.businessImpact.directRevenue}</p>
              </div>
              <TrendingUp className="h-8 w-8 text-pink-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Analysis Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-lg">
          <TabsTrigger value="overview" className="text-white data-[state=active]:bg-purple-500">Overview</TabsTrigger>
          <TabsTrigger value="categories" className="text-white data-[state=active]:bg-purple-500">Categories</TabsTrigger>
          <TabsTrigger value="integration" className="text-white data-[state=active]:bg-purple-500">Integration</TabsTrigger>
          <TabsTrigger value="strategy" className="text-white data-[state=active]:bg-purple-500">Strategy</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tech Stack */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  Technology Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(data.techStack).map(([tech, count]) => (
                  <div key={tech} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-200">{tech}</span>
                      <span className="text-gray-300">{count} projects</span>
                    </div>
                    <Progress value={(Number(count) / data.totalRepos) * 100} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Performers */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Top Performers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {data.highIntegration.slice(0, 5).map((repo, index) => (
                  <div key={repo.name} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <div>
                      <p className="text-white font-medium">{repo.name}</p>
                      <p className="text-sm text-gray-300">{repo.purpose.replace('_', ' ')}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Star className="h-3 w-3" />
                        <span className="text-sm">{repo.stars}</span>
                      </div>
                      <Badge variant="secondary" className="mt-1">
                        {repo.score}/10
                      </Badge>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="categories" className="space-y-6">
          <div className="grid gap-6">
            {Object.entries(data.categories).map(([category, repos]) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons] || Globe;
              const colorClass = categoryColors[category as keyof typeof categoryColors] || 'bg-gray-500';
              
              return (
                <Card key={category} className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${colorClass}`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      {category.replace('_', ' ').toUpperCase()}
                      <Badge variant="secondary">{repos.length} projects</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-3">
                      {repos.map((repo) => (
                        <div key={repo} className="p-3 bg-white/5 rounded-lg">
                          <p className="text-white font-medium">{repo}</p>
                          <p className="text-xs text-gray-300">Integration ready</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="integration" className="space-y-6">
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="h-5 w-5" />
                High Integration Potential
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {data.highIntegration.map((repo, index) => (
                <div key={repo.name} className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
                  <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-purple-400">#{index + 1}</div>
                    <div>
                      <h3 className="text-white font-semibold">{repo.name}</h3>
                      <p className="text-gray-300">{repo.purpose.replace('_', ' ')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{repo.score}/10</div>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-3 w-3" />
                      <span className="text-sm">{repo.stars}</span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strategy" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Revenue Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-200">Unified Platform</span>
                    <span className="text-green-400 font-semibold">$50K-200K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-200">Mobile App</span>
                    <span className="text-green-400 font-semibold">$30K-100K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-200">API Marketplace</span>
                    <span className="text-green-400 font-semibold">$20K-80K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-200">Analytics Platform</span>
                    <span className="text-green-400 font-semibold">$15K-50K</span>
                  </div>
                  <hr className="border-gray-600" />
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-white">Total Potential</span>
                    <span className="text-green-400">{data.businessImpact.directRevenue}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Implementation Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div>
                      <h4 className="text-white font-semibold">Core Platform (0-3 months)</h4>
                      <p className="text-gray-300 text-sm">Integrate highest-scoring applications</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div>
                      <h4 className="text-white font-semibold">Mobile & API (3-6 months)</h4>
                      <p className="text-gray-300 text-sm">Develop mobile app and API services</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div>
                      <h4 className="text-white font-semibold">Expansion (6-12 months)</h4>
                      <p className="text-gray-300 text-sm">Launch marketplace and analytics</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Strategic Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Immediate Actions
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Merge top 3 web applications</li>
                    <li>• Add unified authentication</li>
                    <li>• Implement payment processing</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    Long-term Vision
                  </h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Create ecosystem platform</li>
                    <li>• Launch partner program</li>
                    <li>• Scale to market leadership</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button 
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
          onClick={() => window.location.reload()}
        >
          <ArrowRight className="h-4 w-4 mr-2" />
          Analyze Another Portfolio
        </Button>
        <Button 
          variant="outline" 
          className="border-white/20 text-white hover:bg-white/10"
          onClick={() => {
            const reportData = JSON.stringify(data, null, 2);
            const blob = new Blob([reportData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `portfolio-analysis-${username}.json`;
            a.click();
          }}
        >
          <Download className="h-4 w-4 mr-2" />
          Export Report
        </Button>
      </div>
    </div>
  );
};

export default AnalysisResults;
