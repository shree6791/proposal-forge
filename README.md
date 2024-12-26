# ProposalForge

ProposalForge is an AI-powered proposal generation platform that helps businesses create professional, tailored proposals efficiently.

## Features

### Core Features
- **AI-Powered Generation**: Utilizes advanced AI models to create customized proposals
- **Two-Part Proposal System**:
  - Part 1: Core Proposal Outline
  - Part 2: Advanced Proposal Section (with auto-generation)
- **Smart Auto-Generation**: Automatically generates Part 2 after Part 1 completion
- **Manual Override**: Maintains manual generation option for Part 2
- **Real-time Progress**: Visual feedback during proposal generation

### User Experience
- **Intuitive Interface**: Step-by-step guided process
- **Topic Selection**: Specialized templates for different proposal types
- **Client Objectives**: Customizable objectives selection
- **Ticket Volume Integration**: Support for incident, service, and change tickets
- **Cost Calculation**: Automated cost estimation based on ticket volumes

### Technical Features
- **Local Storage**: Persistent storage of proposal data
- **Error Handling**: Robust error management for both auto and manual generation
- **Progress Tracking**: Console logging for debugging and monitoring
- **Word Document Export**: Download proposals in DOCX format

## Recent Updates
- Added automatic generation of Part 2 after Part 1 completion
- Enhanced loading state handling with clear progress indicators
- Improved error handling for both auto and manual generation
- Updated UI elements for better user experience
- Refined button text and styling for clarity

## Environment Setup
The application requires the following environment variables:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL='your-supabase-url'
NEXT_PUBLIC_SUPABASE_ANON_KEY='your-supabase-anon-key'

# OpenAI Configuration
OPENAI_API_KEY='your-openai-api-key'
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/shree6791/proposal-forge.git
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with required environment variables

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Development Process
- **Part 1 Generation**: Initial proposal outline
- **Part 2 Generation**: 
  - Auto-generates after Part 1 completion
  - Manual generation option remains available
  - Progress tracking through console logs

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.