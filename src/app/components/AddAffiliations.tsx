import { useState } from 'react';
import { KDFileUpload } from '@kriyadocs/k-storybook';
import { KButton } from '@kriyadocs/k-storybook';
import { Dismiss24Filled } from '@fluentui/react-icons';

const RenameImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (file) => {
    setSelectedFile(file);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-screen-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Rename your image</h2>
          <KButton
            buttonType="iconButton"
            color="surface"
            icon={<Dismiss24Filled />}
            onClick={() => {}}
          />
        </div>
        <div className="mb-4">
          <p className="mb-2">{selectedFile ? selectedFile.name : 'TOC_image.jpg'}</p>
          <div className="border-dashed border-2 border-gray-300 p-4 rounded-md">
            <KDFileUpload
              buttonText="Browse this computer"
              fileTypes={['.png', '.jpeg', '.jpg']}
              label="Drag and drop your manuscript here or click to browse"
              maxSize={25} // Max size in MB
              onFileClick={handleFileChange}
            />
          </div>
        </div>
        <p className="text-gray-500 text-sm">
          Accepted file types: png, jpg, gif, tiff (Max 25 MB)
        </p>
      </div>
    </div>
  );
};

export default RenameImage;
