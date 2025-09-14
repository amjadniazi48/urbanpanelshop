import SmashForm from "@/components/SmashForm";

export default function SmashPage() {
  return (
    <section
      className="container py-2  mb-5 shadow-sm"
      style={{
        backgroundImage: "grey",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1rem",
        marginTop: "6rem",
      }}
    >
      <div className="container mx-auto py-5 mb-5 ">
          <div className="d-flex justify-content-center mb-4">
           <div className="p-6 text-center">
            <img
                    src="assets/img/siteicons/cameracar.png"
                    width="100px"
                    alt="car smashed"
                    className="text-center"
                  />
            
            <h1 className="text-2xl font-bold text-center mb-6 text-warning">
              Car Smash Report Form
            </h1>
            <SmashForm />
          </div>
        </div>
      </div>
    </section>
  );
}
