"use client";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    // Handle form submission logic here
    alert("Form submitted!");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form 
        className="w-full max-w-md bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

        <label className="block mb-2 font-medium">Name</label>
        <input 
          type="text"
          placeholder="Your name"
          className="w-full border border-gray-300 p-2 rounded mb-4"
          required
        />

        <label className="block mb-2 font-medium">Email</label>
        <input 
          type="email"
          placeholder="Your email"
          className="w-full border border-gray-300 p-2 rounded mb-4"
          required
        />

        <label className="block mb-2 font-medium">Message</label>
        <textarea 
          placeholder="Your message"
          className="w-full border border-gray-300 p-2 rounded mb-4"
          rows={4}
          required
        />

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
