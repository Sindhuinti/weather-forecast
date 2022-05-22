import Header from "./Header";
import "../styles.css";
import Form from "./Form";
import useForecast from "./useForecast";
import Error from "./Error";
import Loader from "./Loading";
import Forecast from "./Forecast";

function Page() {
  const { isError, isLoading, forecast, submitRequest } = useForecast();
  const onSubmit = (value) => {
    submitRequest(value);
  };
  return (
    <div>
      <Header />
      {!forecast && (
        <div className="box">
          {!isLoading && <Form submitSearch={onSubmit} />}
          {isError && <Error message={isError} />}
          {isLoading && <Loader />}
        </div>
      )}
      {forecast && <Forecast forecast={forecast} />}
    </div>
  );
}

export default Page;
