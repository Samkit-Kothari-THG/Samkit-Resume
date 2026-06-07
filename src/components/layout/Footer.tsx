import { profile } from "../../data/resume";

export function Footer() {
  return (
    <footer>
      <span>{profile.name}</span>
      <span>{profile.role}</span>
      <a href={`mailto:${profile.email}`}>{profile.email}</a>
    </footer>
  );
}
