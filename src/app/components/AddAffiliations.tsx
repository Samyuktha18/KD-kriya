import React, { useState } from 'react';
import { KDInputField, KDCheckbox, KDRadio, KButton, KDChipPane } from '@kriyadocs/k-storybook';
import { Dismiss24Filled, ChevronDown20Filled } from '@fluentui/react-icons';

const MetadataForm = () => {
  const [formData, setFormData] = useState({
    orcid: '',
    email: '',
    prefix: '',
    givenName: '',
    middleName: '',
    surname: '',
    suffix: '',
    affiliation: '',
    submittingAuthor: false,
    correspondingAuthor: true,
    deceased: false,
    address: '',
    member: '',
    degree: [],
    roles: [],
    coi: '',
    coiDetails: '',
    productContribution: '',
    financialStake: '',
    authorType: 'individual',
  });

  const handleChange = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [field]: value });
  };

  const handleDegreeChange = (degree) => {
    const newDegrees = formData.degree.includes(degree)
      ? formData.degree.filter(d => d !== degree)
      : [...formData.degree, degree];
    setFormData({ ...formData, degree: newDegrees });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-screen-xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Add metadata</h2>
          <KButton
            buttonType="iconButton"
            color="surface"
            icon={<Dismiss24Filled />}
            onClick={() => {}}
          />
        </div>
        <div className="overflow-y-auto" style={{ maxHeight: '70vh' }}>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <KDRadio
                label="Individual author"
                labelType="normal"
                onChange={function La(){}}
                size="small"
                name="authorType"
                value="individual"
                checked={formData.authorType === 'individual'}
              />
              <KDRadio
                label="Group author"
                labelType="normal"
                onChange={() => {}}
                size="small"
                name="authorType"
                value="group"
                checked={formData.authorType === 'group'}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">ORCID <span className="text-red-500">*</span></label>
                <KDInputField
                  onChange={handleChange('orcid')}
                  value={formData.orcid}
                  variant="outlined"
                />
              </div>
              <div>
                <label className="block mb-1">Institutional email <span className="text-red-500">*</span></label>
                <KDInputField
                  onChange={handleChange('email')}
                  value={formData.email}
                  variant="outlined"
                />
              </div>
            </div>
            
              <div className="flex space-x-4">
                <div>
                  <label className="block mb-1">Prefix</label>
                  <KDInputField
                    inputType="select"
                    onChange={handleChange('prefix')}
                    value={formData.prefix}
                  >
                    <option value="Dr.">Dr.</option>
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Ms.">Ms.</option>
                  </KDInputField>
                </div>
                <div>
                  <label className="block mb-1">Given name <span className="text-red-500">*</span></label>
                  <KDInputField
                    onChange={handleChange('givenName')}
                    value={formData.givenName}
                    variant="outlined"
                  />
                </div>
                <div>
                  <label className="block mb-1">Middle name</label>
                  <KDInputField
                    onChange={handleChange('middleName')}
                    value={formData.middleName}
                    variant="outlined"
                  />
                </div>
                <div>
                  <label className="block mb-1">Surname <span className="text-red-500">*</span></label>
                  <KDInputField
                    onChange={handleChange('surname')}
                    value={formData.surname}
                    variant="outlined"
                  />
                </div>
                <div>
                  <label className="block mb-1">Suffix</label>
                  <KDInputField
                    inputType="select"
                    onChange={handleChange('prefix')}
                    value={formData.suffix}
                  >
                    <option value="Dr.">jr.</option>
                    <option value="Mr.">sr.</option>
                    
                  </KDInputField>
                  
                  
                </div>
              </div>
            
            <div>
              <label className="block mb-1">Affiliation <span className="text-red-500">*</span></label>
              <KDInputField
                onChange={handleChange('affiliation')}
                value={formData.affiliation}
                variant="outlined"
              />
            </div>
            <div className="flex items-center space-x-4">
              <KDCheckbox
                label="Submitting author"
                labelType="normal"
                checked={formData.submittingAuthor}
                onClick={handleChange('submittingAuthor')}
                size="small"
              />
              <KDCheckbox
                label="Corresponding author"
                labelType="normal"
                checked={formData.correspondingAuthor}
                onClick={handleChange('correspondingAuthor')}
                size="small"
              />
              <KDCheckbox
                label="Deceased"
                labelType="normal"
                checked={formData.deceased}
                onClick={handleChange('deceased')}
                size="small"
              />
            </div>
            <div>
              <label className="block mb-1">Correspondence address <span className="text-red-500">*</span></label>
              <KDInputField
                onChange={handleChange('address')}
                value={formData.address}
                variant="outlined"
              />
            </div>
            <div>
              <label className="block mb-1">Institutional member</label>
              <KDInputField
                onChange={handleChange('member')}
                value={formData.member}
                rightComponent={<ChevronDown20Filled />}
                variant="outlined"
              />
            </div>
            <div>
              <label className="block mb-1">Degree</label>
              <div className="border p-2 rounded">
              <KDChipPane
                fontType="bold"
                items={[
                  {
                    label: 'MD',
                    onClearIconClick: function La(){},
                    onClick: function La(){},
                    status: 'new'
                  },
                  {
                    label: 'PhD',
                    onClearIconClick: function La(){},
                    onClick: function La(){},
                    status: 'new'
                  }
                ]}
                rounded
                size="small"
              />
              </div>
            </div>
            <div>
              <label className="block mb-1">Contributor roles  <span className="text-red-500">*</span></label>
              {/* Add role selection components here */}
            </div>
            
              <label className="block mb-1 ">Conflicts of Interest<span className="text-red-500">*</span></label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block mb-1">Please indicate any conflicts of interest (COI) <span className="text-red-500">*</span></label>
                  <div className="flex flex-col space-y-2">
                    <KDRadio
                      label="None declared"
                      labelType="normal"
                      onChange={handleChange('coi')}
                      size="small"
                      name="coi"
                      value="none"
                      checked={formData.coi === 'none'}
                    />
                    <KDRadio
                      label="Declare"
                      labelType="normal"
                      onChange={handleChange('coi')}
                      size="small"
                      name="coi"
                      value="declare"
                      checked={formData.coi === 'declare'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1">Did this author contribute to the development of the product/service described in this paper?</label>
                  <div className="flex flex-col space-y-2">
                    <KDRadio
                      label="Yes (Please elaborate in the COI details section)"
                      labelType="normal"
                      onChange={handleChange('productContribution')}
                      size="small"
                      name="productContribution"
                      value="yes"
                      checked={formData.productContribution === 'yes'}
                    />
                    <KDRadio
                      label="No"
                      labelType="normal"
                      onChange={handleChange('productContribution')}
                      size="small"
                      name="productContribution"
                      value="no"
                      checked={formData.productContribution === 'no'}
                    />
                    <KDRadio
                      label="Not applicable"
                      labelType="normal"
                      onChange={handleChange('productContribution')}
                      size="small"
                      name="productContribution"
                      value="not_applicable"
                      checked={formData.productContribution === 'not_applicable'}
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1">Does this author own a financial stake in the product/service described in this paper?</label>
                  <div className="flex flex-col space-y-2">
                    <KDRadio
                      label="Yes (Please elaborate in the COI details section)"
                      labelType="normal"
                      onChange={handleChange('financialStake')}
                      size="small"
                      name="financialStake"
                      value="yes"
                      checked={formData.financialStake === 'yes'}
                    />
                    <KDRadio
                      label="No"
                      labelType="normal"
                      onChange={handleChange('financialStake')}
                      size="small"
                      name="financialStake"
                      value="no"
                      checked={formData.financialStake === 'no'}
                    />
                    <KDRadio
                      label="Not applicable"
                      labelType="normal"
                      onChange={handleChange('financialStake')}
                      size="small"
                      name="financialStake"
                      value="not_applicable"
                      checked={formData.financialStake === 'not_applicable'}
                    />
                  </div>
                </div>
              </div>
              </div>
            <div>
              <label className="block mb-1">Please state your COI details here...</label>
              <KDInputField
                onChange={handleChange('coiDetails')}
                value={formData.coiDetails}
                variant="outlined"
                multiline
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

export default MetadataForm;
