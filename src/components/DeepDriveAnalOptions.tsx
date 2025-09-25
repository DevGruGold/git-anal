import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Cloud, Upload, Folder, Shield, Zap, Database } from 'lucide-react';

interface DeepDriveAnalOptionsProps {
  onGoogleDriveConnect: () => void;
  onOneDriveConnect: () => void;
  onFileUpload: () => void;
  isConnecting: boolean;
}

const DeepDriveAnalOptions = ({ 
  onGoogleDriveConnect, 
  onOneDriveConnect, 
  onFileUpload, 
  isConnecting 
}: DeepDriveAnalOptionsProps) => {
  return (
    <div className="space-y-6">
      {/* DeepDriveAnal Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full">
            <Database className="h-8 w-8 text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3">
          DeepDriveAnal
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Penetrate deep into your cloud storage to extract every byte of project intelligence. 
          We dig through folders, analyze structures, and expose hidden development patterns.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Google Drive */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:border-blue-400/30 transition-all duration-300">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-3 p-3 bg-blue-500/20 rounded-full w-fit">
              <svg className="h-6 w-6 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.28 3l5.72 9.92L18.28 3H6.28zM21 14.33L18.28 9H9.44L12.16 14.33H21zM3 14.33L8.72 21h9.84L12.28 14.33H3z"/>
              </svg>
            </div>
            <CardTitle className="text-white text-lg">Google Drive Deep Dive</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-300 text-sm">
              Penetrate your Google Drive's project directories. We'll analyze every nested folder and expose the technical DNA of your work.
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-400 text-xs">
              <Zap className="h-3 w-3" />
              <span>OAuth2 Secure Connection</span>
            </div>
            <Button 
              onClick={onGoogleDriveConnect}
              disabled={isConnecting}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium border-0 disabled:opacity-50"
            >
              {isConnecting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Connecting...
                </>
              ) : (
                <>
                  <Cloud className="h-4 w-4 mr-2" />
                  Connect Google Drive
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Microsoft OneDrive */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:border-blue-500/30 transition-all duration-300">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-3 p-3 bg-blue-600/20 rounded-full w-fit">
              <svg className="h-6 w-6 text-blue-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.5 8.5c-1.42-3.34-4.77-5.67-8.5-5.67-3.16 0-5.94 1.54-7.65 3.91C1.85 7.19 0 9.45 0 12.13c0 3.04 2.46 5.5 5.5 5.5h13c2.48 0 4.5-2.02 4.5-4.5 0-2.13-1.48-3.91-3.5-4.37z"/>
              </svg>
            </div>
            <CardTitle className="text-white text-lg">OneDrive Deep Scan</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-300 text-sm">
              Dive deep into your Microsoft OneDrive. Extract project insights from every SharePoint sync and collaborative workspace.
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-300 text-xs">
              <Zap className="h-3 w-3" />
              <span>Microsoft Graph API</span>
            </div>
            <Button 
              onClick={onOneDriveConnect}
              disabled={isConnecting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium border-0 disabled:opacity-50"
            >
              {isConnecting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Connecting...
                </>
              ) : (
                <>
                  <Cloud className="h-4 w-4 mr-2" />
                  Connect OneDrive
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Direct Upload */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:border-purple-400/30 transition-all duration-300">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto mb-3 p-3 bg-purple-500/20 rounded-full w-fit">
              <Upload className="h-6 w-6 text-purple-400" />
            </div>
            <CardTitle className="text-white text-lg">Raw Folder Upload</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-300 text-sm">
              Upload project folders directly from your machine. We'll perform deep structural analysis on your local dev environment.
            </p>
            <div className="flex items-center justify-center space-x-2 text-purple-400 text-xs">
              <Zap className="h-3 w-3" />
              <span>Client-side Processing</span>
            </div>
            <Button 
              onClick={onFileUpload}
              disabled={isConnecting}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-medium border-0 disabled:opacity-50"
            >
              {isConnecting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Folder className="h-4 w-4 mr-2" />
                  Upload Folders
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Security Notice */}
      <Alert className="bg-green-500/10 border-green-500/20 text-green-200 max-w-4xl mx-auto">
        <Shield className="h-4 w-4" />
        <AlertDescription>
          🔒 <strong>DeepDriveAnal Privacy:</strong> All analysis happens in your browser's secure environment. 
          We penetrate your data locally - no files leave your machine, no credentials stored on our servers. 
          Maximum depth, maximum privacy.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default DeepDriveAnalOptions;