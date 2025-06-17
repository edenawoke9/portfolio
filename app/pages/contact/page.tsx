export default function Contact(){
    return <section id="contact" className="min-h-screen flex items-center bg-black/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <div className="max-w-lg mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/80">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white focus:border-white/40 focus:ring-white/40"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/80">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white focus:border-white/40 focus:ring-white/40"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/80">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md bg-white/10 border-white/20 text-white focus:border-white/40 focus:ring-white/40"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
}