# TH3AN Portfolio

A personal developer portfolio website for **Thea Vithean (TH3AN)**. The site uses a cyberpunk Matrix-inspired design with animated canvas rain, dark terminal styling, glowing skill bars, project cards, and a working contact form alert.

## Features

- Responsive single-page portfolio layout
- Matrix rain canvas background
- Sticky navigation menu with mobile toggle
- Hero section with profile avatar and call-to-action buttons
- About section with personal introduction and stats
- Skills section with animated progress bars
- Projects section with six portfolio project cards
- Contact section with form validation and alert message
- Pure HTML, CSS, and JavaScript

## Sections

- **Home**: Main introduction for TH3AN
- **About**: Developer background and current learning goals
- **Skills**: Frontend, backend, embedded systems, and cloud/devops skills
- **Projects**: Featured development projects
- **Contact**: Email, location, GitHub, and message form

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Canvas API
- Google Fonts:
  - Orbitron
  - Share Tech Mono

## Project Structure

```text
Portflio/
├── index.html
├── style.css
└── README.md
```

The page also references this image path:

```text
/iMG/image.png
```

Make sure the image exists so the profile avatar displays correctly.

## How To Run

Open `index.html` in a web browser.

You can also use a local development server if you want cleaner asset paths:

```bash
python -m http.server
```

Then open:

```text
http://localhost:8000/Portflio/
```

## Contact Form

The contact form validates the name, email, and message fields. When the user clicks `TRANSMIT_MESSAGE`, the browser shows an alert with the submitted information.

This is currently frontend-only. To send real emails, connect the form to a backend API or a form service such as EmailJS, Formspree, or Netlify Forms.

## Author

**Thea Vithean (TH3AN)**  
Fullstack Developer // Cambodia

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
v
