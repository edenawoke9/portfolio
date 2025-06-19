'use client';

export default function Project() {
    const projects = [
        {
            number: "1",
            title: "Bingo Card Design",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "/bingo-card.jpg",
            bgColor: "bg-pink-50"
        },
        {
            number: "2",
            title: "Mockup Stationery",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "/mockup-stationery.jpg",
            bgColor: "bg-orange-50"
        },
        {
            number: "3",
            title: "El Trompo",
            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            image: "/el-trompo.jpg",
            bgColor: "bg-blue-900"
        }
    ];

    return (
        <section className="min-h-screen bg-white py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Projects Grid */}
                <div className="grid grid-cols-3 gap-6 mb-24">
                    {projects.map((project, index) => (
                        <div key={index} className={`${project.bgColor} rounded-3xl p-8 relative min-h-[500px] group hover:scale-[1.02] transition-transform duration-300`}>
                            {/* Project Number */}
                            <div className="absolute -left-4 -top-4 text-[120px] font-serif text-black/10">
                                {project.number}
                            </div>
                            
                            {/* Content Container */}
                            <div className="relative z-10 h-full flex flex-col">
                                {/* Image Card */}
                                <div className="bg-white/90 rounded-2xl p-4 shadow-lg transform group-hover:-rotate-2 transition-transform duration-300">
                                    <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                                        {/* Replace with actual image */}
                                        <div className="absolute inset-0 bg-black/5"></div>
                                    </div>
                                </div>
                                
                                {/* Text Content */}
                                <div className="mt-8">
                                    <h3 className="text-2xl font-serif mb-4">{project.title}</h3>
                                    <p className="text-black/70 leading-relaxed text-sm">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Projects Text */}
                <div className="relative">
                    <h2 className="text-[200px] font-serif text-black tracking-tight leading-none">
                        PROJECTS
                    </h2>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-black rounded-full"></div>
                </div>
            </div>
        </section>
    );
}