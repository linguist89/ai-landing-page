import Image from "next/image";

const CTA = () => {
  return (
    <section className="relative hero overflow-hidden min-h-screen">
      <Image
        src="https://source.unsplash.com/young-businesspeople-shaking-hands-in-the-office-when-finishing-successful-meeting-sT3I2MqTZEc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80"
        alt="Background"
        className="object-cover w-full"
        fill
      />
      <div className="relative hero-overlay bg-neutral bg-opacity-70"></div>
      <div className="relative hero-content text-center text-neutral-content p-8">
        <div className="flex flex-col items-center max-w-xl p-8 md:p-0">
          <h2 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 md:mb-12">
            Be the first to get the eBook
          </h2>
          <p className="text-lg opacity-80 mb-12 md:mb-16">
            Preorder now and you will be part of developing the book. {" "}
            You will get early access, contribute to the content and get an early bird discount. Don\'t miss out.
          </p>

          <script async
            src="https://js.stripe.com/v3/buy-button.js">
          </script>

          <stripe-buy-button
            buy-button-id="buy_btn_1OGXJPCr38bAPvsiSeLBjKeO"
            publishable-key="pk_live_51NXCIeCr38bAPvsiu70InYnvbBz3Rojv0N3og2yJfnS8fbx6sQHZ4Pn2KUoFzzvQv37JpOKYeKvm8W1fkzFTpCtB006jG72taQ"
          >
          </stripe-buy-button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
