export function Card({ children, className = '' }) {
    return <div className={`bg-white rounded-2xl shadow p-5 ${className}`}>{children}</div>;
  }
  
  export function CardHeader({ children, className = '' }) {
    return <header className={`mb-3 ${className}`}>{children}</header>;
  }
  
  export function CardTitle({ children, className = '' }) {
    return <h2 className={`text-xl font-bold ${className}`}>{children}</h2>;
  }
  
  export function CardContent({ children, className = '' }) {
    return <div className={className}>{children}</div>;
  }
  