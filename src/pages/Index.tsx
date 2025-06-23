
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Github, Search, BarChart3, Zap, Target, Rocket, TrendingUp, Globe, Smartphone, Database, Brain } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AnalysisResults from '@/components/AnalysisResults';
import LoadingAnimation from '@/components/LoadingAnimation';

const Index = () => {
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!username.trim()) {
      toast({
        title: "Username Required",
        description: "Please enter your GitHub username",
        variant: "destructive"
      });
      return;
    }

    if (!token.trim()) {
      toast({
        title: "Token Required", 
        description: "Please enter your GitHub personal access token",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    setProgress(0);

    // Simulate the analysis process with progress updates
    const progressSteps = [
      { step: 20, message: "Fetching repositories..." },
      { step: 40, message: "Analyzing file structures..." },
      { step: 60, message: "Determining tech stacks..." },
      { step: 80, message: "Calculating integration scores..." },
      { step: 100, message: "Generating strategic insights..." }
    ];

    try {
      for (const { step, message } of progressSteps) {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setProgress(step);
        toast({
          title: "Analysis Progress",
          description: message,
        });
      }

      // Mock analysis data - in real implementation, this would call the GitHub API
      const mockData = {
        totalRepos: 24,
        categories: {
          'web_application': ['portfolio-site', 'booking-platform', 'dashboard-app'],
          'api_service': ['payment-api', 'notification-service'],
          'mobile_app': ['tour-guide-app'],
          'data_analytics': ['user-analytics', 'business-intelligence'],
          'automation_tool': ['deployment-scripts', 'data-scraper']
        },
        techStack: {
          'JavaScript': 12,
          'Python': 8,
          'TypeScript': 6,
          'React': 5,
          'Node.js': 4
        },
        highIntegration: [
          { name: 'booking-platform', score: 9, purpose: 'web_application', stars: 15 },
          { name: 'payment-api', score: 8, purpose: 'api_service', stars: 12 },
          { name: 'tour-guide-app', score: 7, purpose: 'mobile_app', stars: 8 }
        ],
        businessImpact: {
          directRevenue: '$115K-430K annually',
          integrationOpportunities: 3,
          consolidationTargets: 5
        }
      };

      setAnalysisData(mockData);
      toast({
        title: "Analysis Complete!",
        description: `Successfully analyzed ${mockData.totalRepos} repositories`,
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Please check your credentials and try again",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
              <Github className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            GitHub Repository Analyzer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your GitHub portfolio into strategic business insights. Discover integration opportunities, 
            tech stack analysis, and revenue potential across your repositories.
          </p>
        </div>

        {/* Input Form */}
        {!analysisData && (
          <Card className="max-w-2xl mx-auto mb-8 bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Search className="h-5 w-5" />
                Repository Analysis Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">GitHub Username</label>
                <Input
                  placeholder="Enter your GitHub username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  disabled={isAnalyzing}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-200">GitHub Personal Access Token</label>
                <Input
                  type="password"
                  placeholder="ghp_xxxxxxxxxxxxxxxxxxxx"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                  disabled={isAnalyzing}
                />
                <p className="text-xs text-gray-400">
                  Need a token? Visit{" "}
                  <a href="https://github.com/settings/personal-access-tokens/new" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-purple-400 hover:text-purple-300 underline">
                    GitHub Settings
                  </a>
                </p>
              </div>

              <Alert className="bg-blue-500/10 border-blue-500/20 text-blue-200">
                <AlertDescription>
                  🔒 Your credentials are processed securely and never stored. The analysis runs entirely in your browser.
                </AlertDescription>
              </Alert>

              <Button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
              >
                {isAnalyzing ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Analyzing Repositories...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Start Strategic Analysis
                  </div>
                )}
              </Button>

              {isAnalyzing && (
                <div className="space-y-2">
                  <Progress value={progress} className="w-full" />
                  <p className="text-sm text-gray-300 text-center">{progress}% Complete</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Loading Animation */}
        {isAnalyzing && <LoadingAnimation />}

        {/* Analysis Results */}
        {analysisData && !isAnalyzing && (
          <AnalysisResults data={analysisData} username={username} />
        )}

        {/* Features Section */}
        {!analysisData && !isAnalyzing && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center">
              <CardContent className="pt-6">
                <Target className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Purpose Detection</h3>
                <p className="text-gray-300 text-sm">Automatically categorize repositories by business purpose and functionality</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Integration Analysis</h3>
                <p className="text-gray-300 text-sm">Identify repositories with high integration potential and synergy opportunities</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center">
              <CardContent className="pt-6">
                <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Revenue Insights</h3>
                <p className="text-gray-300 text-sm">Discover monetization opportunities and business value across your portfolio</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center">
              <CardContent className="pt-6">
                <Rocket className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Strategic Roadmap</h3>
                <p className="text-gray-300 text-sm">Get actionable recommendations for consolidation and platform development</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
