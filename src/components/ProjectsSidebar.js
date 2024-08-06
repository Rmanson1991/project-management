import Button from './Button';

export default function ProjectsSidebar({
    onStartAddProject,
    projects,
    onSelectProject,
    onSelectProjectId
}) {
    return (
        <aside className="w-1/3 px-8 py-16 bg-blue-500 text-stone-300 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-white">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject}>
                    + Add Project
                </Button>
            </div>
            <ul className="mt-8">
                {projects.map((project) => {

                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 font-semibold text-xl md:text-lg sm:text-sm hover:text-stone-100"

                    if(project.id === onSelectProjectId){
                        cssClasses += " text-stone-600"
                    } else {
                        cssClasses += " text-stone-200"
                    }
                    
                    return (
                        <li key={project.id}>
                        <button
                            onClick={() => onSelectProject(project.id)}
                            className={cssClasses}>
                            {project.title}
                        </button>
                    </li>
                    );
                })}
            </ul>
        </aside>
    );
}