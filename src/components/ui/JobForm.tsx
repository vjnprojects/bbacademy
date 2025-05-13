
import { useState, FormEvent, ChangeEvent } from 'react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  jobTitle: string;
  resume: File | null;
  coverLetter: string;
}

const JobForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    resume: null,
    coverLetter: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Job application submitted:', formData);
      toast.success('Your application has been submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        jobTitle: '',
        resume: null,
        coverLetter: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
          Position Applied For
        </label>
        <select
          id="jobTitle"
          name="jobTitle"
          required
          value={formData.jobTitle}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select a position</option>
          <option value="Barista Trainer">Barista Trainer</option>
          <option value="Bartender Trainer">Bartender Trainer</option>
          <option value="Sommelier">Sommelier</option>
          <option value="Administrative Assistant">Administrative Assistant</option>
          <option value="Marketing Specialist">Marketing Specialist</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
          Resume/CV
        </label>
        <input
          id="resume"
          name="resume"
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="form-input p-2"
        />
        <p className="mt-1 text-sm text-gray-500">
          PDF, DOC, or DOCX formats (Max 5MB)
        </p>
      </div>
      
      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={4}
          value={formData.coverLetter}
          onChange={handleChange}
          className="form-input"
          placeholder="Tell us why you're interested in this position..."
        />
      </div>
      
      <div>
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>
  );
};

export default JobForm;
