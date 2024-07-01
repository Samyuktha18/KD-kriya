import { useState } from 'react';
import { KDCheckbox } from '@kriyadocs/k-storybook';
import { KButton } from '@kriyadocs/k-storybook';
import { Dismiss24Filled } from '@fluentui/react-icons';

const AddAffiliations = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const authors = [
    'Author 1',
    'Author 2',
    'Author 3',
    'Author 4',
    'Author 5',
    'Author 6',
    'Author 7',
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Add affiliations for authors</h2>
          <KButton
            buttonType="iconButton"
            color="surface"
            icon={<Dismiss24Filled />}
            onClick={() => {}}
          />
        </div>
        <div className="border rounded-md p-4">
          <div className="flex items-center mb-4">
            <div className="relative flex-grow">
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by author name"
                className="w-full p-2 border rounded-md pl-10"
              />
              <svg
                className="absolute left-2 top-2 h-6 w-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 4a6 6 0 100 12 6 6 0 000-12zm0 0v12m0-6h12"
                ></path>
              </svg>
            </div>
          </div>
          <div className="h-40 overflow-y-auto">
            {authors
              .filter((author) =>
                author.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((author) => (
                <div key={author} className="flex items-center mb-2">
                  <KDCheckbox
                    label={author}
                    labelType="normal"
                    onClick={() => {}}
                    size="small"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <KButton buttonType="filledButton" color="primary" label="Save" />
        </div>
      </div>
    </div>
  );
};

export default AddAffiliations;
