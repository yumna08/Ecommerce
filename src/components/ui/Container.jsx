const Container = ({ children, className = '' }) => {
    return (
      <div className={`container mx-auto px-4 md:px-6 max-w-7xl ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Container;