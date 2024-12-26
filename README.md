# Proposal Forge

A modern web application for generating professional business proposals using AI.

## Features

### Recent Improvements
- **Enhanced User Experience**
  - Progressive loading of proposal sections
  - Real-time generation status with visual progress indicators
  - Improved navigation between input and result pages
  - Regeneration capability with success/failure notifications

### Core Features
- **AI-Powered Proposal Generation**
  - Two-part proposal generation system
  - Customizable client objectives
  - Professional formatting and structure
- **Interactive UI**
  - Step-by-step input process
  - Real-time progress tracking
  - Visual feedback for generation status
- **Result Management**
  - Download generated proposals
  - Regenerate proposals as needed
  - Preview before download

## Technical Stack

- **Frontend Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS with custom components
- **Animation**: Framer Motion for smooth transitions
- **State Management**: React Hooks and Context
- **AI Integration**: OpenAI API for content generation

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/shree6791/proposal-forge.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file with required API keys

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
proposal-forge/
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── proposal/         # Proposal-specific components
│   └── ui/              # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Global styles
```

## Recent Updates

### User Experience Improvements
- Added visual progress tracking for proposal generation
- Implemented seamless navigation between pages
- Enhanced error handling with user notifications
- Improved proposal regeneration workflow

### Technical Improvements
- Optimized proposal generation process
- Enhanced loading states and error handling
- Improved component modularity
- Added toast notifications for user feedback

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
