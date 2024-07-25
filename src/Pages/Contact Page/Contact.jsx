
const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="lg:w-1/2 mx-auto md:w-full">
          {/* Contact Form Section */}
          <div className="bg-white rounded-lg shadow-md px-8 py-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Send me your Message</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-600" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-600" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Enter your message" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-600"></textarea>
              </div>
              <button type="submit" className="bg-violet-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-violet-800 w-full">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Contact;