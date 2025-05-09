import React, { useState } from "react";

const countryCodes = [
  { code: "+93", name: "Afghanistan" },
  { code: "+358", name: "Aland Islands" },
  { code: "+355", name: "Albania" },
  { code: "+213", name: "Algeria" },
  { code: "+1684", name: "American Samoa" },
  { code: "+376", name: "Andorra" },
  { code: "+244", name: "Angola" },
  { code: "+1264", name: "Anguilla" },
  { code: "+672", name: "Antarctica" },
  { code: "+1268", name: "Antigua and Barbuda" },
  { code: "+54", name: "Argentina" },
  { code: "+374", name: "Armenia" },
  { code: "+297", name: "Aruba" },
  { code: "+61", name: "Australia" },
  { code: "+43", name: "Austria" },
  { code: "+994", name: "Azerbaijan" },
  { code: "+1242", name: "Bahamas" },
  { code: "+973", name: "Bahrain" },
  { code: "+880", name: "Bangladesh" },
  { code: "+1246", name: "Barbados" },
  { code: "+375", name: "Belarus" },
  { code: "+32", name: "Belgium" },
  { code: "+501", name: "Belize" },
  { code: "+229", name: "Benin" },
  { code: "+1441", name: "Bermuda" },
  { code: "+975", name: "Bhutan" },
  { code: "+591", name: "Bolivia" },
  { code: "+599", name: "Bonaire, Sint Eustatius and Saba" },
  { code: "+387", name: "Bosnia and Herzegovina" },
  { code: "+267", name: "Botswana" },
  { code: "+55", name: "Bouvet Island" },
  { code: "+55", name: "Brazil" },
  { code: "+246", name: "British Indian Ocean Territory" },
  { code: "+673", name: "Brunei Darussalam" },
  { code: "+359", name: "Bulgaria" },
  { code: "+226", name: "Burkina Faso" },
  { code: "+257", name: "Burundi" },
  { code: "+855", name: "Cambodia" },
  { code: "+237", name: "Cameroon" },
  { code: "+1", name: "Canada" },
  { code: "+238", name: "Cape Verde" },
  { code: "+1345", name: "Cayman Islands" },
  { code: "+236", name: "Central African Republic" },
  { code: "+235", name: "Chad" },
  { code: "+56", name: "Chile" },
  { code: "+86", name: "China" },
  { code: "+61", name: "Christmas Island" },
  { code: "+672", name: "Cocos (Keeling) Islands" },
  { code: "+57", name: "Colombia" },
  { code: "+269", name: "Comoros" },
  { code: "+242", name: "Congo" },
  { code: "+242", name: "Congo, Democratic Republic of the Congo" },
  { code: "+682", name: "Cook Islands" },
  { code: "+506", name: "Costa Rica" },
  { code: "+225", name: "Cote D'Ivoire" },
  { code: "+385", name: "Croatia" },
  { code: "+53", name: "Cuba" },
  { code: "+599", name: "Curacao" },
  { code: "+357", name: "Cyprus" },
  { code: "+420", name: "Czech Republic" },
  { code: "+45", name: "Denmark" },
  { code: "+253", name: "Djibouti" },
  { code: "+1767", name: "Dominica" },
  { code: "+1809", name: "Dominican Republic" },
  { code: "+593", name: "Ecuador" },
  { code: "+20", name: "Egypt" },
  { code: "+503", name: "El Salvador" },
  { code: "+240", name: "Equatorial Guinea" },
  { code: "+291", name: "Eritrea" },
  { code: "+372", name: "Estonia" },
  { code: "+251", name: "Ethiopia" },
  { code: "+500", name: "Falkland Islands (Malvinas)" },
  { code: "+298", name: "Faroe Islands" },
  { code: "+679", name: "Fiji" },
  { code: "+358", name: "Finland" },
  { code: "+33", name: "France" },
  { code: "+594", name: "French Guiana" },
  { code: "+689", name: "French Polynesia" },
  { code: "+262", name: "French Southern Territories" },
  { code: "+241", name: "Gabon" },
  { code: "+220", name: "Gambia" },
  { code: "+995", name: "Georgia" },
  { code: "+49", name: "Germany" },
  { code: "+233", name: "Ghana" },
  { code: "+350", name: "Gibraltar" },
  { code: "+30", name: "Greece" },
  { code: "+299", name: "Greenland" },
  { code: "+1473", name: "Grenada" },
  { code: "+590", name: "Guadeloupe" },
  { code: "+1671", name: "Guam" },
  { code: "+502", name: "Guatemala" },
  { code: "+44", name: "Guernsey" },
  { code: "+224", name: "Guinea" },
  { code: "+245", name: "Guinea-Bissau" },
  { code: "+592", name: "Guyana" },
  { code: "+509", name: "Haiti" },
  { code: "+0", name: "Heard Island and McDonald Islands" },
  { code: "+39", name: "Holy See (Vatican City State)" },
  { code: "+504", name: "Honduras" },
  { code: "+852", name: "Hong Kong" },
  { code: "+36", name: "Hungary" },
  { code: "+354", name: "Iceland" },
  { code: "+91", name: "India" },
  { code: "+62", name: "Indonesia" },
  { code: "+98", name: "Iran, Islamic Republic of" },
  { code: "+964", name: "Iraq" },
  { code: "+353", name: "Ireland" },
  { code: "+44", name: "Isle of Man" },
  { code: "+972", name: "Israel" },
  { code: "+39", name: "Italy" },
  { code: "+1876", name: "Jamaica" },
  { code: "+81", name: "Japan" },
  { code: "+44", name: "Jersey" },
  { code: "+962", name: "Jordan" },
  { code: "+7", name: "Kazakhstan" },
  { code: "+254", name: "Kenya" },
  { code: "+686", name: "Kiribati" },
  { code: "+850", name: "Korea, Democratic People's Republic of" },
  { code: "+82", name: "Korea, Republic of" },
  { code: "+383", name: "Kosovo" },
  { code: "+965", name: "Kuwait" },
  { code: "+996", name: "Kyrgyzstan" },
  { code: "+856", name: "Lao People's Democratic Republic" },
  { code: "+371", name: "Latvia" },
  { code: "+961", name: "Lebanon" },
  { code: "+266", name: "Lesotho" },
  { code: "+231", name: "Liberia" },
  { code: "+218", name: "Libyan Arab Jamahiriya" },
  { code: "+423", name: "Liechtenstein" },
  { code: "+370", name: "Lithuania" },
  { code: "+352", name: "Luxembourg" },
  { code: "+853", name: "Macao" },
  { code: "+389", name: "Macedonia, the Former Yugoslav Republic of" },
  { code: "+261", name: "Madagascar" },
  { code: "+265", name: "Malawi" },
  { code: "+60", name: "Malaysia" },
  { code: "+960", name: "Maldives" },
  { code: "+223", name: "Mali" },
  { code: "+356", name: "Malta" },
  { code: "+692", name: "Marshall Islands" },
  { code: "+596", name: "Martinique" },
  { code: "+222", name: "Mauritania" },
  { code: "+230", name: "Mauritius" },
  { code: "+262", name: "Mayotte" },
  { code: "+52", name: "Mexico" },
  { code: "+691", name: "Micronesia, Federated States of" },
  { code: "+373", name: "Moldova, Republic of" },
  { code: "+377", name: "Monaco" },
  { code: "+976", name: "Mongolia" },
  { code: "+382", name: "Montenegro" },
  { code: "+1664", name: "Montserrat" },
  { code: "+212", name: "Morocco" },
  { code: "+258", name: "Mozambique" },
  { code: "+95", name: "Myanmar" },
  { code: "+264", name: "Namibia" },
  { code: "+674", name: "Nauru" },
  { code: "+977", name: "Nepal" },
  { code: "+31", name: "Netherlands" },
  { code: "+599", name: "Netherlands Antilles" },
  { code: "+687", name: "New Caledonia" },
  { code: "+64", name: "New Zealand" },
  { code: "+505", name: "Nicaragua" },
  { code: "+227", name: "Niger" },
  { code: "+234", name: "Nigeria" },
  { code: "+683", name: "Niue" },
  { code: "+672", name: "Norfolk Island" },
  { code: "+1670", name: "Northern Mariana Islands" },
  { code: "+47", name: "Norway" },
  { code: "+968", name: "Oman" },
  { code: "+92", name: "Pakistan" },
  { code: "+680", name: "Palau" },
  { code: "+970", name: "Palestinian Territory, Occupied" },
  { code: "+507", name: "Panama" },
  { code: "+675", name: "Papua New Guinea" },
  { code: "+595", name: "Paraguay" },
  { code: "+51", name: "Peru" },
  { code: "+63", name: "Philippines" },
  { code: "+64", name: "Pitcairn" },
  { code: "+48", name: "Poland" },
  { code: "+351", name: "Portugal" },
  { code: "+1787", name: "Puerto Rico" },
  { code: "+974", name: "Qatar" },
  { code: "+262", name: "Reunion" },
  { code: "+40", name: "Romania" },
  { code: "+7", name: "Russian Federation" },
  { code: "+250", name: "Rwanda" },
  { code: "+590", name: "Saint Barthelemy" },
  { code: "+290", name: "Saint Helena" },
  { code: "+1869", name: "Saint Kitts and Nevis" },
  { code: "+1758", name: "Saint Lucia" },
  { code: "+590", name: "Saint Martin" },
  { code: "+508", name: "Saint Pierre and Miquelon" },
  { code: "+1784", name: "Saint Vincent and the Grenadines" },
  { code: "+684", name: "Samoa" },
  { code: "+378", name: "San Marino" },
  { code: "+239", name: "Sao Tome and Principe" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+221", name: "Senegal" },
  { code: "+381", name: "Serbia" },
  { code: "+381", name: "Serbia and Montenegro" },
  { code: "+248", name: "Seychelles" },
  { code: "+232", name: "Sierra Leone" },
  { code: "+65", name: "Singapore" },
  { code: "+721", name: "St Martin" },
  { code: "+421", name: "Slovakia" },
  { code: "+386", name: "Slovenia" },
  { code: "+677", name: "Solomon Islands" },
  { code: "+252", name: "Somalia" },
  { code: "+27", name: "South Africa" },
  { code: "+500", name: "South Georgia and the South Sandwich Islands" },
  { code: "+211", name: "South Sudan" },
  { code: "+34", name: "Spain" },
  { code: "+94", name: "Sri Lanka" },
  { code: "+249", name: "Sudan" },
  { code: "+597", name: "Suriname" },
  { code: "+47", name: "Svalbard and Jan Mayen" },
  { code: "+268", name: "Swaziland" },
  { code: "+46", name: "Sweden" },
  { code: "+41", name: "Switzerland" },
  { code: "+963", name: "Syrian Arab Republic" },
  { code: "+886", name: "Taiwan, Province of China" },
  { code: "+992", name: "Tajikistan" },
  { code: "+255", name: "Tanzania, United Republic of" },
  { code: "+66", name: "Thailand" },
  { code: "+670", name: "Timor-Leste" },
  { code: "+228", name: "Togo" },
  { code: "+690", name: "Tokelau" },
  { code: "+676", name: "Tonga" },
  { code: "+1868", name: "Trinidad and Tobago" },
  { code: "+216", name: "Tunisia" },
  { code: "+90", name: "Turkey" },
  { code: "+7370", name: "Turkmenistan" },
  { code: "+1649", name: "Turks and Caicos Islands" },
  { code: "+688", name: "Tuvalu" },
  { code: "+256", name: "Uganda" },
  { code: "+380", name: "Ukraine" },
  { code: "+971", name: "United Arab Emirates" },
  { code: "+44", name: "United Kingdom" },
  { code: "+1", name: "United States" },
  { code: "+1", name: "United States Minor Outlying Islands" },
  { code: "+598", name: "Uruguay" },
  { code: "+998", name: "Uzbekistan" },
  { code: "+678", name: "Vanuatu" },
  { code: "+58", name: "Venezuela" },
  { code: "+84", name: "Viet Nam" },
  { code: "+1284", name: "Virgin Islands, British" },
  { code: "+1340", name: "Virgin Islands, U.s." },
  { code: "+681", name: "Wallis and Futuna" },
  { code: "+212", name: "Western Sahara" },
  { code: "+967", name: "Yemen" },
  { code: "+260", name: "Zambia" },
  { code: "+263", name: "Zimbabwe" },
];

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phoneNumber: "",
    agreed: false,
  });

  const getFullPhone = () => {
    return `${formData.countryCode}${formData.phoneNumber}`;
  };

  const handleChange = (e) => {
    const { name, value, type, checked, dataset } = e.target;
    const field = dataset.field;
    if (type === "checkbox") {
      setFormData({ ...formData, agreed: checked });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("You must agree to the terms and conditions.");
      return;
    }

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSca3NiIBuir-7xR7mVV_J1yyZucIqCU2co4unMZpZgUX_7BYg/formResponse";

    const formBody = new URLSearchParams();
    formBody.append("entry.2005620554", formData.name); // name
    formBody.append("entry.901097069", formData.email); // email
    formBody.append("entry.1166974658", getFullPhone()); // phone
    formBody.append("entry.773231822", "Allow"); // terms checkbox

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });
      alert("Registration submitted successfully!");
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phoneNumber: "",
        agreed: false,
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <section
      className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 lg:px-20 
      bg-[radial-gradient(circle,_#1E1D21_0%,_#18181A_100%)] 
      bg-[url('./register bg_cleanup (1).jpg')] bg-cover bg-center bg-no-repeat"
      id="register"
    >
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left p-6 rounded-lg">
        <h2 className="text-4xl font-bold text-white mb-4">
          Get a Demo Call from NeuroBit AI
        </h2>
        <p className="text-[#AFAFAF] text-lg">
          Experience the power of NeuroBit AI’s advanced voice assistant by scheduling a personalized demo call.
          Fill out the form, and our assistant will reach out with a tailored experience for your business.
        </p>
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
      <form
      onSubmit={handleSubmit}
      className="bg-[#F5F5F5] p-8 rounded-lg shadow-lg max-w-lg mx-auto space-y-4"
    >
      {/* Full Name */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
        <input
          data-field="name"
          type="text"
          name="entry.2005620554"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="John Doe"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Email</label>
        <input
          data-field="email"
          type="email"
          name="emailAddress"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="example@domain.com"
          required
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
        <div className="flex gap-2">
          <select
            data-field="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="p-3 rounded bg-white text-black border border-gray-300 w-2/5"
          >
            {countryCodes.map((country, index) => (
              <option key={index} value={country.code}>
                {country.name} ({country.code})
              </option>
            ))}
          </select>

          <input
            data-field="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-3/5 p-3 rounded bg-white text-black border border-gray-300 focus:outline-none"
            placeholder="1234567890"
            required
          />
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          checked={formData.agreed}
          onChange={handleChange}
          className="accent-black"
        />
        <label htmlFor="terms" className="text-gray-700">
          I agree to the Terms and Conditions
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition duration-200"
      >
        Submit
      </button>
    </form>

      </div>
    </section>
  );
};

export default Register;
