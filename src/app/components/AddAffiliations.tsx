import { useState } from 'react';
import { KDInputField } from '@kriyadocs/k-storybook';
import { KButton } from '@kriyadocs/k-storybook';
import { Dismiss24Filled } from '@fluentui/react-icons';
import { KDChipPane } from '@kriyadocs/k-storybook';

const AffiliationDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [institutionName, setInstitutionName] = useState('');
  const [institutionId, setInstitutionId] = useState('');
  const [department, setDepartment] = useState('');
  const [faculty, setFaculty] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [fax, setFax] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Affiliation details</h2>
          <KButton
            buttonType="iconButton"
            color="surface"
            icon={<Dismiss24Filled />}
            onClick={() => {}}
          />
        </div>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Institution name <span className="text-red-500">*</span></label>
            <KDInputField
              onChange={handleSearchChange}
              value={searchTerm}
              placeholder="Search by institution name"
              variant="outlined"
            />
          </div>
          <div>
            <label className="block mb-1">Institution ID (ROR)</label>
            <KDInputField
              onChange={(e) => setInstitutionId(e.target.value)}
              value={institutionId}
              variant="outlined"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Department</label>
              <KDInputField
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
                variant="outlined"
              />
            </div>
            <div>
              <label className="block mb-1">Faculty</label>
              <KDInputField
                onChange={(e) => setFaculty(e.target.value)}
                value={faculty}
                variant="outlined"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Address line 1</label>
              <KDInputField
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                variant="outlined"
              />
            </div>
            <div>
              <label className="block mb-1">Address line 2</label>
              <KDInputField
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                variant="outlined"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="mr-4">
              <label className="block mb-1">City <span className="text-red-500">*</span></label>
              <KDInputField
                onChange={(e) => setCity(e.target.value)}
                value={city}
                variant="outlined"
              />
            </div>
            <div className="mx-4">
              <label className="block mb-1">Province / State</label>
              <KDInputField
                onChange={(e) => setState(e.target.value)}
                value={state}
                variant="outlined"
              />
            </div>
            <div className="ml-4">
              <label className="block mb-1">Postal code</label>
              <KDInputField
                onChange={(e) => setPostalCode(e.target.value)}
                value={postalCode}
                variant="outlined"
              />
            </div>
          </div>
          <div>
            <label className="block mb-1">Country <span className="text-red-500">*</span></label>
            <KDInputField
              onChange={(e) => setCountry(e.target.value)}
              value={country}
              variant="outlined"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block mb-1">Phone no</label>
              <KDInputField
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                variant="outlined"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Fax no</label>
              <KDInputField
                onChange={(e) => setFax(e.target.value)}
                value={fax}
                variant="outlined"
              />
            </div>
          </div>
        </div>
        
          <div className="mb-2">Add this affiliation for the following authors</div>
          <div className="mt-4 border border-gray-300 rounded p-2">
          <div className="flex flex-wrap gap-2">
          
          <KDChipPane
  fontType="bold"
  items={[
    
    {
      label: 'Author 3',
      onClearIconClick: function La(){},
      onClick: function La(){},
      status: 'new'
    },
    {
      label: 'Author 4',
      onClearIconClick: function La(){},
      onClick: function La(){},
      status: 'new'
    },
    
  ]}
  rounded
  selected
  size="extraSmall"
/>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <KButton buttonType="filledButton" color="primary" label="Save" />
        </div>
      </div>
    </div>
  );
};

export default AffiliationDetails;
