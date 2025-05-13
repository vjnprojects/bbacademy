/**
 * Content Management Service
 * 
 * This service will handle content management for the website.
 * When integrating with Supabase, this can be connected to the 'content' table.
 */

// Default content as a fallback
const defaultContent = {
  home: {
    hero_title: "Welcome to Beyond Barista Academy – Kigali's Iconic Hospitality Training Center",
    hero_subtitle: "Discover world-class hospitality training in the heart of Rwanda",
    intro_text: "An iconic training center in the heart of vibrant Kigali, the cleanest city in Africa...",
  },
  about: {
    hero_title: "About Beyond Barista Academy",
    mission: "We train our people to always exceed company expectations.",
    vision: "To proudly offer high-end, globally relevant skills in barista, bartender, and sommelier training.",
  },
  // Add more sections as needed
};

// Mock database - replace with actual Supabase implementation
const contentDb = new Map<string, any>();

// Initialize with default content
Object.entries(defaultContent).forEach(([page, sections]) => {
  Object.entries(sections).forEach(([section, content]) => {
    contentDb.set(`${page}:${section}`, content);
  });
});

export const contentService = {
  /**
   * Get content for a specific page and section
   */
  getContent: (page: string, section: string): string => {
    const key = `${page}:${section}`;
    return contentDb.get(key) || "Content not found";
  },

  /**
   * Update content for a specific page and section
   */
  updateContent: (page: string, section: string, content: string): void => {
    const key = `${page}:${section}`;
    contentDb.set(key, content);
    console.log(`Content updated for ${key}:`, content);
    
    // In a real implementation, this would be a call to Supabase
    // Example: await supabase.from('content').upsert({ page, section, content_type: 'text', content });
  },

  /**
   * Get all content for a specific page
   */
  getPageContent: (page: string): Record<string, string> => {
    const pageContent: Record<string, string> = {};
    
    contentDb.forEach((value, key) => {
      if (key.startsWith(`${page}:`)) {
        const section = key.split(':')[1];
        pageContent[section] = value;
      }
    });
    
    return pageContent;
  },

  /**
   * Load content from Supabase (to be implemented)
   */
  loadFromDatabase: async (): Promise<void> => {
    // This would be implemented when connecting to Supabase
    console.log("Loading content from database...");
    
    // Example implementation with Supabase:
    // const { data, error } = await supabase.from('content').select('*');
    // if (data && !error) {
    //   data.forEach(item => {
    //     contentDb.set(`${item.page}:${item.section}`, item.content);
    //   });
    // }
  }
};

export default contentService;
