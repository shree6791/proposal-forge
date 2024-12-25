import { useState } from 'react';
import { Upload, X, Loader2 } from 'lucide-react';

interface FileUploadProps {
  onObjectivesExtracted: (objectives: string[]) => void;
  onError: (error: string) => void;
}

export function FileUpload({ onObjectivesExtracted, onError }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const readFileContent = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = (e) => reject(e);
      reader.readAsText(file);
    });
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validTypes = [
      'text/plain',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!validTypes.includes(file.type)) {
      onError('Please upload a .txt or .doc/.docx file');
      return;
    }

    setFile(file);
    setIsProcessing(true);

    try {
      const content = await readFileContent(file);
      
      const response = await fetch('/api/process-objectives', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      });

      if (!response.ok) throw new Error('Failed to process file');

      const { objectives } = await response.json();
      onObjectivesExtracted(objectives);
    } catch (err) {
      onError('Failed to process file. Please try again.');
      console.error('File processing error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="relative">
      <label 
        htmlFor="file-upload"
        className={`
          flex flex-col items-center justify-center w-full h-32
          border-2 border-dashed rounded-lg cursor-pointer
          transition-colors duration-200
          ${isProcessing 
            ? 'bg-gray-50 border-gray-300' 
            : 'hover:bg-blue-50 hover:border-blue-300 border-gray-300'}
        `}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          {isProcessing ? (
            <Loader2 className="w-8 h-8 mb-2 text-blue-500 animate-spin" />
          ) : (
            <Upload className="w-8 h-8 mb-2 text-blue-500" />
          )}
          <p className="mb-2 text-sm text-gray-500">
            {isProcessing ? (
              <span>Analyzing document...</span>
            ) : (
              <span>
                <span className="font-semibold">Click to upload</span> or drag and drop
              </span>
            )}
          </p>
          <p className="text-xs text-gray-500">.txt, .doc, or .docx</p>
        </div>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          accept=".txt,.doc,.docx"
          onChange={handleFileUpload}
          disabled={isProcessing}
        />
      </label>

      {file && (
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm text-gray-500">{file.name}</span>
          <button
            onClick={removeFile}
            className="text-sm text-red-600 hover:text-red-700 flex items-center gap-1"
          >
            <X className="w-4 h-4" /> Remove
          </button>
        </div>
      )}
    </div>
  );
}