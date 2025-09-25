
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Github, BarChart3, Zap, Target, Rocket, TrendingUp, ArrowLeft, Cloud, Upload, Folder, Shield } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AnalysisResults from '@/components/AnalysisResults';
import LoadingAnimation from '@/components/LoadingAnimation';
import TopDevelopers from '@/components/TopDevelopers';
import DeepDriveAnalOptions from '@/components/DeepDriveAnalOptions';

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [showAnalysisOptions, setShowAnalysisOptions] = useState(false);
  const [progress, setProgress] = useState(0);
  const [githubUsername, setGithubUsername] = useState('');
  const [githubToken, setGithubToken] = useState('');
  const { toast } = useToast();

  const handleStartAnalysis = () => {
    setShowAnalysisOptions(true);
  };

  const handleGitHubAnalysis = async () => {
    if (!githubUsername.trim()) {
      toast({
        title: "Username Required",
        description: "Please enter your GitHub username",
        variant: "destructive"
      });
      return;
    }

    if (!githubToken.trim()) {
      toast({
        title: "Token Required", 
        description: "Please enter your GitHub personal access token",
        variant: "destructive"
      });
      return;
    }

    setIsAnalyzing(true);
    setProgress(0);

    toast({
      title: "Connecting to GitHub",
      description: "Fetching your repositories...",
    });

    // Simulate GitHub analysis process
    const progressSteps = [
      { step: 15, message: "Connected to GitHub API" },
      { step: 30, message: "Fetching repository list..." },
      { step: 50, message: "Analyzing repository structures..." },
      { step: 70, message: "Processing tech stacks..." },
      { step: 85, message: "Calculating integration scores..." },
      { step: 100, message: "Generating insights..." }
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

      // Mock GitHub analysis data
      const mockData = {
        totalRepos: 24,
        categories: {
          'web_application': ['portfolio-site', 'e-commerce-app', 'blog-cms'],
          'api_service': ['auth-microservice', 'payment-gateway'],
          'mobile_app': ['react-native-app', 'flutter-fitness'],
          'data_analytics': ['dashboard-analytics', 'ml-classifier'],
          'automation_tool': ['ci-cd-pipeline', 'backup-scripts']
        },
        techStack: {
          'JavaScript': 12,
          'Python': 8,
          'React': 10,
          'Node.js': 7,
          'TypeScript': 9
        },
        highIntegration: [
          { name: 'portfolio-site', score: 9, purpose: 'web_application', stars: 45 },
          { name: 'auth-microservice', score: 8, purpose: 'api_service', stars: 23 },
          { name: 'dashboard-analytics', score: 7, purpose: 'data_analytics', stars: 31 }
        ],
        businessImpact: {
          directRevenue: '$125K-450K annually',
          integrationOpportunities: 6,
          consolidationTargets: 9
        }
      };

      setAnalysisData(mockData);
      toast({
        title: "Analysis Complete!",
        description: `Successfully analyzed ${mockData.totalRepos} repositories from @${githubUsername}`,
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "Unable to complete GitHub analysis. Please check your credentials.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleStorageConnect = async (storageType: string) => {
    setIsAnalyzing(true);
    setProgress(0);

    toast({
      title: `Connecting to ${storageType}`,
      description: "Establishing secure connection...",
    });

    const progressSteps = [
      { step: 15, message: `Connected to ${storageType}` },
      { step: 30, message: "Scanning project directories..." },
      { step: 50, message: "Analyzing file structures..." },
      { step: 70, message: "Determining tech stacks..." },
      { step: 85, message: "Calculating integration scores..." },
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

      const mockData = {
        totalRepos: 18,
        categories: {
          'web_application': ['e-commerce-site', 'portfolio-website', 'blog-platform'],
          'api_service': ['user-auth-api', 'payment-service'],
          'mobile_app': ['fitness-tracker', 'expense-manager'],
          'data_analytics': ['sales-dashboard', 'user-behavior-tracker'],
          'automation_tool': ['build-scripts', 'deployment-automation']
        },
        techStack: {
          'React': 8,
          'Node.js': 6,
          'Python': 5,
          'TypeScript': 7,
          'JavaScript': 10
        },
        highIntegration: [
          { name: 'e-commerce-site', score: 9, purpose: 'web_application', stars: 0 },
          { name: 'user-auth-api', score: 8, purpose: 'api_service', stars: 0 },
          { name: 'sales-dashboard', score: 7, purpose: 'data_analytics', stars: 0 }
        ],
        businessImpact: {
          directRevenue: '$85K-320K annually',
          integrationOpportunities: 4,
          consolidationTargets: 7
        }
      };

      setAnalysisData(mockData);
      toast({
        title: "Analysis Complete!",
        description: `Successfully analyzed ${mockData.totalRepos} projects from your ${storageType} folder`,
      });
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: `Unable to connect to ${storageType}. Please try again.`,
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleGoogleDriveConnect = () => handleStorageConnect('Google Drive');
  const handleOneDriveConnect = () => handleStorageConnect('Microsoft OneDrive');
  const handleFileUpload = () => {
    toast({
      title: "DeepDriveAnal Upload",
      description: "Raw folder upload feature coming soon! 🔥",
    });
  };

  const handleBackToOptions = () => {
    setShowAnalysisOptions(false);
    setAnalysisData(null);
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
          <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-4">
            GitAnal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">
            🔍 <strong>Penetrating deep into your repositories</strong> to expose hidden business potential
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            From bleeding-edge tech stacks to strategic integration insights, GitAnal analyzes it all with surgical precision
          </p>

          {/* Top Developers Section */}
          {!showAnalysisOptions && !analysisData && !isAnalyzing && (
            <TopDevelopers />
          )}

          {/* Analysis Options */}
          {!showAnalysisOptions && !analysisData && !isAnalyzing && (
            <div className="max-w-6xl mx-auto space-y-8">
              <Alert className="bg-purple-500/10 border-purple-500/20 text-purple-200">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  🔒 <strong>GitAnal Privacy Promise:</strong> All deep analysis happens locally in your browser. 
                  No repo secrets leave your machine, no tokens stored on our servers. Maximum penetration, maximum privacy.
                </AlertDescription>
              </Alert>

              {/* GitHub Section */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">🔍 Repository Deep Dive</h3>
                  <p className="text-gray-300">Penetrate your GitHub profile to extract maximum intelligence</p>
                </div>
                
                <Card className="bg-white/10 backdrop-blur-lg border-white/20 max-w-md mx-auto">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-3 p-3 bg-purple-500/20 rounded-full w-fit">
                      <Github className="h-6 w-6 text-purple-300" />
                    </div>
                    <CardTitle className="text-white text-xl">GitAnal Deep Scan</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-gray-200 text-sm">GitHub Username</Label>
                      <Input
                        id="username"
                        value={githubUsername}
                        onChange={(e) => setGithubUsername(e.target.value)}
                        placeholder="your-dev-handle"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="token" className="text-gray-200 text-sm">Personal Access Token</Label>
                      <Input
                        id="token"
                        type="password"
                        value={githubToken}
                        onChange={(e) => setGithubToken(e.target.value)}
                        placeholder="ghp_..."
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <Button 
                      onClick={handleGitHubAnalysis}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium border-0"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Start Deep Analysis 🔥
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* DeepDriveAnal Section */}
              <DeepDriveAnalOptions 
                onGoogleDriveConnect={handleGoogleDriveConnect}
                onOneDriveConnect={handleOneDriveConnect}
                onFileUpload={handleFileUpload}
                isConnecting={isAnalyzing}
              />
            </div>
          )}
        </div>

        {/* Back Button */}
        {(showAnalysisOptions || analysisData) && !isAnalyzing && (
          <div className="mb-6">
            <Button 
              variant="outline" 
              onClick={handleBackToOptions}
              className="border-white/20 text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Options
            </Button>
          </div>
        )}

        {/* Loading Animation */}
        {isAnalyzing && <LoadingAnimation />}

        {/* Analysis Results */}
        {analysisData && !isAnalyzing && (
          <AnalysisResults data={analysisData} username={githubUsername || "Your Portfolio"} />
        )}

        {/* Features Section - Only show when not analyzing */}
        {!showAnalysisOptions && !analysisData && !isAnalyzing && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center hover:border-purple-400/30 transition-all duration-300">
              <CardContent className="pt-6">
                <Target className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Purpose Penetration</h3>
                <p className="text-gray-300 text-sm">Drill deep into project DNA to expose true business purposes and hidden functionality patterns</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center hover:border-yellow-400/30 transition-all duration-300">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Integration Intel</h3>
                <p className="text-gray-300 text-sm">Expose high-synergy opportunities and architectural integration points across your dev ecosystem</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center hover:border-green-400/30 transition-all duration-300">
              <CardContent className="pt-6">
                <TrendingUp className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Revenue Extraction</h3>
                <p className="text-gray-300 text-sm">Uncover hidden monetization vectors and extract maximum business value from your code assets</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center hover:border-pink-400/30 transition-all duration-300">
              <CardContent className="pt-6">
                <Rocket className="h-8 w-8 text-pink-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Strategic Domination</h3>
                <p className="text-gray-300 text-sm">Deploy surgical recommendations for portfolio consolidation and platform supremacy</p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
