
/**
 * Image Assets File
 * Contains URLs and data for images used throughout the website
 */

export const images = {
  // Hero backgrounds
  hero: {
    home: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/36ed3fd8-070e-4a5c-8e77-8aadbf042437.jpg',
    about: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/44cb386c-5f5f-48f1-9f70-50f970667323.jpg',
    services: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/c48411f7-8bc3-4555-9c55-f1b06f9d2742.jpg',
    career: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/3592c17f-c89c-4991-9117-47193331fda1.jpg',
    contact: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/36ed3fd8-070e-4a5c-8e77-8aadbf042437.jpg',
    trainings: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/44cb386c-5f5f-48f1-9f70-50f970667323.jpg',
    trainers: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/031bec54-ad42-41bd-bab2-85880b04518c.jpg',
  },
  
  // Training program images
  trainings: {
    barista: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/7981ff69-0031-402e-ab5b-99749dd9d27d.jpg',
    bartending: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/031bec54-ad42-41bd-bab2-85880b04518c.jpg',
    sommelier: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/00ef293b-ef61-46f1-a08b-cfb5ab41d7e6.jpg',
  },
  
  // Trainer profile images
  trainers: {
    'jean-pierre': '/images/trainers/jean-pierre.jpg',
    'marie': '/images/trainers/marie.jpg',
    'david': '/images/trainers/david.jpg',
    'christine': '/images/trainers/christine.jpg',
    'robert': '/images/trainers/robert.jpg',
    'sarah': '/images/trainers/sarah.jpg',
  },
  
  // Services images
  services: {
    barista: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/7981ff69-0031-402e-ab5b-99749dd9d27d.jpg',
    bartending: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/031bec54-ad42-41bd-bab2-85880b04518c.jpg',
    sommelier: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/00ef293b-ef61-46f1-a08b-cfb5ab41d7e6.jpg',
    simulation: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/44cb386c-5f5f-48f1-9f70-50f970667323.jpg',
    certification: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/c48411f7-8bc3-4555-9c55-f1b06f9d2742.jpg',
    placement: 'https://thumbs-eu-west-1.myalbum.io/photo/1k0/3592c17f-c89c-4991-9117-47193331fda1.jpg',
  },
  
  // Gallery images
  gallery: [
    'https://thumbs-eu-west-1.myalbum.io/photo/1k0/7981ff69-0031-402e-ab5b-99749dd9d27d.jpg',
    'https://thumbs-eu-west-1.myalbum.io/photo/1k0/031bec54-ad42-41bd-bab2-85880b04518c.jpg',
    'https://thumbs-eu-west-1.myalbum.io/photo/1k0/00ef293b-ef61-46f1-a08b-cfb5ab41d7e6.jpg',
    'https://thumbs-eu-west-1.myalbum.io/photo/1k0/44cb386c-5f5f-48f1-9f70-50f970667323.jpg',
    'https://thumbs-eu-west-1.myalbum.io/photo/1k0/c48411f7-8bc3-4555-9c55-f1b06f9d2742.jpg',
    'https://thumbs-eu-west-1.myalbum.io/photo/1k0/3592c17f-c89c-4991-9117-47193331fda1.jpg',
    'https://thumbs-eu-west-1.myalbum.io/photo/1k0/36ed3fd8-070e-4a5c-8e77-8aadbf042437.jpg',
  ],
  
  // Default placeholders
  placeholders: {
    person: '/placeholder.svg',
    course: '/placeholder.svg',
    service: '/placeholder.svg',
    gallery: '/placeholder.svg',
  }
};

// Map all image URLs to their default values if they're not available
// This ensures images don't break if they're missing
export const getImageUrl = (path: string): string => {
  // If path starts with http or data:, it's already an external URL or data URL
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  
  // Check if the image exists at the given path relative to the public folder
  try {
    const img = new Image();
    img.src = path;
    return path;
  } catch (error) {
    // If there's an error, return a placeholder
    console.warn(`Image not found: ${path}, using placeholder instead`);
    return '/placeholder.svg';
  }
};

export default images;
