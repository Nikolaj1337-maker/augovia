import fs from "fs";
import path from "path";

/**
 * Founder photo: put a file named founder.jpg (or .jpeg, .png, .webp) into
 * the "public" folder of the project. It is picked up automatically on the
 * next deploy; if there is no such file, the photo is simply not shown.
 * Matching ignores upper/lower case, so FOUNDER.JPG works too.
 */
const ACCEPTED = ["founder.jpg", "founder.jpeg", "founder.png", "founder.webp"];

export function findFounderPhoto(): string | null {
  try {
    const files = fs.readdirSync(path.join(process.cwd(), "public"));
    const match = files.find((f) => ACCEPTED.includes(f.toLowerCase()));
    return match ? `/${match}` : null;
  } catch {
    return null;
  }
}
