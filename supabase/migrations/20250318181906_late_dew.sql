/*
  # Add fields to registrations table

  1. Changes
    - Add first_name, surname, and places_required columns to registrations table
    - Make these fields required for new registrations
    - Existing records will have NULL values (safe migration)

  2. Security
    - Maintains existing RLS policies
*/

ALTER TABLE registrations 
ADD COLUMN IF NOT EXISTS first_name text NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS surname text NOT NULL DEFAULT '',
ADD COLUMN IF NOT EXISTS places_required integer NOT NULL DEFAULT 1;

-- Remove the default constraints after adding the columns
ALTER TABLE registrations 
ALTER COLUMN first_name DROP DEFAULT,
ALTER COLUMN surname DROP DEFAULT,
ALTER COLUMN places_required DROP DEFAULT;