import ButtonLead from "./CustomButtonLead";


const Newsletter = () => {
  return (
    <section className="bg-base-200 border-t  text-center border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
          Don\'t Forget to Join the Newsletter
        </h2>
        <ButtonLead extraStyle="max-w-xl mx-auto" />
      </div>
    </section>
  );
};

export default Newsletter;
