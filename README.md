# Tadashi AI - Your Personal Healthcare Companion

![Tadashi AI](public/images/tadashi-hello.gif)

India's First AI Healthcare Companion - Now in Open Beta

## About

Tadashi AI is a healthcare management suite designed specifically for the Indian population. Inspired by the beloved character from Big Hero 6, Tadashi AI aims to make healthcare accessible, affordable, and convenient for everyone in India.

## Key Features

- **18+ Health Tools**: Including symptom checker, wellness tracking, emergency SOS, and more
- **AI-Powered Chatbot**: With Mistral AI integration for intelligent health assistance
- **Voice Interaction**: Speech-to-text and text-to-speech capabilities using Web Speech API
- **Multilingual Support**: Available in 13 Indian languages
- **Low Literacy Support**: Visual aids and voice-first interface for all users
- **Open Beta Access**: All premium features unlocked during the beta phase

## Technology Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Framer Motion, Lucide React
- **Backend**: Next.js API Routes
- **Database**: File-based JSON storage (development)
- **AI Integration**: Mistral AI API
- **Email**: Nodemailer
- **Voice**: Web Speech API
- **State Management**: React Context API
- **Deployment**: Vercel

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install` or `pnpm install`
3. Create a `.env.local` file with the required environment variables
4. Run `npm run dev` to start the development server
5. Access the application at http://localhost:3000

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
MISTRAL_API_KEY=your_mistral_api_key
EMAIL_HOST=smtp.your-email-provider.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
OPEN_BETA=true
```

## Deployment

The application is configured for deployment on Vercel. Make sure to set the environment variables in the Vercel dashboard.

## Contributing

We welcome contributions to improve Tadashi AI. Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue on GitHub or contact our team.

---

<p align="center">
  Made with ❤️ by the Tadashi AI Team
</p>