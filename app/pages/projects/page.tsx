export default function Project(){
    return (
        <section id="projects" className="min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project cards will go here */}
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Project 1</h3>
                <p className="text-white/80">Description of project 1</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Project 2</h3>
                <p className="text-white/80">Description of project 2</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Project 3</h3>
                <p className="text-white/80">Description of project 3</p>
              </div>
            </div>
          </div>
        </section>
    )
}