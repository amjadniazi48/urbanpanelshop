import SmashForm from "@/components/SmashForm";

export default function SmashPage() {
  return (
    <section
      className="container py-2  mb-5 shadow-sm"
      style={{
        backgroundColor: "#grey",
      
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "1rem",
        marginTop: "6rem",
      }}
    >
      <div className="container mx-auto py-2 mb-5 ">
          <div className="d-flex justify-content-center mb-4">
           <div className=" text-center">
            <img
                    src="assets/img/siteicons/cameracar.png"
                    width="55px"
                    alt="car smashed"
                    className="text-center"
                  />
            
            <h3 className="text-2xl font-bold text-center mb-6 text-gradient-primary">
              Car Smash Report Form
            </h3>
            <SmashForm />
          </div>
        </div>
      </div>
    </section>
  );
}
