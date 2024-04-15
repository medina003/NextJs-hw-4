import NavBar from "@/pages/components/NavBar/NavBar";

const carDetails = ({ car }: any) => {
  return (
    <>
      <NavBar />
      <div>
        <h1>Car Details</h1>
        <h2>{car.company}</h2>
        <h3>{car.model}</h3>
        <p>{car.price}$</p>
      </div>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { params } = context;
  const response = await fetch(`http://localhost:3001/cars/${params.carId}`);
  const data = await response.json();

  return {
    props: {
      car: data,
    },
  };
}

export default carDetails;
