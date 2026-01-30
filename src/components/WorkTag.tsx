type WorkTagData = {
    tags:string[];
}

export default WorkTag=({ tags: WorkTagData })=>{
    return(
        <div className="flex gap-2 mt-4 flex-wrap">
      {tags.map((tag) => (
        <span
          key={tag}
          className="px-3 py-1 text-sm bg-gray-100 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
    );
}