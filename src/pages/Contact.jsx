export default function Contact() {
  return (
    <div className="px-8 w-full flex justify-center">
      <div className="my-16 w-max max-w-4xl flex flex-col space-y-8">
        <section className="w-full flex flex-col justify-center space-y-4">
          {/* @TODO: Center this h2!! */}
          <h2 className="text-2xl lg:text-5xl font-semibold w-max mx-auto">
            Contact Us
          </h2>
          <p className="text-center">
            We'd love to hear from you! <br />
            Whether you have a question, want to collaborate, or simply wish to
            learn more about the work we do at Enactus NSUT, feel free to reach
            out by filling this form or e-mailing us at{" "}
            <a
              className="underline text-yellow-400"
              href="mailto:enactus@nsut.ac.in"
            >
              enactus@nsut.ac.in
            </a>
            .
          </p>
        </section>
        <div className="bg-neutral-100 p-8 border border-neutral-300 rounded-md shadow-md">
          <form className="flex flex-col space-y-4 justify-center">
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 w-full">
              <div className=" w-full lg:w-1/2">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First name <span className="text-red-600">*</span>
                </label>

                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  placeholder="John"
                  required
                />
              </div>
              <div className=" w-full lg:w-1/2">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last Name <span className="text-red-600">*</span>
                </label>

                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 w-full">
              <div className=" w-full lg:w-1/2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  E-mail <span className="text-red-600">*</span>
                </label>

                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  placeholder="johndoe@email.com"
                  // alt: https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  required
                />
              </div>

              <div className=" w-full lg:w-1/2">
                <label
                  htmlFor="phone-input"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Phone Number<span className="text-red-600">*</span>
                </label>
                <div className="flex items-center">
                  <div className="flex-shrink-0 inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4">
                    + 91
                  </div>
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="phone-input"
                      className="block p-1.5 w-full text-md text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      placeholder="0000000000"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="button"
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-md px-12 py-2.5 w-max mx-auto"
            >
              Send It!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
