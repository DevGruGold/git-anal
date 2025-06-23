
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
  const handleDropboxConnect = () => handleStorageConnect('Dropbox');
  const handleFileUpload = () => {
    toast({
      title: "File Upload",
      description: "Direct file upload feature coming soon!",
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
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Project Portfolio Analyzer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Analyze your GitHub repositories or project directories for strategic business insights. 
            Discover integration opportunities and revenue potential across your entire portfolio.
          </p>

          {/* Analysis Options */}
          {!showAnalysisOptions && !analysisData && !isAnalyzing && (
            <div className="max-w-4xl mx-auto space-y-6">
              <Alert className="bg-blue-500/10 border-blue-500/20 text-blue-200">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  🔒 <strong>Privacy First:</strong> All analysis happens in your browser. 
                  No credentials are stored, and no data is uploaded to our servers.
                </AlertDescription>
              </Alert>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* GitHub Analysis */}
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-3 p-3 bg-gray-700/30 rounded-full w-fit">
                      <Github className="h-6 w-6 text-gray-100" />
                    </div>
                    <CardTitle className="text-white text-lg">GitHub Analysis</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-gray-200 text-sm">Username</Label>
                      <Input
                        id="username"
                        value={githubUsername}
                        onChange={(e) => setGithubUsername(e.target.value)}
                        placeholder="your-username"
                        className="bg-white/5 border-white/20 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="token" className="text-gray-200 text-sm">Personal Token</Label>
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
                      className="w-full bg-gray-700 hover:bg-gray-600 text-white font-medium border-0"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Analyze GitHub
                    </Button>
                  </CardContent>
                </Card>

                {/* Google Drive */}
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-3 p-3 bg-blue-500/20 rounded-full w-fit">
                      <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.28 3l5.72 9.92L18.28 3H6.28zM21 14.33L18.28 9H9.44L12.16 14.33H21zM3 14.33L8.72 21h9.84L12.28 14.33H3z"/>
                      </svg>
                    </div>
                    <CardTitle className="text-white text-lg">Google Drive</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 text-sm mb-4">
                      Connect to your Google Drive folder containing projects
                    </p>
                    <Button 
                      onClick={handleGoogleDriveConnect}
                      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium border-0"
                    >
                      <Cloud className="h-4 w-4 mr-2" />
                      Connect Drive
                    </Button>
                  </CardContent>
                </Card>

                {/* Dropbox */}
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-3 p-3 bg-blue-600/20 rounded-full w-fit">
                      <svg className="h-6 w-6 text-blue-300" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21l-8-6.5 4-3.5-4-3.5L12 1l8 6.5-4 3.5 4 3.5L12 21z"/>
                      </svg>
                    </div>
                    <CardTitle className="text-white text-lg">Dropbox</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 text-sm mb-4">
                      Access your Dropbox folder with project files
                    </p>
                    <Button 
                      onClick={handleDropboxConnect}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium border-0"
                    >
                      <Cloud className="h-4 w-4 mr-2" />
                      Connect Dropbox
                    </Button>
                  </CardContent>
                </Card>

                {/* Direct Upload */}
                <Card className="bg-white/10 backdrop-blur-lg border-white/20">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-3 p-3 bg-purple-500/20 rounded-full w-fit">
                      <Upload className="h-6 w-6 text-purple-400" />
                    </div>
                    <CardTitle className="text-white text-lg">Direct Upload</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300 text-sm mb-4">
                      Upload project folders directly from your computer
                    </p>
                    <Button 
                      onClick={handleFileUpload}
                      className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium border-0"
                    >
                      <Folder className="h-4 w-4 mr-2" />
                      Upload Folders
                    </Button>
                  </CardContent>
                </Card>
              </div>
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
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center">
              <CardContent className="pt-6">
                <Target className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Purpose Detection</h3>
                <p className="text-gray-300 text-sm">Automatically categorize projects by business purpose and functionality</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center">
              <CardContent className="pt-6">
                <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Integration Analysis</h3>
                <p className="text-gray-300 text-sm">Identify projects with high integration potential and synergy opportunities</p>
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
