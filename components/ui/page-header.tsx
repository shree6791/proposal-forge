interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Array<{
    label: string;
    href?: string;
  }>;
}

export function PageHeader({ title, subtitle, breadcrumbs }: PageHeaderProps) {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <nav className="text-sm mb-4">
            <ol className="flex items-center space-x-2">
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center">
                  {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                  {crumb.href ? (
                    <a href={crumb.href} className="text-blue-600 hover:text-blue-800">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="text-gray-500">{crumb.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{title}</h1>
        {subtitle && (
          <p className="text-lg text-gray-600">{subtitle}</p>
        )}
      </div>
    </div>
  );
}