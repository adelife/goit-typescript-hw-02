const ErrorMessage = ({ message = "" }) => {
    return (
      <p>
        {message.length > 0
          ? message
          : "❌ Whoops,  try again"}
      </p>
    );
  };
  
  export default ErrorMessage;