import React from "react";

function TaskList() {
  return (
    <div id="TaskList" className="h-[55vh] w-full  gap-5 overflow-auto flex items-center justify-items-start flex-nowrap ">
      <div className="w-[400px] h-[400px] shrink-0 bg-amber-300 rounded-2xl">
       
        <div className="flex justify-between  items-center p-5">
        <h3 className="px-2 bg-red-600 rounded-xl ">High</h3>
        <h3>29-10-2026</h3>
      </div>

    <div className="pt-10 p-5">
      <h2 className="text-3xl capitalize">
        complite backend quicly 
      </h2>
      <p className="pt-5">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et voluptatum eius sit a velit eligendi. Provident, velit quae reprehenderit explicabo quis quaerat sapiente, quo voluptate saepe dolor, accusantium labore. Sed.
      </p>
    </div>
      </div>
      
    </div>
  );
}

export default TaskList;
