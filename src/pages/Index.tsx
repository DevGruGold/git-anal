
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Github, BarChart3, Zap, Target, Rocket, TrendingUp, ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import AnalysisResults from '@/components/AnalysisResults';
import LoadingAnimation from '@/components/LoadingAnimation';
import CloudStorageOptions from '@/components/CloudStorageOptions';

const Index = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisData, setAnalysisData] = useState(null);
  const [showStorageOptions, setShowStorageOptions] = useState(false);
  const [progress, setProgress] = useState(0);
  const { toast } = useToast();

  const handleStartAnalysis = () => {
    setShowStorageOptions(true);
  };

  const handleStorageConnect = async (storageType: string) => {
    setIsAnalyzing(true);
    setProgress(0);

    // Show connection message
    toast({
      title: `Connecting to ${storageType}`,
      description: "Establishing secure connection...",
    });

    // Simulate the analysis process with progress updates
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

      // Mock analysis data for portfolio/directory analysis
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
    setShowStorageOptions(false);
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
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Analyze your project directories from cloud storage for strategic business insights. 
            Discover integration opportunities and revenue potential across your entire portfolio.
          </p>
        </div>

        {/* Back Button */}
        {(showStorageOptions || analysisData) && !isAnalyzing && (
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

        {/* Main Content */}
        {!showStorageOptions && !analysisData && !isAnalyzing && (
          <>
            {/* Get Started Card */}
            <Card className="max-w-2xl mx-auto mb-8 bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white text-center flex items-center justify-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Start Your Portfolio Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert className="bg-blue-500/10 border-blue-500/20 text-blue-200">
                  <AlertDescription>
                    🔒 <strong>Privacy First:</strong> All analysis happens in your browser. 
                    No files are uploaded to our servers, and no data is stored.
                  </AlertDescription>
                </Alert>

                <Button 
                  onClick={handleStartAnalysis}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3"
                >
                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4" />
                    Choose Analysis Method
                  </div>
                </Button>
              </CardContent>
            </Card>

            {/* Features Section */}
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
          </>
        )}

        {/* Cloud Storage Options */}
        {showStorageOptions && !analysisData && !isAnalyzing && (
          <CloudStorageOptions
            onGoogleDriveConnect={handleGoogleDriveConnect}
            onDropboxConnect={handleDropboxConnect}
            onFileUpload={handleFileUpload}
            isConnecting={isAnalyzing}
          />
        )}

        {/* Loading Animation */}
        {isAnalyzing && <LoadingAnimation />}

        {/* Analysis Results */}
        {analysisData && !isAnalyzing && (
          <AnalysisResults data={analysisData} username="Your Portfolio" />
        )}
      </div>
    </div>
  );
};

export default Index;
