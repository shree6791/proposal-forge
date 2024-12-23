interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-300" />
      <div className="relative bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2">
        <div className="mb-6">
          <svg className="h-8 w-8 text-blue-500 opacity-50" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
        </div>
        <p className="text-gray-600 mb-6 italic leading-relaxed">{quote}</p>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
            {author[0]}
          </div>
          <div className="ml-4">
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">{role}, {company}</p>
          </div>
        </div>
      </div>
    </div>
  );
}