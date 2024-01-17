const PatientDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      <h1>ID: {params.id}</h1>
    </div>
  );
};

export default PatientDetailsPage;
