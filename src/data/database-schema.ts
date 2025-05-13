
/**
 * Beyond Barista Academy Database Schema
 * 
 * This file contains the recommended database schema for the BBA application.
 * It's intended as documentation and can be used to set up your Supabase tables.
 */

/**
 * Users Table
 * Stores information about registered users (admins, students, trainers)
 * 
 * CREATE TABLE users (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   email VARCHAR UNIQUE NOT NULL,
 *   full_name VARCHAR NOT NULL,
 *   role VARCHAR NOT NULL CHECK (role IN ('admin', 'student', 'trainer')),
 *   phone VARCHAR,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 */

/**
 * Courses Table
 * Stores information about training courses offered
 * 
 * CREATE TABLE courses (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   title VARCHAR NOT NULL,
 *   description TEXT,
 *   type VARCHAR NOT NULL CHECK (type IN ('barista', 'bartender', 'sommelier')),
 *   duration VARCHAR,
 *   schedule VARCHAR,
 *   price DECIMAL(10,2),
 *   image_url VARCHAR,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 */

/**
 * Course Sessions Table
 * Stores information about specific course sessions/cohorts
 * 
 * CREATE TABLE course_sessions (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
 *   start_date DATE NOT NULL,
 *   end_date DATE,
 *   max_students INTEGER DEFAULT 20,
 *   status VARCHAR DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'ongoing', 'completed', 'cancelled')),
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 */

/**
 * Enrollments Table
 * Records student enrollments in course sessions
 * 
 * CREATE TABLE enrollments (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   user_id UUID REFERENCES users(id) ON DELETE CASCADE,
 *   session_id UUID REFERENCES course_sessions(id) ON DELETE CASCADE,
 *   enrollment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   payment_status VARCHAR DEFAULT 'pending' CHECK (payment_status IN ('pending', 'partial', 'completed')),
 *   certificate_issued BOOLEAN DEFAULT FALSE,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   UNIQUE(user_id, session_id)
 * );
 */

/**
 * Trainers Table
 * Stores detailed information about trainers
 * 
 * CREATE TABLE trainers (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   user_id UUID REFERENCES users(id) ON DELETE CASCADE,
 *   bio TEXT,
 *   specialization VARCHAR[],
 *   years_experience INTEGER,
 *   profile_image VARCHAR,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 */

/**
 * Course Trainers Junction Table
 * Maps which trainers teach which courses
 * 
 * CREATE TABLE course_trainers (
 *   course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
 *   trainer_id UUID REFERENCES trainers(id) ON DELETE CASCADE,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   PRIMARY KEY (course_id, trainer_id)
 * );
 */

/**
 * Content Table
 * Stores editable website content
 * 
 * CREATE TABLE content (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   page VARCHAR NOT NULL,
 *   section VARCHAR NOT NULL,
 *   content_type VARCHAR NOT NULL CHECK (content_type IN ('text', 'html', 'image_url')),
 *   content TEXT NOT NULL,
 *   last_updated_by UUID REFERENCES users(id),
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   UNIQUE(page, section)
 * );
 */

/**
 * Jobs Table
 * Stores information about job postings
 * 
 * CREATE TABLE jobs (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   title VARCHAR NOT NULL,
 *   description TEXT,
 *   location VARCHAR NOT NULL,
 *   type VARCHAR CHECK (type IN ('full-time', 'part-time', 'contract')),
 *   requirements TEXT[],
 *   is_active BOOLEAN DEFAULT TRUE,
 *   posted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 */

/**
 * Job Applications Table
 * Stores information about job applications
 * 
 * CREATE TABLE job_applications (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
 *   applicant_name VARCHAR NOT NULL,
 *   email VARCHAR NOT NULL,
 *   phone VARCHAR,
 *   cv_url VARCHAR,
 *   status VARCHAR DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'interviewed', 'accepted', 'rejected')),
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 *   updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 */

/**
 * Contact Messages Table
 * Stores messages submitted through the contact form
 * 
 * CREATE TABLE contact_messages (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   name VARCHAR NOT NULL,
 *   email VARCHAR NOT NULL,
 *   subject VARCHAR,
 *   message TEXT NOT NULL,
 *   is_read BOOLEAN DEFAULT FALSE,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 */

/**
 * Newsletter Subscribers Table
 * Stores newsletter subscriber information
 * 
 * CREATE TABLE newsletter_subscribers (
 *   id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
 *   email VARCHAR UNIQUE NOT NULL,
 *   is_active BOOLEAN DEFAULT TRUE,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 */

// Sample data insertion scripts - replace with actual data as needed

export const sampleDataInserts = `
-- Insert sample courses
INSERT INTO courses (title, description, type, duration, schedule, price, image_url)
VALUES 
  ('Barista Training Program', 'Become a certified barista with our comprehensive training program.', 'barista', '3 months', 'Monday to Friday, 9:00 AM - 1:00 PM', 1200.00, '/images/barista-course.jpg'),
  ('Bartending & Mixology Program', 'Master the art of mixology and bartending with our hands-on training program.', 'bartender', '3 months', 'Monday to Friday, 2:00 PM - 6:00 PM', 1500.00, '/images/bartending-course.jpg'),
  ('Sommelier Certification Program', 'Develop your wine knowledge and tasting skills with our comprehensive sommelier training program.', 'sommelier', '3 months', 'Tuesday to Saturday, 10:00 AM - 2:00 PM', 1800.00, '/images/sommelier-course.jpg');

-- Insert sample course sessions
INSERT INTO course_sessions (course_id, start_date, end_date, status)
VALUES 
  ((SELECT id FROM courses WHERE title = 'Barista Training Program'), '2025-06-15', '2025-09-15', 'upcoming'),
  ((SELECT id FROM courses WHERE title = 'Barista Training Program'), '2025-09-01', '2025-12-01', 'upcoming'),
  ((SELECT id FROM courses WHERE title = 'Bartending & Mixology Program'), '2025-07-01', '2025-10-01', 'upcoming'),
  ((SELECT id FROM courses WHERE title = 'Sommelier Certification Program'), '2025-08-01', '2025-11-01', 'upcoming');

-- Insert sample trainers (first create users, then trainers)
INSERT INTO users (email, full_name, role, phone)
VALUES
  ('jean.muhire@beyondbarista.rw', 'Jean-Pierre Muhire', 'trainer', '+250798123001'),
  ('marie.uwamahoro@beyondbarista.rw', 'Marie Uwamahoro', 'trainer', '+250798123002'),
  ('david.karangwa@beyondbarista.rw', 'David Karangwa', 'trainer', '+250798123003'),
  ('christine.mugisha@beyondbarista.rw', 'Christine Mugisha', 'trainer', '+250798123004'),
  ('robert.ndungutse@beyondbarista.rw', 'Robert Ndungutse', 'trainer', '+250798123005'),
  ('sarah.mutesi@beyondbarista.rw', 'Sarah Mutesi', 'trainer', '+250798123006');

-- Insert trainer details (assuming user_ids from the previous insert)
INSERT INTO trainers (user_id, bio, specialization, years_experience, profile_image)
VALUES
  ((SELECT id FROM users WHERE full_name = 'Jean-Pierre Muhire'), 'With over 10 years of experience in specialty coffee, Jean-Pierre has worked in top cafés across East Africa and Europe.', ARRAY['espresso', 'latte art', 'alternative brewing'], 10, '/images/trainers/jean-pierre.jpg'),
  ((SELECT id FROM users WHERE full_name = 'Marie Uwamahoro'), 'Marie brings 8 years of international bartending experience from luxury hotels in Dubai and Cape Town.', ARRAY['mixology', 'flair bartending', 'cocktail creation'], 8, '/images/trainers/marie.jpg'),
  ((SELECT id FROM users WHERE full_name = 'David Karangwa'), 'David is a certified sommelier with experience in fine dining establishments across Europe.', ARRAY['wine tasting', 'food pairing', 'cellar management'], 12, '/images/trainers/david.jpg'),
  ((SELECT id FROM users WHERE full_name = 'Christine Mugisha'), 'Christine combines technical coffee knowledge with exceptional customer service skills.', ARRAY['coffee brewing', 'customer service', 'bean selection'], 5, '/images/trainers/christine.jpg'),
  ((SELECT id FROM users WHERE full_name = 'Robert Ndungutse'), 'Robert is known for his innovative cocktail creations and deep knowledge of spirits.', ARRAY['cocktail creation', 'spirits knowledge', 'bar management'], 7, '/images/trainers/robert.jpg'),
  ((SELECT id FROM users WHERE full_name = 'Sarah Mutesi'), 'Sarah has traveled extensively throughout wine regions in France, Italy, and South Africa.', ARRAY['wine education', 'sensory evaluation', 'wine regions'], 6, '/images/trainers/sarah.jpg');

-- Link trainers to courses
INSERT INTO course_trainers (course_id, trainer_id)
VALUES
  ((SELECT id FROM courses WHERE type = 'barista'), (SELECT id FROM trainers WHERE user_id = (SELECT id FROM users WHERE full_name = 'Jean-Pierre Muhire'))),
  ((SELECT id FROM courses WHERE type = 'barista'), (SELECT id FROM trainers WHERE user_id = (SELECT id FROM users WHERE full_name = 'Christine Mugisha'))),
  ((SELECT id FROM courses WHERE type = 'bartender'), (SELECT id FROM trainers WHERE user_id = (SELECT id FROM users WHERE full_name = 'Marie Uwamahoro'))),
  ((SELECT id FROM courses WHERE type = 'bartender'), (SELECT id FROM trainers WHERE user_id = (SELECT id FROM users WHERE full_name = 'Robert Ndungutse'))),
  ((SELECT id FROM courses WHERE type = 'sommelier'), (SELECT id FROM trainers WHERE user_id = (SELECT id FROM users WHERE full_name = 'David Karangwa'))),
  ((SELECT id FROM courses WHERE type = 'sommelier'), (SELECT id FROM trainers WHERE user_id = (SELECT id FROM users WHERE full_name = 'Sarah Mutesi')));

-- Insert sample jobs
INSERT INTO jobs (title, description, location, type, requirements)
VALUES
  ('Barista Trainer', 'We're looking for an experienced Barista Trainer to join our team.', 'Kigali, Rwanda', 'full-time', ARRAY['3+ years of experience as a professional barista', 'Knowledge of various brewing methods and equipment', 'Strong communication and presentation skills', 'Fluent in English (French or Kinyarwanda is a plus)']),
  ('Bartender/Mixology Instructor', 'Join our team as a Bartender and Mixology Instructor to train the next generation of bartending professionals in Rwanda.', 'Kigali, Rwanda', 'full-time', ARRAY['5+ years of experience as a bartender or mixologist', 'Knowledge of classic and contemporary cocktail recipes', 'Experience with flair bartending is a plus', 'Previous teaching experience preferred']),
  ('Administrative Assistant', 'Support our growing academy with your excellent organizational and communication skills as an Administrative Assistant.', 'Kigali, Rwanda', 'full-time', ARRAY['Previous administrative experience', 'Excellent organizational and time-management skills', 'Proficiency in MS Office and other software', 'Strong communication skills in English']);

-- Insert website content
INSERT INTO content (page, section, content_type, content)
VALUES
  ('home', 'hero_title', 'text', 'Welcome to Beyond Barista Academy – Kigali's Iconic Hospitality School'),
  ('home', 'hero_image', 'image_url', '/images/hero-image.jpg'),
  ('about', 'mission_statement', 'text', 'We train our people to always exceed company expectations.'),
  ('about', 'vision_statement', 'text', 'To proudly offer high-end, globally relevant skills in barista, bartender, and sommelier training.');
`;

export default sampleDataInserts;
