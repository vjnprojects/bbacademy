
import { useState, FormEvent, ChangeEvent } from 'react';
import { toast } from 'sonner';

interface FormData {
  name: string;
  email: string;
  phone: string;
  program: string;
  startDate: string;
  comments: string;
}

const TrainingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    program: '',
    startDate: '',
    comments: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Training registration submitted:', formData);
      toast.success('Thank you for registering! We will contact you shortly with next steps.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        program: '',
        startDate: '',
        comments: '',
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
        <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
          Program of Interest
        </label>
        <select
          id="program"
          name="program"
          required
          value={formData.program}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select a program</option>
          <option value="Barista Training">Barista Training</option>
          <option value="Bartending & Mixology">Bartending & Mixology</option>
          <option value="Sommelier Course">Sommelier Course</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Start Date
        </label>
        <input
          id="startDate"
          name="startDate"
          type="date"
          required
          value={formData.startDate}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      
      <div>
        <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
          Additional Comments
        </label>
        <textarea
          id="comments"
          name="comments"
          rows={3}
          value={formData.comments}
          onChange={handleChange}
          className="form-input"
          placeholder="Any questions or special requirements..."
        />
      </div>
      
      <div>
        <button
          type="submit"
          className="btn-primary w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Register for Training'}
        </button>
      </div>
    </form>
  );
};

export default TrainingForm;
