import React from "react";

const skills = [
  "Testing manual",
  "Testing de automatización",
  "Python",
  "GitHub",
  "Jira",
  "Scrum"
];

export default function Skills() {
  return (
    <div className="card">
      <ul className="skills-list">
        {skills.map((s) => (
          <li key={s} className="skill-item">{s}</li>
        ))}
      </ul>
    </div>
  );
}
