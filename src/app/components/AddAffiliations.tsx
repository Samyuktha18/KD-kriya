import { useState } from 'react';
import { KDInputField } from '@kriyadocs/k-storybook';
import { KButton } from '@kriyadocs/k-storybook';
import { Dismiss24Filled } from '@fluentui/react-icons';
import emailjs from 'emailjs-com';
import { KDRadio } from '@kriyadocs/k-storybook';

const CorrespondenceDetails = () => {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [fax, setFax] = useState('');
  const [radioValue, setRadioValue] = useState('addAddress');
  const [searchTerm, setSearchTerm] = useState('');
  const [institutionId, setInstitutionId] = useState('');
  const [department, setDepartment] = useState('');
  const [faculty, setFaculty] = useState('');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
      country,
      phone,
      fax,
      searchTerm,
      institutionId,
      department,
      faculty,
      radioValue,
    };

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_udt7511",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_m4aww4n",
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "wQmVlhdfUfQuF3oMC"
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your message has been sent!');
    }).catch((err) => {
      console.error('FAILED...', err);
      alert('Failed to send message, please try again later.');
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">Correspondence details</h2>
            <KButton
              buttonType="iconButton"
              color="surface"
              icon={<Dismiss24Filled />}
              onClick={() => {}}
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <KDRadio
                label="Add address"
                labelType="normal"
                onChange={handleRadioChange}
                value="addAddress"
                size="small"
                checked={radioValue === 'addAddress'}
              />
              <KDRadio
                label="Use existing affiliation"
                labelType="normal"
                onChange={handleRadioChange}
                value="useExistingAffiliation"
                size="small"
                checked={radioValue === 'useExistingAffiliation'}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-1">Address line 1</label>
                <KDInputField
                  onChange={(e) => setAddressLine1(e.target.value)}
                  value={addressLine1}
                  variant="outlined"
                />
              </div>
              <div>
                <label className="block mb-1">Address line 2</label>
                <KDInputField
                  onChange={(e) => setAddressLine2(e.target.value)}
                  value={addressLine2}
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
          <div className="mt-4 flex justify-end">
            <KButton type="submit" buttonType="filledButton" color="primary" label="Save" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CorrespondenceDetails;
