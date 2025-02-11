"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    company: "",
    project: "",
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-20 mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-2xl font-normal">
        {/* Name and Phone fields */}
        <div className="flex items-center gap-4">
          <label
            htmlFor="name"
            className=" uppercase whitespace-nowrap min-w-[80px]"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-1"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="flex items-center gap-4">
          <label
            htmlFor="phone"
            className=" uppercase whitespace-nowrap min-w-[80px]"
          >
            Phone No.
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-1"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>

        {/* Email and Location fields */}
        <div className="flex items-center gap-4">
          <label
            htmlFor="email"
            className=" uppercase whitespace-nowrap min-w-[80px]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-1"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <div className="flex items-center gap-4">
          <label
            htmlFor="location"
            className=" uppercase whitespace-nowrap min-w-[80px]"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-1"
            value={formData.location}
            onChange={(e) =>
              setFormData({ ...formData, location: e.target.value })
            }
          />
        </div>

        {/* Company field - full width */}
        <div className="flex items-center gap-4 md:col-span-2">
          <label htmlFor="company" className=" uppercase whitespace-nowrap">
            Company or Organisation
          </label>
          <input
            type="text"
            id="company"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-1"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />
        </div>

        {/* Project details - full width */}
        <div className="flex gap-4 md:col-span-2">
          <label htmlFor="project" className=" uppercase whitespace-nowrap">
            Tell us a bit about your project, timeline or budget
          </label>
          <input
            id="project"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-1 resize-none"
            value={formData.project}
            onChange={(e) =>
              setFormData({ ...formData, project: e.target.value })
            }
          />
        </div>
        <div className="flex gap-4 md:col-span-2">
          <input
            id="project2"
            className="w-full border-b border-gray-300 focus:border-gray-900 outline-none py-1 resize-none"
            value={formData.project}
            onChange={(e) =>
              setFormData({ ...formData, project: e.target.value })
            }
          />
        </div>
      </div>

      {/* Newsletter checkbox */}
      <div className="mt-6 ml-[220px]">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="w-4 h-4 border-gray-300 rounded"
            checked={formData.newsletter}
            onChange={(e) =>
              setFormData({ ...formData, newsletter: e.target.checked })
            }
          />
          <span className="">Sign me in for latest news, events & more</span>
        </label>
      </div>

      {/* Submit button */}
      <div className="mt-8 flex justify-end">
        <button
          type="submit"
          className="px-12 py-3 bg-[#F26334] hover:bg-[#e05626] text-white text-xl transition-colors"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
