
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, Folder, Cloud, Shield, Zap } from 'lucide-react';

interface CloudStorageOptionsProps {
  onGoogleDriveConnect: () => void;
  onDropboxConnect: () => void;
  onFileUpload: () => void;
  isConnecting: boolean;
}

const CloudStorageOptions = ({ 
  onGoogleDriveConnect, 
  onDropboxConnect, 
  onFileUpload,
  isConnecting 
}: CloudStorageOptionsProps) => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Choose Your Analysis Method</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Connect your cloud storage or upload project files directly for one-time analysis. 
          No credentials stored, completely secure.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Google Drive */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:border-white/40 transition-colors">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-blue-500/20 rounded-full w-fit">
              <svg className="h-8 w-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.28 3l5.72 9.92L18.28 3H6.28zM21 14.33L18.28 9H9.44L12.16 14.33H21zM3 14.33L8.72 21h9.84L12.28 14.33H3z"/>
              </svg>
            </div>
            <CardTitle className="text-white">Google Drive</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-300 text-sm">
              Connect to your Google Drive folder containing project directories
            </p>
            <Button 
              onClick={onGoogleDriveConnect}
              disabled={isConnecting}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white"
            >
              {isConnecting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Connecting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Cloud className="h-4 w-4" />
                  Connect Google Drive
                </div>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Dropbox */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:border-white/40 transition-colors">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-blue-600/20 rounded-full w-fit">
              <svg className="h-8 w-8 text-blue-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21l-8-6.5 4-3.5-4-3.5L12 1l8 6.5-4 3.5 4 3.5L12 21z"/>
              </svg>
            </div>
            <CardTitle className="text-white">Dropbox</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-300 text-sm">
              Access your Dropbox folder with project files and directories
            </p>
            <Button 
              onClick={onDropboxConnect}
              disabled={isConnecting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isConnecting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                  Connecting...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Cloud className="h-4 w-4" />
                  Connect Dropbox
                </div>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Direct Upload */}
        <Card className="bg-white/10 backdrop-blur-lg border-white/20 hover:border-white/40 transition-colors">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-4 bg-purple-500/20 rounded-full w-fit">
              <Upload className="h-8 w-8 text-purple-400" />
            </div>
            <CardTitle className="text-white">Direct Upload</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-300 text-sm">
              Upload project folders directly from your computer
            </p>
            <Button 
              onClick={onFileUpload}
              disabled={isConnecting}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white"
            >
              <div className="flex items-center gap-2">
                <Folder className="h-4 w-4" />
                Upload Folders
              </div>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Security Notice */}
      <Alert className="bg-green-500/10 border-green-500/20 text-green-200 max-w-2xl mx-auto">
        <Shield className="h-4 w-4" />
        <AlertDescription>
          <strong>100% Secure:</strong> All analysis happens in your browser. No files are uploaded to our servers, 
          and no credentials are stored. Your data stays private.
        </AlertDescription>
      </Alert>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="text-center space-y-3">
          <div className="mx-auto p-3 bg-yellow-500/20 rounded-full w-fit">
            <Zap className="h-6 w-6 text-yellow-400" />
          </div>
          <h3 className="text-white font-semibold">One-Time Analysis</h3>
          <p className="text-gray-300 text-sm">No storage, no tracking. Analyze and disconnect.</p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="mx-auto p-3 bg-blue-500/20 rounded-full w-fit">
            <Folder className="h-6 w-6 text-blue-400" />
          </div>
          <h3 className="text-white font-semibold">Full Directory Scan</h3>
          <p className="text-gray-300 text-sm">Analyzes entire project structures and dependencies.</p>
        </div>
        
        <div className="text-center space-y-3">
          <div className="mx-auto p-3 bg-green-500/20 rounded-full w-fit">
            <Shield className="h-6 w-6 text-green-400" />
          </div>
          <h3 className="text-white font-semibold">Privacy First</h3>
          <p className="text-gray-300 text-sm">Client-side processing keeps your code secure.</p>
        </div>
      </div>
    </div>
  );
};

export default CloudStorageOptions;
